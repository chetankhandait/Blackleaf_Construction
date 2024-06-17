import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";

const Filter = () => {
  const [expandedBlock, setExpandedBlock] = useState(null);
  const [selectedItems, setSelectedItems] = useState({ 1: null, 2: null, 3: null });

  const blocks = [
    { id: 1,type:"ALl Property ", items: ['Property 1 ', 'Property 2', 
      'Property 3',
      'Property 4',
      'Property 5',
      'Property 6',
      'Property 7',



      
    ] },
   
  ];

  const handleBlockClick = (id) => {
    setExpandedBlock(id);
  };

  const handleItemClick = (blockId, item) => {
    setSelectedItems(prevItems => ({ ...prevItems, [blockId]: item }));
    setExpandedBlock(null);
  };

  return (
    <div className="     w-full h-[104.007px]    ">
      {expandedBlock === null && (
        <div className="flex justify-start       ">
          {blocks.map((block) => (
            <div 
              key={block.id} 
              className="flex flex-col items-center  justify-start pl-4  pt-2   text-white text-center "
              onClick={() => handleBlockClick(block.id)}
            >
              <h2 className='flex items-center text-sm '> 
                <span className=''>
                {block.type}
                  </span> 
                <FaCaretDown/>
                </h2>
                <h2 className='text-4xl'>

              {selectedItems[block.id] || `Block ${block.id}`}
                </h2>
            </div>
          ))}
          {/* <div className=" text-white bg-green-600 p-10 font-semibold font-sans ">
            <button className=" ">Search</button>
          </div> */}
        </div>
      )}

      {expandedBlock !== null && (
        <div className="w-full text-white    h-[104.007px]">
          <div className="  flex items-center gap-4 pl-4   ">
            {blocks.find(block => block.id === expandedBlock).items.map((item, index) => (
              <div 
                key={index} 
                className=" text-4xl py-4   " 
                onClick={() => handleItemClick(expandedBlock, item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
