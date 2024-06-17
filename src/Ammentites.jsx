import React from "react";
import {
  FaSwimmingPool,
  FaTint,
  FaTree,
  FaFireExtinguisher,
  FaDumbbell,
  FaCar,
  FaRunning,
  FaChair,
  FaBuilding,
  FaChild,
  FaTrash,
 
  FaUtensils,
  FaTachometerAlt,
  FaBasketballBall,
  FaSpa,
  FaUsers,
  FaCloudRain,
  FaHotTub,
  FaShieldAlt,
  FaCoffee,
  FaBatteryFull,
  FaDoorOpen,
  FaLock,
  FaRecycle,
  FaBook,
  FaGlassCheers,
} from "react-icons/fa";
 
 
// Mapping of icon names to their corresponding React Icon components
const iconMapping = {
  FaChild: <FaChild size={30} />,
  FaDoorOpen: <FaDoorOpen size={30} />,
  FaTree: <FaTree size={30} />,
  FaFireExtinguisher: <FaFireExtinguisher size={30} />,
  FaCar: <FaCar size={30} />,
  FaTint: <FaTint size={30} />,
  FaChair: <FaChair size={30} />,
  FaLock: <FaLock size={30} />,
  FaCloudRain: <FaCloudRain size={30} />,
  FaBook: <FaBook size={30} />,
  FaSwimmingPool: <FaSwimmingPool size={30} />,
  FaShieldAlt: <FaShieldAlt size={30} />,
  FaRecycle: <FaRecycle size={30} />,
  FaBatteryFull: <FaBatteryFull size={30} />,
  FaBuilding: <FaBuilding size={30} />,
   
};

const Amenities = (prop) => {
  console.log(prop.amenities)
  return (
    <div>
      <p className="font-sans text-center font-semibold tracking-widest my-10 text-4xl">
        AMENITIES
      </p>
      <div className="max-w-3xl mx-auto py-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center bg-white">
        {prop.amenities.map((amenity, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-gray-900 mb-6">
              {iconMapping[amenity.image] || null}
            </div>
            <div className="text-custom text-sm font-medium">
              {amenity.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
