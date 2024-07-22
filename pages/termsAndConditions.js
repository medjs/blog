import Head from 'next/head'

export default function Terms () {
  return (
    <>
      <Head>
        <title>terms and Conditions</title>
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
        <h1 className='text-3xl text-center my-10'>Terms and Conditions </h1>
        <div className='my-4'>
          <h3 className='text-2xl my-2'>1. Acceptance of Terms</h3>
          <p className='text-gray-500'>
            By accessing and using the AircoolPalace website ("the Website") and
            purchasing the Portable Mini Air Cooler USB Air Conditioner ("the
            Product"), you agree to comply with and be bound by these terms and
            conditions ("Terms"). If you do not agree with these Terms, please
            do not use the Website or purchase the Product.
          </p>{' '}
        </div>
        <div className='my-4'>
          <h3 className='text-2xl my-2'>2. Product Information </h3>
          <p className='text-gray-500'>
            2.1. The Product information provided on the Website, including
            descriptions, specifications, and images, is intended for
            informational purposes. We make efforts to ensure accuracy, but we
            do not guarantee the completeness, accuracy, or reliability of the
            information.
          </p>
          <p className='text-gray-500'>
            {' '}
            2.2. We reserve the right to modify the Product specifications,
            features, and pricing without prior notice.
          </p>
        </div>
        <div className='my-4'>
          <h3 className='text-2xl my-2'>3. Purchase and Payment</h3>
          <p className='text-gray-500'>
            3.1. When you place an order for the Product, you agree to provide
            accurate and complete information.
          </p>{' '}
          <p className='text-gray-500'>
            3.2. Payment for the Product is due at the time of order placement.
            We accept PayPal payment methods.
          </p>
          <p className='text-gray-500'>
            3.3. We use PayPal for payments and other services. If you wish to
            use one of these services and pay on our website, PayPal may collect
            the personal data you provide, such as payment and other identifying
            information. PayPal uses this information to operate and improve the
            services it provides to us and others, including for fraud
            detection, harm and loss prevention, authentication, analytics
            related to the performance of its services, and to comply with
            applicable legal requirements. The processing of this information
            will be subject to the PayPal Privacy Statement available at
            PayPal.com.
          </p>
        </div>
        <div className='my-4'>
          <h3 className='text-2xl my-2'>4. Shipping and Delivery </h3>
          <p className='text-gray-500'>
            4.1. We use sourcing methods to procure the Product. Delivery times
            may vary based on your location and other factors.{' '}
          </p>
          <p className='text-gray-500'>
            4.2. We are not responsible for delays or issues arising from
            third-party shipping and delivery services.
          </p>
        </div>
        <div className='my-4'>
          <h3 className='text-2xl py-2'>5. Returns and Refunds</h3>{' '}
          <p className='text-gray-500'>
            5.1. We offer a 60-day's return policy. If you are not satisfied
            with the Product, you may be eligible for a return and refund.
            Please refer to our Return Policy for detailed information.
          </p>
        </div>
        <div className='my-4'>
          <h3 className='text-2xl py-2'>6. Intellectual Property </h3>
          <p className='text-gray-500'>
            6.1. All content on the AircoolPalace Website, including text,
            graphics, images, and software, is protected by copyright and other
            intellectual property laws.
          </p>
          <p className='text-gray-500'>
            {' '}
            6.2. You may not reproduce, distribute, modify, or create derivative
            works of the content without our prior written consent.
          </p>
        </div>
        <div className='my-4'>
          <h3 className='text-2xl py-2'>7. User-Generated Content</h3>
          <p className='text-gray-500'>
            7.1. You may have the opportunity to submit reviews or other
            user-generated content related to the Product. By submitting such
            content, you grant AircoolPalace a non-exclusive, worldwide,
            royalty-free license to use, reproduce, modify, adapt, publish,
            translate, and distribute the content.
          </p>
          <p className='text-gray-500'>
            {' '}
            7.2. User-generated content must not violate third-party rights or
            applicable laws.
          </p>{' '}
        </div>
        <div className='my-4'>
          <h3 className='text-2xl py-2'>8. Privacy</h3>{' '}
          <p className='text-gray-500'>
            8.1. Our Privacy Policy outlines how we collect, use, and protect
            your personal information. By using the Website and purchasing the
            Product, you consent to the practices described in the Privacy
            Policy.
          </p>{' '}
        </div>
        <div className='my-4'>
          <h3 className='text-2xl py-2'>9. Limitation of Liability</h3>{' '}
          <p className='text-gray-500'>
            9.1. AircoolPalace and its affiliates will not be liable for any
            direct, indirect, incidental, consequential, or special damages
            arising from your use of the Website, the Product, or inability to
            use them.
          </p>
        </div>
        <div className='my-4'>
          <h3 className='text-2xl py-2'>10. Modifications to the Terms</h3>
          <p className='text-gray-500'>
            10.1. We reserve the right to modify or update these Terms at any
            time. Your continued use of the Website or purchase of the Product
            after any changes constitutes your acceptance of the new Terms.
          </p>
        </div>
      </div>
      </main>
    </>
  )
}
