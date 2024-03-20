import React from 'react';

const DaySide = ({ onClick }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-blue-500 text-white">
      {/* Header */}
      <header className="w-full bg-blue-700 py-4 text-center">
        <h1 className="text-3xl font-bold">Ventour's Links</h1>
      </header>
      
      {/* Links */}
      <div className="flex flex-col justify-center items-center mt-8 space-y-4">
        <a href="#" className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-6 rounded-lg">SoundCloud</a>
        <a href="#" className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-6 rounded-lg">Instagram</a>
        <a href="#" className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-6 rounded-lg">Twitter</a>
        <a href="#" className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-6 rounded-lg">Facebook</a>
        <a href="#" className="bg-blue-800 hover:bg-blue-900 text-white py-2 px-6 rounded-lg">YouTube</a>
      </div>
      
      {/* Hero section */}
      <div className="mt-8 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold">Welcome to Ventour's Page!</h2>
        <p className="text-lg">Explore the music and follow DJ John on social media.</p>
        <button onClick={onClick} className="mt-4 bg-blue-800 hover:bg-blue-900 text-white py-2 px-4 rounded-lg">Go Fullscreen</button>
      </div>
    </div>
  );
};

export default DaySide;
