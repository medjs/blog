import { useState } from 'react'
import ShippingProcess from './shippingProcess'
import { portable } from '../../images'
import Image from 'next/image'
import { OrderProvider } from '../../../context/userContext'






const OrdersComponent = () => {
  const [hide, setHide] = useState(false)
  const showAndHideOption = () => {
    hide ? setHide(false) : setHide(true)
    console.log('hide', hide)
  }
  const data = OrderProvider()
  console.log('orders', data)


  return (
    <>
      <div className='flex items-center justify-between my-8 border rounded-md p-3'>
        <div className='w-1/3 flex justify-center items-start'>
          <div className='relative'>
            <Image src={portable} width={60} height={60} alt='airCool' />
            <p className='text-black absolute bottom-0 right-0'>x1</p>
          </div>
        </div>
        <div className='w-1/3 text-center'>
          <p className='text-gray-400'>customer</p>
          <p>Tony Murray </p>
        </div>
        <div className='w-1/3 text-center'>
          <button
            className={`${hide === false ? 'text-blue-500 underline' : 'text-gray-500 underline'}`} 
            onClick={() => showAndHideOption()}
          >
            {' '}
            Order Details{' '}
          </button>
        </div>
      </div>
      <div className={`${hide === false ? 'hidden' : 'block'} `}>
        <ShippingProcess />
        <div className='mt-7 border rounded-md p-3'>
          <h1 className='text-2xl font-semibold my-4'>Shipping</h1>
          <div className='w-full flex justify-between items-start'>
            <div className='w-1/2'>
              <p className='text-gray-400'>Ship to:</p>
              <p>Tony Murray </p>
              <p>{data}</p>
              <p className='text-gray-400'>Phone</p>
              <p>+1 318-946-5206</p>
            </div>
            <div className='w-1/2'>
              <div>
                <p className='text-gray-400'>selected shipping service</p>
                <p>Standard Shipping</p>
              </div>
              <div className='mt-4'>
                <p className='text-gray-400'>Tracking</p>
                <p className='text-blue-500 break-all'>
                  9879879879879879879879765654543
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full p-3 border rounded-md my-7'>
          <h1 className='text-2xl font-semibold'>Item</h1>
          <div className='sm:flex-wrap md:flex w-full justify-between items-start mt-5'>
            <div className='flex '>
              <Image src={portable} width={60} height={60} alt='airCool' />
              <div className=' ml-4'>
                <p className='text-gray-500'>title item</p>
                <p>item color</p>
              </div>
            </div>

            <div className='flex text-center sm:flex-col justify-between'>
              <p className='text-gray-500'>Quantity</p>
              <p>1</p>
            </div>
            <div className='flex text-center sm:flex-col justify-between'>
              <p className='text-gray-500'>Price</p>
              <p>20$</p>
            </div>
            <div className='flex text-center sm:flex-col justify-between'>
              <p className='text-gray-500'>Total</p>
              <p>20$</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrdersComponent
