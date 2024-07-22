// pages/checkout.js
import { useState, useCallback } from 'react'
import { fakeProduct } from './fakeProduct' // Replace with the correct path to the fake product file
import PayPal from './paypal'
import { useRouter } from 'next/router' // Import the useRouter hook

const CheckoutPage = () => {
  const router = useRouter() // Initialize the useRouter hook
  const [cartItems, setCartItems] = useState([])

  const handleAddToCart = () => {
    // Add the fakeProduct to the cartItems array
    setCartItems([...cartItems, fakeProduct])
  }

  const handleCreateOrder = (data, actions) => {
    // Create an order and return the order ID
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: fakeProduct.price
          }
        }
      ]
    })
  }

  const handleOnApprove = useCallback(
    (data, actions) => {
      // Capture the approved payment
      return actions.order.capture().then(function (details) {
        // Show the payment success page or do any additional handling
        console.log('Payment completed successfully:', details)

        // Redirect to the success page
        router.push('/success')
      })
    },
    [router]
  )

  return (
    <div>
      <h1>Checkout</h1>
      <img src={fakeProduct.imageUrl} alt={fakeProduct.name} />
      <p>{fakeProduct.name}</p>
      <p>Price: ${fakeProduct.price}</p>
      <p>{fakeProduct.description}</p>

      <button onClick={handleAddToCart}>Add to Cart</button>
      <PayPal createOrder={handleCreateOrder} onApprove={handleOnApprove} />
    </div>
  )
}

export default CheckoutPage
