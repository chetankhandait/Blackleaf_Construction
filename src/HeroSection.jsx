import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import Filter from './Filter'
import Test from './Test';
const HeroSection = () => {
   
  return (
    <div className=" w-full flex flex-col h-screen justify-between flex-1   bg-[#202020]    ">
      <img src="./mainfeature1.png" alt="" />
      
       <Test/>
       <div className='hidden sm:block'>

    <Filter/>
       </div>
        <div className='absolute bottom-4 left-3 sm:hidden '>
          <h3 className='px-4 py-1 bg-[#cc9964] text-white font-sans font-semibold '>
            Filter 
          </h3>
        </div>
        <div className='absolute bottom-4 right-3 sm:hidden '>
          <h3 className='px-4 py-1 bg-[#cc9964] text-white font-sans font-semibold '>
            Filter 
          </h3>
        </div>
           
    </div>
  );
};

export default HeroSection;
