import React from "react";

const InteriorDesign = (des) => {
  console.log(des.interior.images[0]);
  const { ...d } = des;
  return (
    <div>
      <p className="font-sans text-center font-semibold tracking-widest my-10 text-4xl">
        INTERIORS
      </p>
      {des.interior.images.map((k) => (
        <div>
          <img
            src={k}
            alt=""
            className="w-[100%] block mx-auto py-10 px-2 lg:px-44 md:px-32 border-none transition ease-out duration-500 transform hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default InteriorDesign;
// import React from "react";

// const InteriorDesign = ({ interior }) => {
//   return (
//     <div>
//       {interior.images.map((image, index) => (
//         <div key={index}>
//           <img src={image} alt={`Interior ${index}`} className="w-full h-auto" />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InteriorDesign;
