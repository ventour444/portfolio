import React from 'react';

const NightSide = ({ onClick }) => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-purple-700">
      <div className="">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Night Side!</h1>
        <p className="text-lg">Discover the mysteries of the night...</p>
        <button onClick={onClick} className="mt-4 bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-lg">Go Fullscreen</button>
      </div>
    </div>
  );
};

export default NightSide;
