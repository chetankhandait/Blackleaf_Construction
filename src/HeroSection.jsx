import React from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import Filter from './Filter'
import Test from './Test';
const HeroSection = () => {
   
  return (
    <div className=" w-full flex flex-col h-screen justify-between flex-1   bg-[#202020]    ">
      {/* <motion.div
        className="flex items-center justify-center   w-full"
        initial={{ x: '90%', opacity: 0 }} // Start from the right and fully transparent
        animate={{ x: 0, opacity: 1 }} // Animate to the center and fully opaque
        transition={{ duration: 1, ease: 'easeInOut' }} // Animation duration and easing
      >
      </motion.div> */}
         {/* <Navbar/> */}
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
