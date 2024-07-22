import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import FacebookProvider from 'next-auth/providers/facebook'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../../../firestore'

export const authOptions = {
  secret: process.env.AUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
        confirmPassword: { label: 'Confirm Password', type: 'password' }
      },
      async authorize (credentials) {
        let signInUserCredential
        let signUpUserCredential
        // Create a query to find a user with the provided email and password
        if (
          credentials.email &&
          credentials.password &&
          !credentials.confirmPassword
        ) {
          signInUserCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          )
        }
        if (
          credentials.email &&
          credentials.password &&
          credentials.confirmPassword
        ) {
          signUpUserCredential = await createUserWithEmailAndPassword(
            auth,
            credentials.email,
            credentials.password
          )
        }

        const customer = signInUserCredential
          ? signInUserCredential.user
          : signUpUserCredential.user

        if (customer) {
          let user = {name:customer.displayName, image:customer.photoURL, id:customer.uid, email:customer.email};
          return user
        } else {
          return null
        }
      }
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    })
  ],
  callbacks: {
    async signIn ({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect ({ url, baseUrl }) {
      return baseUrl
    },
    async session ({ session, user, token }) {
      session ={...session, id: token.sub}
      return session
    },
    async jwt ({ token, user, account, profile, isNewUser, trigger }) {
      return token
    }
  }
}

export default NextAuth(authOptions)
