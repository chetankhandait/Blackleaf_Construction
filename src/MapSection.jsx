import React from "react";

const MapSection = () => {
  return (
    <div className="bg-[url('https://richlanddubai.com/wp-content/uploads/2017/05/map.jpg')]  w-full mb-10 ">
      <div className="flex flex-col items-center gap-10 ">
        <p className="font-sans text-center font-semibold tracking-widest mt-20 mb-10 text-4xl">
          BLACKLEAF PROPERTIES
        </p>
        <p className="w-full md:w-1/2 text-center leading-8 ">
          Blackleaf Properties is a premier real estate company offering
          top-tier properties in Mohali and Chandigarh. Their portfolio includes
          modern apartments, luxurious villas, and well-designed commercial
          spaces, all strategically located near essential amenities. In Mohali,
          they provide a blend of comfort and convenience, perfect for families
          and businesses. In Chandigarh, their properties feature contemporary
          architecture and state-of-the-art facilities in highly desirable
          neighborhoods. Blackleaf Properties ensures a high standard of living
          and an excellent investment opportunity in these vibrant cities.
        </p>
        <a href="https://maps.app.goo.gl/CaAFk7Lpywa1CamNA" target="_blank">
          <button className="uppercase btn">See on the map</button>
        </a>
      </div>
    </div>
  );
};

export default MapSection;
