import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-sm sm:text-sm md:text-base text-gray-700'>
      <div>
        <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="Exchange" lazy-loading />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='w-3/4 m-auto text-gray-400'>We offer hassle-free exchanges within 30 days of purchase.</p>
      </div>

      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="Quality" lazy-loading />
        <p className='font-semibold'>Quality Assurance</p>
        <p className='w-3/4 m-auto text-gray-400'>We ensure the best quality products for our customers.</p>
      </div>

      <div>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="Support" lazy-loading />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='w-3/4 m-auto text-gray-400'>24/7 support for all your needs.</p>
      </div>

    </div>
  )
}

export default OurPolicy
