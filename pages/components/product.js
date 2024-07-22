import Image from 'next/image'
import { paypalCards, portable } from '../images'
import Link from 'next/link'
import { useState, useCallback, useEffect } from 'react'
// import { fakeProduct } from './fakeProduct' // Replace with the correct path to the fake product file
import PayPal from './paypal'
import { useRouter } from 'next/router' // Import the useRouter hook
import AddressForm from '../dashboard/components/addressForm'
import { Suspense } from 'react'

const Product = () => {
  const router = useRouter() // Initialize the useRouter hook
  // State to hold the selected quantity
  const [quantity, setQuantity] = useState(1)
  const [shippingCost, setShippingCost] = useState(0)
  const [scrolling, setScrolling] = useState(false)

  const handleOptionChange = event => {
    setShippingCost(Number(event.target.value))
  }

  // Function to handle quantity change and update the price
  const handleQuantityChange = event => {
    const selectedQuantity = parseInt(event.target.value)
    setQuantity(selectedQuantity)
  }

  const pricePerUnit = 20 // Set your product's price per unit here
  // Function to calculate the updated price
  const calculateUpdatedPrice = () => {
    const totalPrice = pricePerUnit * quantity + shippingCost
    return totalPrice.toFixed(2)
  }
  const handleCreateOrder = (data, actions) => {
    // Create an order and return the order ID
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: calculateUpdatedPrice()
          }
        }
      ]
    })
  }

  const handleOnApprove = useCallback(
    (data, actions) => {
      // Capture the approved payment
      return actions.order.capture().then(function (details) {
        // Show the payment success page or do any additional handling
        console.log('Payment completed successfully:', details)

        // Redirect to the success page
        router.push('/success')
      })
    },
    [router]
  )
  const onError = error => {
    console.error('PayPal error:', error)
    setError(
      'An error occurred while processing the payment. Please try again.'
    )
    // You can also trigger a specific action based on the error
    // For example, you can redirect the user to a different page or display a specific message based on the error type.
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className='container mx-auto mt-8 flex flex-col md:flex-row'>
        {/* Left side div */}
        <div className='w-full md:w-1/2'>
          <Image
            src={portable}
            alt='Product Image'
            width={800}
            height={'auto'}
          />
        </div>

        {/* Right side div */}
        <div className='w-full md:w-1/2 p-4 bg-white border shadow-sm mt-4'>
          <h2 className='text-2xl font-semibold mb-5'>Product Title</h2>
          <div className='w-full flex justify-start mt-7'>
            <span className='text-xl font-semibold'>Price: $20</span>{' '}
            <p className='line-through text-gray-500 text-xl ml-4'>$35.76</p>
          </div>
          <p className='text-gray-500 mt-7'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            reprehenderit, perferendis fugiat dolorum, obcaecati enim fugit a
            incidunt tempora saepe corporis accusamus veritatis ut omnis, nobis
            quaerat. Minus, aut officia!
          </p>
          <div className='mt-7 sm:block lg:flex justify-between'>
            <div className='w-full flex-col p-4'>
              <div className='mb-4'>
                <label className='block text-md font-medium text-gray-700'>
                  Color: <b className='font-semibold'>White</b>
                </label>
              </div>
              <div className='mb-4'>
                <label className='block text-md font-medium text-gray-700'>
                  Quantity:
                </label>
                <select
                  className='mt-1 block w-1/3 p-2 border border-gray-50 rounded-md focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                  value={quantity}
                  onChange={handleQuantityChange}
                >
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                  <option value='7'>7</option>
                  <option value='8'>8</option>
                  <option value='9'>9</option>
                  <option value='10'>10</option>
                </select>
              </div>
              <div>
                <div>
                  <input
                    value={0}
                    checked={shippingCost === 0}
                    onChange={handleOptionChange}
                    type='radio'
                    name='free'
                    id='free'
                  />
                  <label htmlFor='free'>
                    &nbsp; Standard Shipping (8-14 days){' '}
                  </label>
                </div>
                <div>
                  <input
                    value={19}
                    checked={shippingCost === 19}
                    onChange={handleOptionChange}
                    type='radio'
                    name='fast'
                    id='fast'
                  />
                  <label htmlFor='fast'>
                    &nbsp; Expedited Shipping (2-5 days)
                  </label>
                </div>
              </div>
            </div>
            <div className='w-full flex-col my-4  rounded-md p-3 leading-8 text-md bg-gray-50'>
              <div className='flex justify-between'>
                <p>item cost:</p>
                <p>${pricePerUnit}</p>
              </div>
              <div className='flex justify-between'>
                <p>Quantity:</p>
                <p>{quantity}</p>
              </div>
              <div className='flex justify-between'>
                <p>Shipping:</p>
                <p>${shippingCost}</p>
              </div>
              <div className='flex justify-between'>
                <p>Tax:</p>
                <p>$0</p>
              </div>
              <div className='flex justify-between border-t-2 text-xl'>
                <p>Total price:</p>
                <p className='font-semibold'>${calculateUpdatedPrice()}</p>
              </div>
            </div>
          </div>
          {/* Address Form */}
          {/* <AddressForm /> */}
          {/* ********* */}
          <div className='container w-full overflow-hidden mx-auto'>
            <div>
              <PayPal
                createOrder={handleCreateOrder}
                onApprove={handleOnApprove}
                onError={onError}
                // fundingSource={undefined}
              />
            </div>
            <Image
              src={paypalCards}
              width={300}
              height={'auto'}
              className='mx-auto'
              alt='cards'
            />
            <div className='text-sm mt-4'>
              <p className='text-gray-500'>
                <b className='text-black'>Privacy Notice :</b> By paying with
                your card, you acknowledge that your data will be processed by
                PayPal subject to the PayPal Privacy Statement available at
                PayPal.com.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex-col justify-center'>
        <div className='container mt-9 mx-auto'>
          {/* <Image
            src={portable}
            alt='Product Image'
            width={800}
            height={'auto'}
          />

          <Image
            src={portable}
            alt='Product Image'
            width={800}
            height={'auto'}
          />
          <Image
            src={portable}
            alt='Product Image'
            width={800}
            height={'auto'}
          /> */}
        </div>
      </div>
      <div
        className={`w-full fixed items-center bg-black justify-around text-white pb-2 px-2 border-y border-white z-10 ${
          !scrolling ? 'hidden' : 'block bottom-0'
        }`}
      >
        <div className='w-full flex justify-around items-center mx-auto text-center transition-all duration-500 lg:w-1/2'>
          <h2 className='px-2'>Pay as a Guest and get your tracking number by email</h2>
          <PayPal
            createOrder={handleCreateOrder}
            onApprove={handleOnApprove}
            fundingSource={'paypal'}
          />
        </div>
      </div>
    </>
  )
}

export default Product
