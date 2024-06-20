import React from 'react'

const NavBar = () => {
  return (
    <div>
       <div className = "flex uppercase font-sans font-semibold justify-around text-[#fff] w-full fixed top-3  z-40 sm:top-6  " >
      <div>
        <h2 className='text-[13px]'>Blackleaf <br/> Construction</h2>
      </div>
      <div className="flex flex-col  text-[13px] gap-2  text-right  sm:flex-row sm:gap-6">
        <h3>+91 99999999</h3>
        <h3>
          ChetanKhandait@gmail.com
        </h3>
      </div>
     </div>
    </div>
  )
}

export default NavBar
