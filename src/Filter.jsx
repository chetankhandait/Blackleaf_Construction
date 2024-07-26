// import React, { useState, useEffect, useRef } from "react";
// import { RiFileListFill } from "react-icons/ri";

// import data from "../Data/data";
// import { Link } from "react-router-dom";

// const Filter = () => {
//   const [expandedBlock, setExpandedBlock] = useState(null);
//   const [selectedItems, setSelectedItems] = useState({
//     1: null,
//     2: null,
//     3: null,
//   });
//   const listRef = useRef(null);
//   const [propertyNames, setPropertyNames] = useState([]);

//   useEffect(() => {
//     // Extract property names from the data
//     const names = data.map((property) => property.name);
//     setPropertyNames(names);
//   }, []);

//   const handleBlockClick = (id) => {
//     setExpandedBlock(id);
//   };

//   const handleItemClick = (blockId, item) => {
//     setSelectedItems((prevItems) => ({ ...prevItems, [blockId]: item }));
//     setExpandedBlock(null);
//   };

//   useEffect(() => {
//     if (listRef.current) {
//       const handleScroll = () => {
//         const items = listRef.current.children;
//         const middlePoint =
//           listRef.current.scrollTop + listRef.current.clientHeight / 2;

//         Array.from(items).forEach((item) => {
//           const itemMiddle = item.offsetTop + item.clientHeight / 2;
//           const distanceFromMiddle = Math.abs(itemMiddle - middlePoint);
//           const maxFontSize = 4; // Maximum font size in rem
//           const minFontSize = 1.5; // Minimum font size in rem
//           const scale =
//             1 -
//             Math.min(
//               distanceFromMiddle / (listRef.current.clientHeight / 2),
//               1
//             );
//           const fontSize = minFontSize + (maxFontSize - minFontSize) * scale;
//           item.style.fontSize = `${fontSize}rem`;
//         });
//       };

//       listRef.current.addEventListener("scroll", handleScroll);

//       // Initial call to set the sizes
//       handleScroll();

//       return () => {
//         if (listRef.current) {
//           listRef.current.removeEventListener("scroll", handleScroll);
//         }
//       };
//     }
//   }, [expandedBlock]);

//   return (
//     <div className="w-full">
//       {expandedBlock === null && (
//         <div className="flex justify-center">
//           <div
//             className="flex items-center justify-start pl-4 text-white text-center cursor-pointer gap-2"
//             onClick={() => handleBlockClick(1)}
//           >
//             <RiFileListFill className="text-[#cc9964] text-3xl sm:text-6xl " />
//             <h2 className="font-serif py-5 uppercase text-2xl sm:text-6xl">
//               ALL Property
//             </h2>
//           </div>
//         </div>
//       )}

//       {expandedBlock !== null && (
//         <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white z-50 p-8 text-center">
//           <button
//             className="absolute top-4 right-4 text-3xl sm:text-5xl font-sans px-4 py-2"
//             onClick={() => setExpandedBlock(null)}
//           >
//             x
//           </button>
//           <div
//             className="flex flex-col justify-center items-center gap-7 overflow-y-auto h-full transition-all duration-300 ease-in-out"
//             ref={listRef}
//           >
//             {propertyNames.map((item, index) => (
//               <div
//                 key={index}
//                 className="py-2 cursor-pointer transition-transform duration-300"
//                 onClick={() => handleItemClick(1, item)}
//               >
//                 <Link to={`./${item}`}>{item}</Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Filter;
import React, { useState, useEffect, useRef } from "react";
import { RiFileListFill } from "react-icons/ri";
import data from "../Data/data";
import { Link } from "react-router-dom";

const Filter = () => {
  const [expandedBlock, setExpandedBlock] = useState(null);
  const [selectedItems, setSelectedItems] = useState({
    1: null,
    2: null,
    3: null,
  });
  const [propertyNames, setPropertyNames] = useState([]);

  useEffect(() => {
    // Extract property names from the data
    const names = data.map((property) => property.name);
    setPropertyNames(names);
  }, []);

  const handleBlockClick = (id) => {
    setExpandedBlock(id);
  };

  const handleItemClick = (blockId, item) => {
    setSelectedItems((prevItems) => ({ ...prevItems, [blockId]: item }));
    setExpandedBlock(null);
  };

  return (
    <div className="w-full">
      {expandedBlock === null && (
        <div className="flex justify-center">
          <div
            className="flex items-center justify-start pl-4 text-white text-center cursor-pointer gap-2"
            onClick={() => handleBlockClick(1)}
          >
            <RiFileListFill className="text-[#cc9964] text-3xl sm:text-6xl" />
            <h2 className="font-serif py-5 uppercase text-2xl sm:text-6xl">
              ALL Property
            </h2>
          </div>
        </div>
      )}

      {expandedBlock !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white z-50 p-8 text-center">
          <button
            className="absolute top-4 right-4 text-3xl sm:text-5xl font-sans px-4 py-2"
            onClick={() => setExpandedBlock(null)}
          >
            x
          </button>
          <div className="flex flex-col justify-center items-center gap-7 overflow-y-auto h-full">
            {propertyNames.map((item, index) => (
              <div
                key={index}
                className="py-2 cursor-pointer transition-transform duration-300 text-2xl sm:text-3xl"
                onClick={() => handleItemClick(1, item)}
              >
                <Link to={`./${item}`}>{item}</Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
