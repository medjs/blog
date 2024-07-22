import Head from 'next/head'

export default function Privacy () {
  return (
    <>
      <Head>
        <title>Privacy Policy</title>
        <meta
          name='description'
          content='Web development blog to learn javascript frameworks'
          key='desc'
        />
        <meta property='og:title' content='Welcome to ScriptoFile Blog' />
        <meta
          property='og:description'
          content='Hurry up! subscribe and be a part of our community and get access to all our built projects for free'
        />
        <meta property='og:image' content='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='p-4 mx-auto bg-white shadow-md my-6 sm:w-full md:w-2/3 lg:w-1/3'>
          <h1 className='text-3xl text-center my-10'>Privacy Policy</h1>
          <p className='text-md text-gray-600'>Last updated: 17/08/2023</p>
          <div className='my-4'>
            <p className='text-gray-500'>
              At AircoolPalace, we are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              personal data when you visit our website, and make use of our
              services. By accessing and using the Website, you consent to the
              practices described in this Privacy Policy.
            </p>
          </div>
          <h1 className='text-2xl my-10'>Information We Collect</h1>
          <h1 className='text-xl my-4'>1. Personal Information:</h1>
          <p className='text-gray-500'>
            When you make a purchase or register for an account on our Website,
            we may collect personal information such as your name, email
            address, shipping address.{' '}
          </p>
          <h1 className='text-xl my-4'>2. Usage Data:</h1>
          <p className='text-gray-500'>
            {' '}
            We may collect information about how you interact with the Website,
            including your IP address, browser type, pages visited, and other
            diagnostic data.
          </p>
          <h1 className='text-2xl my-10'>How We Use Your Information</h1>
          <p className='text-gray-500'>
            We use your personal information to process your orders, provide
            customer support, and communicate with you about your purchases and
            account.
          </p>
          <p className='text-gray-500'>
            We may use your information to improve and personalize your
            experience on our Website, and to develop new features and
            offerings.{' '}
          </p>
          <p className='text-gray-500'>
            We may use your contact information to send you promotional
            materials, newsletters, and other updates. You can opt-out of these
            communications at any time.{' '}
          </p>
          <h1 className='text-2xl my-10'>Information Sharing and Disclosure</h1>
          <p className='text-gray-500'>
            We may share your personal information with third-party service
            providers who assist us in delivering our services, such as payment
            processors and shipping companies.
          </p>
          <p className='text-gray-500'>
            We do not sell, trade, or rent your personal information to third
            parties for marketing purposes.
          </p>
          <p className='text-gray-500'>
            We may disclose your information if required by law or to protect
            our rights, safety, and property, or those of others.
          </p>
          <h1 className='text-2xl my-10'>Data Security</h1>
          <p className='text-gray-500'>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, please be aware that no method of data
            transmission over the internet or electronic storage is completely
            secure.
          </p>
          <h1 className='text-2xl my-10'>Your Choices </h1>
          <p className='text-gray-500'>
            You can access, update, or delete your personal information by
            logging into your account on our Website.
          </p>
          <p className='text-gray-500'>
            You can choose to opt-out of receiving promotional communications
            from us by following the unsubscribe instructions included in the
            emails or by contacting us at customer-support@aircoolpalace.com.
          </p>
          <h1 className='text-2xl my-10'>Cookies and Tracking Technologies</h1>
          <p className='text-gray-500'>
            {' '}
            We use cookies and similar tracking technologies to enhance your
            experience on our Website and collect information about your
            browsing behavior. You can modify your browser settings to control
            cookies or receive notifications when cookies are being used.
          </p>

          <h1 className='text-2xl my-10'>Changes to This Privacy Policy</h1>
          <p className='text-gray-500'>
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page with a revised "Last updated" date.
          </p>

          <h1 className='text-2xl my-10'>Contact Us </h1>
          <p className='text-gray-500'>
            If you have questions about our Privacy Policy or the data we hold
            about you, please contact us at customer-support@aircoolpalace.com
          </p>
        </div>
      </main>
    </>
  )
}
