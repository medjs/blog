import React, { useState } from 'react'
import Link from 'next/link'
import { paypalCards } from '../images'
import Image from 'next/image'

const footer = () => {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const newsletter = event => {
    event.preventDefault()
    if (validateEmail(email)) {
      // Perform any further processing, like submitting the form via API or storing in a database
      // For example: sendNewsletterSubscription(email);
      setErrorMessage('') // Clear any previous error message
    } else {
      setErrorMessage('Please enter a valid email address.')
    }
  }

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  return (
    <div className='w-full p-6 buttom-0'>
      <div className=' container px-4 mx-auto sm:flex-wrap-reverse md:flex justify-around'>
        <div className='w-full md:w-1/2'>
          <h3 className='text-xl font-semibold'>Links</h3>
          <div className=' flex-col h-60 leading-9 mt-5'>
            <div className='hover:underline'>
              <Link href='/termsAndConditions'>
                <p>Terms and conditions</p>
              </Link>
            </div>
            <div className='hover:underline'>
              <Link href='/returnAndRefund'>
                <p>Return and refund policy</p>
              </Link>
            </div>
            <div className='hover:underline'>
              <Link href='/privacyPolicy'>
                <p>Privicy policy</p>
              </Link>
            </div>
            <div className='hover:underline'>
              <Link href='/shippingInfo'>
                <p>Shipping info</p>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full mt-6 md:w-1/3  '>
          <h3 className='text-xl font-semibold'>Subscribe</h3>

          <div className='flex-col h-auto leading-9 mt-5 sm:w-full'>
            <form onSubmit={newsletter}>
              <div>
                <p className='mb-3'>
                  Get the latest news about discounts, new arrival product's.
                </p>
                <input
                  className='w-full rounded-sm border border-gray-400 text-black pl-1'
                  type='email'
                  name='email'
                  placeholder='Enter your email address'
                  value={email}
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className='mt-4'>
                <button
                  type='submit'
                  className=' w-full rounded-sm border border-gray-400  text-xl p-2 hover:bg-blue-400'
                >
                  Submit
                </button>
              </div>
              {errorMessage && (
                <div className='text-red-500'>{errorMessage}</div>
              )}
            </form>
          </div>
        </div>
      </div>
      <div className='p-3 mt-5 text-center text-sm'>
        <p>All rights reserved &copy; 2023 AirCoolPalace</p>
      </div>
    </div>
  )
}

export default footer
