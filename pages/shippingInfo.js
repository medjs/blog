import Head from 'next/head'

export default function ShippingInfo () {
  return (
    <>
      <Head>
        <title>Shipping Info</title>
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
          <h1 className='text-3xl text-center my-10'>Shipping Info</h1>
          <div className='my-4'>
            <h3 className='text-2xl my-2'> Shipping Information</h3>

            <h3 className='text-xl my-2'> Processing Time:</h3>
            <p className='text-gray-500'>
              Orders are typically processed within 1-3 business days. This time
              frame may vary during peak seasons or holidays.
            </p>

            <h3 className='text-xl my-2'>Shipping Methods:</h3>

            <p className='text-gray-500'>
              We offer the following shipping methods for your convenience:
            </p>

            <h3 className='text-xl my-2'>Standard Shipping:</h3>
            <p className='text-gray-500'>
              Estimated delivery within 9-14 business days after processing.
              This option may include tracking.
            </p>

            <h3 className='text-xl my-2'> Expedited Shipping:</h3>
            <p className='text-gray-500'>
              {' '}
              Estimated delivery within 2-5 business days after processing. This
              option includes tracking and faster delivery.
            </p>

            <p className='text-gray-500'>
              Please note that delivery times are estimates and not guaranteed.
              Delays can occur due to unforeseen circumstances such as weather
              conditions, customs clearance, and logistical issues.
            </p>

            <h3 className='text-xl my-2'>Shipping Rates:</h3>

            <p className='text-gray-500'>
              Shipping rates are calculated based on factors such as the
              destination, shipping method selected, and the weight and
              dimensions of the product(s) in your order. You can view the
              shipping cost during the checkout process before finalizing your
              order.
            </p>

            <h3 className='text-xl my-2'>Order Tracking:</h3>

            <p className='text-gray-500'>
              For orders with tracking options, you will receive a tracking
              number via email once your order has been shipped. You can use
              this tracking number to monitor the status and estimated delivery
              date of your package.
            </p>

            <h3 className='text-xl my-2'>International Shipping:</h3>

            <p className='text-gray-500'>
              We offer international shipping to select countries. Please note
              that customs and import duties may be applied to your order once
              it reaches its destination country. These charges are the
              responsibility of the recipient and vary depending on the
              destination's customs policies. We recommend contacting your local
              customs office for more information.
            </p>

            <h3 className='text-xl my-2'>Undeliverable Packages:</h3>

            <p className='text-gray-500'>
              In the event that a package is undeliverable due to incorrect
              address information provided by the customer or if the package is
              refused, the customer will be responsible for the return shipping
              costs and any applicable fees. We will attempt to contact the
              customer to resolve the issue before returning the package.
            </p>

            <h3 className='text-xl my-2'>Lost or Damaged Packages:</h3>

            <p className='text-gray-500'>
              If your order is lost or damaged during shipping, please contact
              our customer service team at customer-support@aircoolpalace.com as
              soon as possible. We will work with the shipping carrier to
              initiate an investigation and provide you with a resolution.
            </p>

            <h3 className='text-xl my-2'>Change of Shipping Address:</h3>

            <p className='text-gray-500'>
              If you need to change the shipping address for an order that has
              not been processed yet, please contact our customer service team
              immediately. Once the order has been processed and shipped, we
              cannot make changes to the shipping address.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
