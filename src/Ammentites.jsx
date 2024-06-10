import React from "react";
import {
  FaBuilding,
  FaBriefcase,
  FaSwimmingPool,
  FaUsers,
  FaShoppingCart,
  FaWater,
} from "react-icons/fa";

const amenities = [
  { icon: <FaBuilding size={30} />, label: "RECREATIONAL PODIUM" },
  { icon: <FaBriefcase size={30} />, label: "BUSINESS LOUNGES" },
  { icon: <FaSwimmingPool size={30} />, label: "SWIMMING POOLS" },
  { icon: <FaUsers size={30} />, label: "MULTI PURPOSE HALLS" },
  { icon: <FaShoppingCart size={30} />, label: "RETAIL DESTINATIONS" },
  {
    icon: <FaWater size={30} />,
    label: "PAVED PATHWAYS AND STREET WITH WATERFRONT PROMENADE",
  },
];

const Amenities = () => {
  return (
    <div>
      <p className="font-sans text-center font-semibold tracking-widest my-10 text-4xl">
        AMENTIES
      </p>
      <div className="max-w-3xl mx-auto py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center bg-white">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-gray-900 mb-6">{amenity.icon}</div>
            <div className="text-custom text-sm font-medium">
              {amenity.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
