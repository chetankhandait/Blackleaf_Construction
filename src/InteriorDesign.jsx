import React from "react";

const InteriorDesign = (des) => {
  console.log(des.interior.images[0]);
  const {...d} =des
  return <div>
    { des.interior.images.map((k)=>(
        <div>

          <img src={k} alt="" />
        </div>
    )) }

  </div>;
};

export default InteriorDesign;
