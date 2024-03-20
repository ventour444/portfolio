import React from 'react';

const DaySide = ({ onClick }) => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-blue-500">
      <div className="">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Day Side!</h1>
        <p className="text-lg">Explore the bright possibilities...</p>
        <button onClick={onClick} className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">Go Fullscreen</button>
      </div>
    </div>
  );
};

export default DaySide;
