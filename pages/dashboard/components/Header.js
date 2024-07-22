import Image from 'next/image'
import { user, sitting, order, address } from '../../images/icon'
import { useEffect, useState } from 'react'

export default function Header ({ setActiveComponent }) {
  const [orders, setOrders] = useState(1)
  const [active, setActive] = useState();
  useEffect(() => {
    // Retrieve the activeComponent from localStorage if available
    const savedActiveComponent = localStorage.getItem('activeComponent');
    if (savedActiveComponent) {
      setActive(savedActiveComponent);
    }
  }, [setActiveComponent]);

  const headerMenu = [
    { name: 'Profile', value: 'profile', icon: user },
    { name: 'Orders', value: 'orders', icon: order },
    { name: 'Address', value: 'address', icon: address },
    { name: 'Account', value: 'account', icon: sitting }
  ]

  const orderCounter = () => {
    return (
      orders !== 0 && (
        <div className='absolute top-0 right-0 w-6 h-6 flex items-center justify-center bg-green-600 rounded-full text-center'>
          <p className='text-white'>1</p>
        </div>
      )
    )
  }
  return (
    <header className='w-full bg-white shadow p-3'>
      <ul className='flex justify-around items-center'>
        {headerMenu.map((res, i) => (
          <li
            key={i}
            onClick={() => setActiveComponent(res.value)}
            className={`border cursor-pointer hover:bg-gray-50 rounded-md ${(res.value === active) && 'bg-gray-50'}`}
          >
            <div className='relative flex-col py-2 px-4 justify-center items-center text-center self-center'>
              {res.name === 'Orders' && orderCounter()}
              <div className='w-full'>
                <Image
                  src={res.icon}
                  width={40}
                  height={40}
                  alt={res.name}
                  loading='lazy'
                  className='mx-auto'
                />
              </div>
              <p className='text-md'>{res.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </header>
  )
}
