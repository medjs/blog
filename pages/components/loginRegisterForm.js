// components/LoginRegisterForm.js
import React, { useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import { auth } from '../api/firestore/firestore'

const LoginRegisterForm = () => {
  const router = useRouter()
  const { data: session, update } = useSession()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isRegistering, setIsRegistering] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }
  const handleUsernameChange = event => {
    setUsername(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value)
  }

  const handleCustomSignIn = async e => {
    e.preventDefault()
    // Call the signIn function with the provider name and credentials

    const result = await signIn('credentials', {
      email: email,
      password: password,
      callbackUrl: '/', // Redirect URL after successful login
      redirect: false // Do not let NextAuth.js handle the redirect
    })
    if (result.ok) {
      return router.push('/')
    }
    if (result.error) {
      setErrorMessage(result.error)
    }
  }

  const handleCustomSignUp = async e => {
    e.preventDefault()
    // Call the signUp function with the email and password
    if (password === confirmPassword) {
      const result = await signIn('credentials', {
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        callbackUrl: '/', // Redirect URL after successful login
        redirect: false // Do not let NextAuth.js handle the redirect
      })
      if (result.ok) {
        return router.push('/')
      }
      if (result.error) {
        setErrorMessage('Email already in use')
      }
    } else {
      setErrorMessage('confirm password not match to origin!')
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!isRegistering) {
      // Validate email is a valid email address
      if (!isValidEmail(email)) {
        setErrorMessage('Please enter a valid email address.')
        return
      }
    }

    if (isRegistering) {
      // Validate email is a valid email address
      if (!isValidEmail(email)) {
        setErrorMessage('Please enter a valid email address.')
        return
      }

      // Validate password and confirmpassword fields match
      if (password !== confirmPassword) {
        setErrorMessage('Passwords do not match.')
        return
      }

      // Validate password is at least 6 characters long
      if (password.length < 6) {
        setErrorMessage('Password must be at least 6 characters long.')
        return
      }

      // Register the user using 'email' and 'password'
      setErrorMessage('') // Clear any previous error message
    } else {
      // Login the user using 'email' and 'password'
      setErrorMessage('') // Clear any previous error message
    }

    // Clear form inputs after submission
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  const handleToggleForm = () => {
    setIsRegistering(prev => !prev)
    setErrorMessage('') // Clear any previous error message when switching between login and register
  }

  const isValidEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  return (
    <div className='min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            {isRegistering ? 'Register' : 'Log in'}
          </h2>
        </div>
        <form
          className='mt-8 space-y-6'
          onSubmit={!isRegistering ? handleCustomSignIn : handleCustomSignUp}
        >
          <div className='rounded-md shadow-sm -space-y-px'>
            <div>
              <label htmlFor='email-address' className='sr-only'>
                Email address
              </label>
              <input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                value={email}
                onChange={handleEmailChange}
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Email address'
              />
            </div>

            <div>
              <label htmlFor='password' className='sr-only'>
                Password
              </label>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='new-password'
                required
                value={password}
                onChange={handlePasswordChange}
                className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                placeholder='Password'
              />
            </div>

            {isRegistering && (
              <div>
                <label htmlFor='confirm-password' className='sr-only'>
                  Confirm Password
                </label>
                <input
                  id='confirm-password'
                  name='confirmPassword'
                  type='password'
                  autoComplete='new-password'
                  required
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Confirm Password'
                />
              </div>
            )}
          </div>

          <div>
            <button
              type='submit'
              className='w-full flex justify-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              {isRegistering ? 'Register' : 'Log in'}
            </button>
          </div>
        </form>
        <button
          
          onClick={() => signIn('google')}
          className='w-full flex justify-center items-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
         <FaGoogle className="w-6 h-6 mr-2" />
          Sign in with google
        </button>
        
        <button
          onClick={() => signIn('facebook')}
          className='w-full flex justify-center items-center py-2 px-4 border border-transparent text-md font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          <FaFacebook className="w-6 h-6 mr-2" />
          Sign in with facebook
        </button>
        
        {errorMessage && (
          <div className='text-red-500 text-center'>{errorMessage}</div>
        )}

        <div className='text-center'>
          <button
            type='button'
            className='font-medium text-indigo-600 hover:text-indigo-500'
            onClick={handleToggleForm}
          >
            {isRegistering
              ? 'Already have an account? Log in'
              : "Don't have an account? Register"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginRegisterForm
