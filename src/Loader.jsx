import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const Loader = ({ onAnimationComplete }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <div
      key={key}
      className="flex items-center justify-center h-screen w-screen relative overflow-hidden bg-white uppercase font-sans "
    >
      <motion.h2
        className="absolute text-center font-serif top-1/2 text-4xl md:text-6xl font-semibold z-10  "
        initial={{ y: "-100%", opacity: 1, color: "#202020" }} // Initial gray color
        animate={{
          y: ["-100%", "0%", "100%"],
          opacity: [1, 1, 0],
          color: ["#202020", "#FFFFFF", "#FFFFFF"],
        }} // Transition to white
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        BlackLeaf Properties
      </motion.h2>

      <motion.div
        className="absolute inset-0 bg-[#202020]"
        initial={{ width: "0%", height: "100%" }}
        animate={{
          width: ["0%", "100%", "100%"],
          height: ["100%", "100%", "100%"],
        }}
        transition={{ duration: 2, ease: "easeInOut" }}
        onAnimationComplete={onAnimationComplete}
      />
    </div>
  );
};

export default Loader;
