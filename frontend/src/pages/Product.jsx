import React, { useState,useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import {assets} from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'
import { toast } from 'react-toastify'

const Product = () => {

  const {productId} = useParams();
  const {products,currency, addToCart} = useContext(ShopContext);
  const [productData,setproductData] = useState(false);
  const [image,setImage] = useState('');
  const [size,setSize] = useState('');

  const fetchProductData = async() => {
 
    products.map((item) => {
      if(item._id === productId) {
        setproductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  }
  
  useEffect(() => {
    fetchProductData();
  }, [products, productId]);

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/* Product Title and Image Section */}

        <div className='flex flex-col sm:flex-row gap-12 sm:gap-12'>
              {/*Product Image Section*/}
              <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                  {productData.image.map((item, index) => (
                    <img
                      key={index}
                      src={item}
                      alt={productData.name}
                      className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                      onClick={() => setImage(item)}
                    />
                  ))}
                </div>
                <div className='w-full sm:w-[80%]'>
                  <img
                    src={image}
                    alt={productData.name}
                    className='w-full h-auto'
                  />
                </div>
              </div>

              {/*Product Details Section*/}
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
                    <p className='mt-5 text-3xl font-medium'> {currency} {productData.price}</p>
                    <p className='mt-5 text-gray-600 w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                      <p> Select Size</p>
                      <div className='flex gap-2'>
                        {productData.sizes.map((item, index) => (
                          <button onClick={()=>setSize(item)} key={index} className={`border border-gray-400 rounded-md px-4 py-2 ${item === size ? 'bg-black text-white' : ''}`}>
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white px-6 py-2 text-sm active:bg-gray-700 rounded-md'>
                     ADD TO CART
                    </button>
                    {/* <button className='bg-gray-200 text-gray-700 px-6 py-2 text-sm active:bg-gray-300 rounded-md ml-4'>
                     ADD TO WISHLIST
                    </button> */}
                    <hr className='mt-8 sm:w-4/5' />
                    <div className='text-sm text-gray-600 mt-4 flex flex-col gap-2'>
                          <p>100% Original Product</p>
                          <p>Cash on delivery is available on this product.</p>
                          <p>Easy return and exchange policy within 7 days.</p>
                    </div>
              </div>
        </div>

                      {/*Display Related Products*/}

          <RelatedProducts category={productData.category} subCategory={productData.subCategory} />


 
          {/* Product Details Section End */}

        {/* <div className='mt-20 w-lg sm:w-2xl'> 
        <div className='flex mb-2 gap-2'>
              <b className='border px-5 py-3 text-sm'>Description</b>
              <p className='border px-5 py-3 text-sm text-gray-600'>Reviews (123)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-700'>
                 <p>{productData.description}</p>       
                  <p className='font-semibold'>Write a Review</p>
                  <textarea className='border border-gray-300 p-2 mt-1' rows={4} placeholder='Write your review here...'></textarea>
                  <button className='bg-black text-white px-6 py-2 text-sm active:bg-gray-700 rounded-md mt-2 w-1/4'>
                    SUBMIT REVIEW
                  </button>
                  <p className='text-gray-600 mt-4'>Your review will be posted after approval.</p>
                  <hr className='mt-4' />

        </div>
        </div>   */}
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
