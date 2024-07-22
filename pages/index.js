import Head from 'next/head'
import Navbar from './layouts/navbar'
import Footer from './layouts/footer'
import Product from './components/product'
import Image from 'next/image'
import { getSession } from 'next-auth/react'
import HeaderHero from './components/headerHero'

export default function Home () {
  return (
    <>
      <Head>
        <title>VALEXES</title>
        <meta
          name='description'
          content='Web development blog, all you need'
          key='desc'
        />
        <meta property='og:title' content='Welcome to Valexes Blog' />
        <meta
          property='og:description'
          content='Be a part from our free premuime membership'
        />
        <meta property='og:image' content='./logo.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='./logo.png' />
      </Head>
      <main className='min-h-screen z-10 overflow-hidden'>
       <HeaderHero/>
      </main>
    </>
  )
}
