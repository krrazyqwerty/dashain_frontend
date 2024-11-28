import React from 'react';

export default function PhotoModal  ({ isOpen, onClose, imageUrl, imageTitle }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="relative w-full h-full flex items-center justify-center">
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-300 hover:text-white text-3xl rounded-full p-4 transition duration-300"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
          &times; {/* Close icon */}
        </button>
        <img src={imageUrl} alt={imageTitle} className="w-full h-full object-contain" />
      </div>
    </div>
  );
};


