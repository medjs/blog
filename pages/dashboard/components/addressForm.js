import { useState, useEffect } from 'react'

const AddressForm = () => {
  const shippingAddressDefault = {
    fullName: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'United States',
    tel: ''
  }
  const [showAddressForm, setShowAddressForm] = useState(false)
  const [showAddressCard, setShowAddressCard] = useState(true)
  const [shippingAddress, setShippingAddress] = useState(shippingAddressDefault)

  const handleChange = event => {
    const { name, value } = event.target
    setShippingAddress(prevAddress => ({
      ...prevAddress,
      [name]: value
    }))
  }
  const onSubmit = event => {
    event.preventDefault()
    // You can add any action here before proceeding to PayPal payment
    // For example, you could validate the address or store it in the database.
    // If everything is fine, you can then proceed to PayPal payment.
    setShippingAddress(shippingAddress)
    setShowAddressCard(true)
    setShowAddressForm(false)
  }

  const handleEditAddress = () => {
    setShowAddressCard(false)
    setShowAddressForm(true)
  }

  const handleRemoveAddress = () => {
    setShowAddressCard(false)
    setShowAddressForm(false)
    setShippingAddress({
      fullName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      postalCode: '',
      country: 'United States',
      tel: ''
    })
  }

  const handleShowAddressForm = () => {
    setShowAddressForm(true)
  }

  const handleCancelEdit = () => {
    setShowAddressForm(false)
    setShowAddressCard(true)
  }
  return (
    <>
          <h1 className='text-xl font-semibold my-8'>Shipping Address</h1>
      {showAddressCard && !showAddressForm && shippingAddress.fullName && (
        <>
          <div className='border rounded-md p-4 mt-4'>
            <p className='font-semibold'>{shippingAddress.fullName}</p>
            <p>{shippingAddress.addressLine1}</p>
            {shippingAddress.addressLine2 && (
              <p>{shippingAddress.addressLine2}</p>
            )}
            <p>
              {shippingAddress.city}, {shippingAddress.state},{' '}
              {shippingAddress.postalCode}
            </p>
            <p>{shippingAddress.country}</p>
            <p>{shippingAddress.tel}</p>
            <div className='flex justify-between'>
              <button
                className='mt-2 py-2 text-blue-500 rounded-md translate-x-1 underline'
                onClick={handleEditAddress}
              >
                Update
              </button>
              <button
                className='mt-2 py-2 text-blue-500 rounded-md translate-x-1 underline'
                onClick={handleRemoveAddress}
              >
                Remove
              </button>
            </div>
          </div>
        </>
      )}
      {!showAddressForm && (!shippingAddress.fullName || !showAddressCard) && (
        <button
          className='mt-2 px-4 text-blue-500 rounded-md underline'
          onClick={handleShowAddressForm}
        >
          Add shipping address!
        </button>
      )}
      {showAddressForm && (
        <form onSubmit={onSubmit} className='mt-4 mb-6'>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-semibold'
              htmlFor='fullName'
            >
              Full Name
            </label>

            <input
              name='fullName'
              value={shippingAddress.fullName}
              onChange={handleChange}
              type='text'
              className={`form-input mt-1 block w-full rounded-md p-2`}
              placeholder='John Doe'
            />

            {/* {errors.fullName && (
              <span className='text-red-500 mt-1'>
                {errors.fullName.message}
              </span>
            )} */}
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-semibold'
              htmlFor='addressLine1'
            >
              Address Line 1
            </label>

            <input
              name='addressLine1'
              value={shippingAddress.addressLine1}
              onChange={handleChange}
              type='text'
              className={`form-input mt-1 block w-full rounded-md p-2`}
              placeholder='123 Main St'
            />

            {/* {errors.addressLine1 && (
              <span className='text-red-500 mt-1'>
                {errors.addressLine1.message}
              </span>
            )} */}
          </div>
          <div className='mb-4'>
            <label
              className='block text-gray-700 font-semibold'
              htmlFor='addressLine2'
            >
              Address Line 2
            </label>

            <input
              name='addressLine2'
              onChange={handleChange}
              value={shippingAddress.addressLine2}
              type='text'
              className={`form-input mt-1 block w-full rounded-md p-2`}
              placeholder='Apt 4B'
            />

            {/* {errors.addressLine2 && (
              <span className='text-red-500 mt-1'>
                {errors.addressLine2.message}
              </span>
            )} */}
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label
                className='block text-gray-700 font-semibold'
                htmlFor='city'
              >
                City
              </label>

              <input
                name='city'
                value={shippingAddress.city}
                onChange={handleChange}
                type='text'
                className={`form-input mt-1 block w-full rounded-md p-2`}
                placeholder='New York'
              />

              {/* {errors.city && (
                <span className='text-red-500 mt-1'>{errors.city.message}</span>
              )} */}
            </div>
            <div>
              <label
                className='block text-gray-700 font-semibold'
                htmlFor='state'
              >
                State
              </label>

              <input
                name='state'
                value={shippingAddress.state}
                onChange={handleChange}
                type='text'
                className={`form-input mt-1 block w-full rounded-md p-2`}
                placeholder='NY'
              />

              {/* {errors.state && (
                <span className='text-red-500 mt-1'>
                  {errors.state.message}
                </span>
              )} */}
            </div>
            <div>
              <label
                className='block text-gray-700 font-semibold'
                htmlFor='postalCode'
              >
                Postal Code
              </label>

              <input
                name='postalCode'
                value={shippingAddress.postalCode}
                onChange={handleChange}
                type='text'
                className={`form-input mt-1 block w-full rounded-md p-2`}
                placeholder='10001'
              />

              {/* {errors.postalCode && (
                <span className='text-red-500 mt-1'>
                  {errors.postalCode.message}
                </span>
              )} */}
            </div>
            <div>
              <label
                className='block text-gray-700 font-semibold'
                htmlFor='country'
              >
                Country
              </label>

              <input
                name='country'
                defaultValue={shippingAddress.country}
                onChange={handleChange}
                type='text'
                className={`form-input mt-1 block w-full rounded-md p-2`}
                disabled
              />

              {/* {errors.country && (
                <span className='text-red-500 mt-1'>
                  {errors.country.message}
                </span>
              )} */}
            </div>
            <div>
              <label
                className='block text-gray-700 font-semibold'
                htmlFor='tel'
              >
                Tel
              </label>

              <input
                name='tel'
                value={shippingAddress.tel}
                onChange={handleChange}
                type='tel'
                className={`form-input mt-1 block w-full rounded-md p-2`}
                placeholder='+1-453-543-788'
              />

              {/* {errors.country && (
                <span className='text-red-500 mt-1'>
                  {errors.country.message}
                </span>
              )} */}
            </div>
          </div>
          <div className='px-3 mb-5 flex justify-between'>
            <button
              type='submit'
              className='py-2 text-blue-500 rounded-md mt-4 translate-x-1 underline'
            >
              Save
            </button>
            <button
              type='button'
              className='py-2 text-gray-500 rounded-md mt-4 ml-6 translate-x-1 underline'
              onClick={handleCancelEdit}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </>
  )
}

export default AddressForm
