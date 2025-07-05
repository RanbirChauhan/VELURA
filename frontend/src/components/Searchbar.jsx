import React, { useState,useEffect } from 'react'
import {useContext} from 'react'
import { ShopContext } from '../context/ShopContext';
import {assets} from '../assets/assets'
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
  const { search, setSearch, showSearch,setShowSearch } = useContext(ShopContext);
  const [visible,setvisible] = useState(false);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname.includes('collection')){
        setvisible(true);
    }
    else{
        setvisible(false);
    }
  },[location])

  return showSearch && visible ? (
    <div className=' text-center my-5'>
      <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className='flex-1 outline-none bg-inherit text-sm'
        />
        <img className=' w-4' src={assets.search_icon} lazy-loading />
      </div>
      <img onClick={() => setShowSearch('')} className='inline w-3 cursor-pointer' src={assets.cross_icon} lazy-loading />
    </div>
  ) : null;

};

export default Searchbar
