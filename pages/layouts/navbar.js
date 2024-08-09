import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState, useEffect, useRef } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'
import { cross, menu } from '../../public/icons'



const navbar = () => {
  const pages = [
    {
      name: 'Home',
      target: '/'
    },
    {
      name: 'Blog',
      target: '/blog'
    },
    {
      name: 'Contact',
      target: '/contact'
    }
  ]
  const pathname = usePathname()
  const [active, setactive] = useState(true)
  const [toggle, setToggle] = useState(false)

  const { data: session } = useSession()
  console.log("user from navbar", session)

  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)
  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }

  const [scrolling, setScrolling] = useState(false)

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

  const handleOutsideClick = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <>
      <div
        className={`flex items-center justify-between py-4 top-0 w-full z-10 border-b-2 sticky ${scrolling && 'opacity-70 bg-white'}`}
      >
        <div className='container w-full  mx-auto px-4 flex justify-between items-center'>
          <div className=' w-1/2 flex  justify-between md:w-1/4 '>
            <Link href='/' className='text-3xl font-bold'>
              VALEXES
            </Link>
            {/* <input type='text' placeholder='search...' name='search' className='border rounded-2xl px-2 mx-4' /> */}
          </div>

          {session ? (
            <div className=' w-1/3 flex  px-4 justify-between items-center  '>
              <div className='dropdownMenu' ref={dropdownRef}>
                <div
                  className='flex items-center cursor-pointer'
                  onClick={toggleDropdown}
                >
                  {session?.user.image ? (
                    <Image
                      className=' rounded-full'
                      src={`${session.user.image}`}
                      width={40}
                      height={40}
                      alt='user image'
                    />
                  ) : (
                    <div className='rounded-full bg-gray-500'>
                      <p className='flex justify-center items-center font-semibold h-10'>
                        {session?.user.email.charAt(0).toUpperCase()}
                      </p>
                    </div>
                  )}

                  {session?.user.name ? (
                    <b className='font-semibold ml-4'>{session?.user.name}</b>
                  ) : (
                    <b className='font-semibold ml-4'>
                      Welcome {session?.user.email.split('@')[0]}
                    </b>
                  )}


                </div>
              </div>
              <ul className='flex justify-around items-center w-1/2 '>
                {pathname === '/dashboard' ? (
                  <Link href='/'>
                    <li className={`font-semibold  ${pathname === '/' && 'text-orange-500'}`}>Home</li>
                  </Link>
                ) : (
                  <Link href='/dashboard'>
                    <li className={`font-semibold  ${pathname === '/dashboard' && 'text-orange-500'}`}>
                      Dashboard
                    </li>
                  </Link>
                )}
                <li
                  onClick={signOut}
                  className='font-semibold border rounded-lg text-black px-3 py-1'
                >
                  Logout
                </li>
              </ul>
            </div>
          ) : (
            pathname !== '/login' && (
              <nav className='flex justify-end items-center w-full  text-xl'>
                <ul className='hidden sm:flex justify-around items-center w-1/2 '>
                  <Link href='/'>
                    <li className={`font-semibold hover:text-orange-500 ${pathname === '/' && 'text-orange-500'}`}>Home</li>
                  </Link>
                  <Link href='/blog'>
                    <li className={`font-semibold hover:text-orange-500 ${pathname === '/blog' && 'text-orange-500'}`}>Blog</li>
                  </Link>
                  <Link href='/contact'>
                    <li className={`font-semibold hover:text-orange-500 ${pathname === '/contact' && 'text-orange-500'}`}>Contact</li>
                  </Link>
                  <Link
                    href='/login' className='font-semibold border px-3 text-lg pb-1 flex justify-center items-center rounded-2xl bg-black text-white text-center hover:bg-orange-300'
                  >
                    sign in
                  </Link>
                </ul>

                <div className='sm:hidden flex flex-1 justify-end items-center w-1/2'>
                  <Image width={30} height={'auto'} src={!toggle ? menu : cross} alt='menu' onClick={() => setToggle(!toggle)} className='text-3xl font-bold cursor-pointer' />
                  <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-white border absolute top-10 right-8 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                    <ul className='flex-col justify-end items-start gap-4'>
                      {pages.length && pages.map((res, i) => (
                        <Link key={i} href={res.target}>
                          <li
                            className={`px-2 py-1 list-none text-lg font-medium hover:text-gray-400 hover:underline`}
                            onClick={() => setToggle(!toggle)}
                          >
                            {res.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </nav>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default navbar
