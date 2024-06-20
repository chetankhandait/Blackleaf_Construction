import React from 'react'

const NavBar = () => {
  return (
    <div>
       <div className = "flex uppercase font-sans font-semibold justify-around text-[#fff] w-full fixed top-6 z-40" >
      <div>
        <h2>Blackleaf Construction</h2>
      </div>
      <div className="flex items-center gap-6  ">
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
