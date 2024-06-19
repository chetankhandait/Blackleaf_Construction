import React, { useState } from 'react';

const Filter = () => {
  const [expandedBlock, setExpandedBlock] = useState(null);
  const [selectedItems, setSelectedItems] = useState({ 1: null, 2: null, 3: null });

  const blocks = [
    { 
      id: 1,
      type: "ALL Property",
      items: [
        'Property 1', 
        'Property 2', 
        'Property 3', 
        'Property 4', 
        'Property 5', 
        'Property 6', 
        'Property 7'
      ] 
    }
  ];

  const handleBlockClick = (id) => {
    setExpandedBlock(id);
  };

  const handleItemClick = (blockId, item) => {
    setSelectedItems(prevItems => ({ ...prevItems, [blockId]: item }));
    setExpandedBlock(null);
  };

  return (
    <div className="w-full">
      {expandedBlock === null && (
        <div className="flex justify-center">
          {blocks.map((block) => (
            <div 
              key={block.id} 
              className="flex items-center justify-start pl-4 text-white text-center cursor-pointer"
              onClick={() => handleBlockClick(block.id)}
            >
              <h2 className=' font-sans  py-5 uppercase text-6xl'>{block.type}</h2>
            </div>
          ))}
        </div>
      )}

      {expandedBlock !== null && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 text-white  z-50 p-8">
          <button 
            className="absolute top-4 right-4 text-xl bg-red-600 px-4 py-2"
            onClick={() => setExpandedBlock(null)}
          >
            Close
          </button>
          <div className="flex flex-col items-center gap-7 overflow-y-auto "  >
            {blocks.find(block => block.id === expandedBlock).items.map((item, index) => (
              <div 
                key={index} 
                className="text-7xl py-2 cursor-pointer" 
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
