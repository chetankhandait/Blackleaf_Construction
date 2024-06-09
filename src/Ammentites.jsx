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
    <div className="max-w-2xl mx-auto py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-center bg-white">
      {amenities.map((amenity, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="text-gray-900 mb-4">{amenity.icon}</div>
          <div className="text-custom text-sm font-medium">{amenity.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Amenities;