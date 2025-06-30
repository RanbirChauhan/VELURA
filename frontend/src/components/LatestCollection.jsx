import React,{ useState,useEffect } from 'react'
import {useContext} from 'react';
import {ShopContext} from '../context/ShopContext'; 
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        setLatestProducts(products.slice(0, 10)); // Assuming you want the first 10 products
    }, [products]);

  return (
    <div className='my-10'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'LATEST'} text2={'COLLECTIONS'} />
        <p className='w-3/4 m-auto text-base sm:text-sm md:text-base text-gray-600'>
          Discover the latest trends and styles in our newest collections.
        </p>
      </div>

        {/* Rendering Latest Products */}

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-4'>
          {latestProducts.map((item,index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
    }
        </div>
    </div>
      )
}

export default LatestCollection;
