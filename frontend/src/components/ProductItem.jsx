import React from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);
  return (
    <Link to={`/product/${id}`} className='text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out cursor-pointer'>
      <div className='overflow-hidden'>
        <img src={image[0]} alt="" className='w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105' loading="lazy" />
      </div>

      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem
