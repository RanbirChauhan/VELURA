import React from 'react'

const onSubmitHandler = (e) => {
  e.preventDefault();
}
const NewsletterBox = () => {
  return (
    <div className='text-center mb-2'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-600 mb-4'>Get the latest updates and offers.</p>
      <form  onSubmit={onSubmitHandler} className='flex justify-center items-center'>
        <input type="email" placeholder="Enter your email" className='p-2 border border-gray-300 rounded-lg' required />
        <button type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-lg ml-2 hover:bg-blue-700'>SUBSCRIBE</button>
      </form>
    </div>
  )
}

export default NewsletterBox
