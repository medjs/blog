// pages/paypal.js
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'

const paypalOptions = {
  clientId:
    'AfjqA3mXU-dQyfHcj3h9m9Z8HQ2MN0ZY91uES3xd_dI2c1Ot6xpLNzHCsF2gX8oQussEvdYMx5RfPicz',
  currency: 'USD',
  locale: 'en_US'
}

const PayPalPage = ({ createOrder, onApprove, fundingSource }) => {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <PayPalButtons
        fundingSource={fundingSource}
        createOrder={createOrder}
        onApprove={onApprove}
        style={{ layout: 'vertical' }}
        className='relative z-0 mt-4'
      />
    </PayPalScriptProvider>
  )
}

export default PayPalPage
