import React from 'react';

const NightSide = ({ onClick }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-purple-700 text-white">
      {/* Banner */}
      <div className="w-full h-64 bg-gradient-to-r from-purple-900 to-indigo-900 flex justify-center items-center">
        <h1 className="text-5xl font-bold text-center">Welcome to the Night Side!</h1>
      </div>
      
      {/* Hero section */}
      <div className="w-full mt-8 flex flex-col justify-center items-center">
        <p className="text-lg mb-4">Discover the mysteries of the night...</p>
        <div className="flex space-x-4">
          <button onClick={onClick} className="bg-purple-800 hover:bg-purple-900 text-white py-2 px-6 rounded-lg">Go Fullscreen</button>
          <button className="bg-indigo-800 hover:bg-indigo-900 text-white py-2 px-6 rounded-lg">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default NightSide;
