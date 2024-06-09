import React from 'react'
import   './circle.css'
const PaymentTerm = (key) => {
  const {...prop} = key
  console.log(prop)
  return (
    <>
     <section>
      
      <div className='text-center uppercase text-6xl'>
        Payment Term 
      </div>
      <div className='w-4/5 mx-auto my-0 pt-14 relative text-center'>
        <div className='relative w-[19%] -mr-1 inline-block '>
              <div className='relative box-border w-full h-[10.527vw] border   border-blue-600 text-center  '>
                <p className='absolute inline top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                10%
                </p>
              </div>
        </div>
      </div>
      </section> 
    </>
  )
}

export default PaymentTerm
