import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const InteriorDesign = (des) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);
  console.log(des.interior.images[0]);
  const { ...d } = des;
  return (
    <div>
      <p className="font-sans text-center font-semibold tracking-widest my-10 text-4xl">
        INTERIORS
      </p>
      <div className="container mx-auto p-4">
        <div className="gap-4">
          {des.interior.images.map((k) => (
            <img
              src={k}
              alt=""
              loading="lazy"
              data-aos="fade-up"
              className="  mx-auto px-2 my-10 w-[616px] h-[200px] md:h-[400px] border-none object-cover "
            />
          ))}
        </div>
      </div>
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
