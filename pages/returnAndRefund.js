import Head from 'next/head'

export default function ReturnAndRefund () {
  return (
    <>
      <Head>
        <title>Return and Refund</title>
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
          <h1 className='text-3xl text-center my-4'>
            {' '}
            Return and Refund Policy
          </h1>
          <p className='text-gray-500 py-2'>
            Thank you for shopping at AircoolPalace. We value your satisfaction
            and strive to provide you with high-quality products and excellent
            customer service. If you are not entirely satisfied with your
            purchase, we're here to help.
          </p>
          <div className='my-4'>
            <h3 className='text-2xl my-4'>1. Return Policy </h3>
            <p className='text-gray-500 py-2'>
              1.1. To initiate a return, please contact our customer service
              team at customer-support@aircoolpalace.com within 7 days of
              receiving the product. We will guide you through the return
              process.
            </p>
            <p className='text-gray-500 py-2'>
              1.2. The product must be returned in its original packaging and in
              the same condition as you received it. Any signs of use, damage,
              or tampering may affect your eligibility for a return.
            </p>
            <p className='text-gray-500 py-2'>
              1.3. Please include a copy of your purchase receipt or order
              confirmation with the returned product.
            </p>
            <p className='text-gray-500 py-2'>
              1.4. You are responsible for the return shipping costs, unless the
              return is a result of our error or a defective product.
            </p>
          </div>
          <div className='my-4'>
            <h3 className='text-2xl my-4'>2. Refund Policy </h3>
            <p className='text-gray-500 py-1'>
              Once we receive your returned product and inspect it, we will
              notify you regarding the status of your refund. If your return is
              approved, we will initiate a refund to your original payment
              method.
            </p>
            <p className='text-gray-500 py-2'>
              {' '}
              Please allow 7-10 days for the refund to be processed and
              reflected in your account. If you haven't received your refund
              within the specified timeframe, please contact us at
              customer-support@aircoolpalace.com
            </p>
          </div>
          <div className='my-4'>
            <h3 className='text-2xl my-4'>3. Exchanges</h3>
            <p className='text-gray-500 py-1'>
              We currently do not offer direct exchanges for products. If you
              wish to exchange a product, please follow the return process and
              then place a new order for the desired product.
            </p>
          </div>
          <div className='my-4'>
            <h3 className='text-2xl my-4'>4. Damaged or Defective Products</h3>
            <p className='text-gray-500 py-1'>
              If you receive a damaged or defective product, please contact us
              within 7 days of receiving the product. We will guide you through
              the necessary steps to address the issue, which may include a
              return, replacement, or refund.
            </p>
          </div>
          <div className='my-4'>
            <h3 className='text-2xl my-4'>5. Contact Us </h3>
            <p className='text-gray-500 py-1'>
              If you have any questions about our Return and Refund Policy,
              please contact our customer service team at customer service email
              customer-support@aircoolpalace.com
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
