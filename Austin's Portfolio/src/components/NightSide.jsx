// NightSide.jsx
import React from 'react';

const NightSide = ({ onClick }) => {
  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-gray-800 to-gray-900 text-white relative"
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      {/* Placeholder image */}
      <img
        src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Night Side"
        className="w-full h-64 object-cover"
        style={{ filter: 'grayscale(100%)', transition: 'filter 0.3s' }}
        onMouseEnter={(e) => e.target.style.filter = 'grayscale(0%)'}
        onMouseLeave={(e) => e.target.style.filter = 'grayscale(100%)'}
      />
      {/* Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h2 className="text-3xl font-bold">Software Engineer</h2>
        <p className="mt-2">Enter</p>
      </div>
    </div>
  );
};

export default NightSide;
