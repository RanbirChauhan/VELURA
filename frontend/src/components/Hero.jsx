
import React,{useState,useEffect} from 'react'
import img1 from '../assets/p_img2_1.png';
import img2 from '../assets/p_img8.png';
import img3 from '../assets/p_img36.png';
import img4 from '../assets/p_img37.png';
import img5 from '../assets/p_img38.png';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5
];

const RandomImage = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return images[index];
};

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 rounded-tr-2xl '>
        {/* Left Section */}
        <div className='w-full sm:w-1/2 flex justify-center items-center py-10 sm:py-0'>
            <div className=' text-[#414141]'>
                <div className='flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                        <p className='text-sm md:text-base font-medium'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141]'></p>
                    </div>
            </div>
        </div>

        {/* Right Section */}
        <div className='w-full sm:w-1/2 overflow-hidden'>
            <img src={RandomImage()} alt="Bestsellers" className='w-full h-150 object-cover rounded-tr-2xl shadow-lg transition-transform duration-300 ease-in-out' lazy-loading />
        </div>
    </div>
  )
}


export default Hero;
