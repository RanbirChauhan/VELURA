import React from 'react'
import {assets} from '../assets/assets'
const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.final_logo} className=' w-25 h-25 mb-5' alt="Logo" />
            <p className='w-full md:w-2/3 text-gray-600 text-center sm:text-left'>
            Our mission is to provide a seamless shopping experience for our customers, ensuring quality and satisfaction with every purchase.
            </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li className='text-gray-600 hover:text-gray-800 cursor-pointer'>Home</li>
                <li className='text-gray-600 hover:text-gray-800 cursor-pointer'>About Us</li>
                <li className='text-gray-600 hover:text-gray-800 cursor-pointer'>Contact Us</li>
                <li className='text-gray-600 hover:text-gray-800 cursor-pointer'>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li className='text-gray-600 hover:text-gray-800 cursor-pointer'>Address: 123 Velura St, Fashion City</li>
                <li className='text-gray-600 hover:text-gray-800 cursor-pointer'>Phone: +1 234 567 890</li>
                <li className='text-gray-600 hover:text-gray-800 cursor-pointer'>Email: support@velura.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr className='border-gray-200' />
        <p className='text-center text-gray-500 text-sm py-5 border-t border-gray-200'>
          © 2025 Velura. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
