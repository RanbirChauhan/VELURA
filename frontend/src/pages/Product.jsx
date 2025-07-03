import React, { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'
import { toast } from 'react-toastify'
import { useLocation, useNavigate } from 'react-router-dom'; //


const Product = () => {
  const { productId } = useParams()
  const navigate = useNavigate();
  const location = useLocation();
  const { products, currency, addToCart,token } = useContext(ShopContext)

  const [productData, setProductData] = useState(null)
  const [image, setImage] = useState('')
  const [size, setSize] = useState('')

  //  Fetch product data when productId or products change
  useEffect(() => {
    const foundProduct = products.find(item => item._id === productId)
    if (foundProduct) {
      setProductData(foundProduct)
      setImage(foundProduct.image[0])
      setSize('') // reset selected size when navigating to a new product
    }
    //  Scroll to top when new product is opened
    window.scrollTo(0, 0)
  }, [products, productId])

  //  Add to cart with validation

const handleAddToCart = () => {
  if (!token) {
    toast.warn("Please login to add items to cart", { position: 'top-center' })
    navigate('/login', { state: { from: location.pathname,redirectMessage: 'Welcome back! You can now continue shopping.'  } })
    return
  }

  if (!size) {
    toast.warn("Please select a size before adding to cart", { position: 'top-center' })
    return
  }

  addToCart(productData._id, size)
}


  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Layout */}
      <div className='flex flex-col sm:flex-row gap-12'>
        {/* Image Section */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={productData.name}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                onClick={() => setImage(img)}
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt={productData.name} className='w-full h-auto' />
          </div>
        </div>

        {/* Details Section */}
        <div className='flex-1'>
          <h1 className='text-2xl font-bold mb-2'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img className="w-3.5" src={assets.star_icon} />
            <img className="w-3.5" src={assets.star_icon} />
            <img className="w-3.5" src={assets.star_icon} />
            <img className="w-3.5" src={assets.star_icon} />
            <img className="w-3.5" src={assets.star_dull_icon} />
            <p className='pl-2'>(123)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
          <p className='mt-5 text-gray-600 w-4/5'>{productData.description}</p>

          {/* Size Selection */}
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border border-gray-400 rounded-md px-4 py-2 ${item === size ? 'bg-black text-white' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className='bg-black text-white px-6 py-2 text-sm active:bg-gray-700 rounded-md'
          >
            ADD TO CART
          </button>

          <hr className='mt-8 sm:w-4/5' />

          {/* Product Guarantees */}
          <div className='text-sm text-gray-600 mt-4 flex flex-col gap-2'>
            <p>100% Original Product</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className='opacity-0'></div>
  )
}

export default Product
