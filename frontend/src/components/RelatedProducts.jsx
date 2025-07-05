import React, { useContext, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const RelatedProducts = ({ category, subCategory }) => {
  const { products, currency } = useContext(ShopContext)
  const [related, setRelated] = useState([])
  const { productId } = useParams() // To avoid showing the same product as related

  useEffect(() => {
    if (products.length > 0) {
      const filtered = products
        .filter((item) =>
          item.category === category &&
          item.subCategory === subCategory &&
          item._id !== productId // Avoid showing the current product
        )
        .slice(0, 5)

      setRelated(filtered)
    }
  }, [products, category, subCategory, productId])

  return (
    <div className='my-24'>
      <div className='text-center text-3xl py-2'>
        <Title text1={'RELATED'} text2={'PRODUCTS'} />
      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {related.map((item) => (
          <Link key={item._id} to={`/product/${item._id}`} className='hover:shadow-lg transition p-3'>
            <img
              src={item.image[0]}
              alt={item.name}
              lazy-loading
            />
            <h3 className='text-sm font-semibold text-gray-800 truncate'>{item.name}</h3>
            <p className='text-sm text-gray-600'>{currency}{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts
