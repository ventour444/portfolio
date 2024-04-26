import React from 'react';

const DayFullscreenContent = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full text-white">
      <h2 className="text-4xl font-bold mb-8">Ventour</h2>
      <div className="flex flex-col space-y-4 bg-opacity-25 bg-black bg-blur rounded-lg p-8 border border-transparent border-opacity-25">
        
        {/* Linktree section */}
        <div className="flex flex-col space-y-2">
          <a href="https://www.instagram.com/austinventour" className="text-lg hover:text-blue-300 transition-colors">Instagram</a>
          <a href="YOUR_LINK_HERE" className="text-lg hover:text-blue-300 transition-colors">SoundCloud</a>
          <a href="YOUR_LINK_HERE" className="text-lg hover:text-blue-300 transition-colors">Mixcloud</a>
        </div>
      </div>
    </div>
  );
};

export default DayFullscreenContent;
