import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import Filter from './Filter'
import Test from './Test';
const HeroSection = () => {
   
  return (
    <div className=" w-full h-screen flex flex-col    justify-between flex-1   bg-[#202020]     ">
        
       <Test/>
       <div className=' '>

    <Filter/>
       </div>
        {/* <div className='absolute bottom-4 left-3 sm:hidden '>
          <h3 className='px-4 py-1 bg-[#cc9964] text-white font-sans font-semibold '>
            Filter 
          </h3>
        </div>
        <div className='absolute bottom-4 right-3 sm:hidden '>
          <h3 className='px-4 py-1 bg-[#cc9964] text-white font-sans font-semibold '>
            Filter 
          </h3>
        </div> */}
           
    </div>
  );
};

export default HeroSection;
