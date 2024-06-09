import React, { useState } from 'react';

const FilterBlock = ({ label, items, isVisible, onSelect, selectedValue }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      onSelect(label);
    }
  };

  return (
    <div className={`w-full p-2 ${isVisible ? '' : 'hidden'}`}>
      <label className="block text-white text-sm font-bold mb-2">{label}</label>
      <input
        className="w-full p-2 rounded bg-gray-800 text-white cursor-pointer"
        type="text"
        placeholder={selectedValue || 'Option 1'}
        value={selectedValue}
        onClick={handleToggle}
        readOnly
      />
      {isOpen && (
        <div className="mt-2 flex flex-col bg-gray-900 rounded p-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-2 m-1 bg-gray-800 rounded text-white cursor-pointer"
              onClick={() => {
                setIsOpen(false);
                onSelect(label, item);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterBlock;
