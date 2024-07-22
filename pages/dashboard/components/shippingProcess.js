import { delivery } from '../../images/icon'
import Image from 'next/image'

const shippingProcess = () => {
  return (
    <div className='flex-col justify-center mt-8 border rounded-md'>
        <Image
          src={delivery}
          width={70}
          height={70}
          alt='Fast Delivery'
          className='mx-auto mt-8'
        />
        <div className=' py-6'>
          <div className='container mx-auto'>
            <h2 className='text-3xl text-center font-semibold mb-6'>
              Shipping Process
            </h2>
            <div className='flex justify-between p-4'>
              <div className='w-1/3 flex flex-col items-center'>
                <div className='bg-green-400 rounded-full p-4 shadow-sm'>
                  <svg
                    className='w-3 h-3 text-white'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='4'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <p className='font-semibold text-mdg mt-3'>Order Placed</p>
                <p className='text-gray-500'>July 11</p>
              </div>
              <div className='w-1/3 flex flex-col items-center'>
                <div className='bg-gray-300 rounded-full p-4'>
                  <svg
                    className='w-3 h-3 text-gray-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='4'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <p className='font-semibold text-md mt-3'>Shipped</p>
                <p className='text-gray-500'>July 19</p>
              </div>
              <div className='w-1/3 flex flex-col items-center'>
                <div className='bg-gray-300 rounded-full p-4'>
                  <svg
                    className='w-3 h-3 text-gray-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='4'
                      d='M5 13l4 4L19 7'
                    />
                  </svg>
                </div>
                <p className='font-semibold text-md mt-3'>Delivered</p>
                <p className='text-gray-500'>July 22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default shippingProcess