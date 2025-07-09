import React from 'react'
import {assets} from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.final_logo} className=' w-25 h-25 mb-5' alt="Logo" loading="lazy" />
            <p className='w-full md:w-2/3 text-gray-600 text-center sm:text-left'>
            Our mission is to provide a seamless shopping experience for our customers, ensuring quality and satisfaction with every purchase.
            </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
           <ul className="flex flex-col gap-2 text-gray-600">
            <li>
              <Link to="/" className="hover:text-gray-800 cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-800 cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-800 cursor-pointer"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="hover:text-gray-800 cursor-pointer"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li className='text-gray-600 hover:text-gray-800 cursor-pointer'>Address: 123 Velura St, Fashion City <br />New Delhi</li>
                <li className='text-gray-600 hover:text-gray-800 cursor-pointer'>Phone: +91 86034 02512</li>
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
