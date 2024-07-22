import React from 'react'
// import Navbar from './layouts/navbar'
import LoginRegisterForm from './components/loginRegisterForm'
import Image from 'next/image'
import { logo } from './images'
import { getSession } from 'next-auth/react'
import Link from 'next/link'

const Login = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main className='min-h-screen flex items-center justify-center'>
        <div className='hidden lg:flex w-1/2 h-screen justify-center items-center bg-gradient-to-r from-blue-900 to-blue-700'>
          <Link href='/'>
            <h1 className='text-5xl font-bold text-white'>VALEXES</h1>
          </Link>
        </div>
        <div className='w-full lg:w-1/2 border '>
          <LoginRegisterForm />
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps (context) {
  const session = await getSession(context)

  if (session) {
    // User is authenticated, redirect to home page
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      user: session
    }
  }
}

export default Login
