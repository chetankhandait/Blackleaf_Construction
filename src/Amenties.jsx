import React from "react";

const Amenties = (key) =>  
{
    const{...amenties}=key
  return(
    <>
    
    <div className="flex items-center justify-center flex-wrap  mx-auto    " >
    {
        amenties.amenities.map((k,key)=>(
           <div key={key}>
            <img src={k.image} alt="" />
            
                {k.text}    
            </div>
        ))
    }

    </div>
    </>
    
    );
}

export default Amenties;
