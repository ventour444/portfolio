import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DaySide from './DaySide';
import NightSide from './NightSide';

const SplashPage = () => {
  const [hoveredSide, setHoveredSide] = useState(null);
  const [isDayFullscreen, setIsDayFullscreen] = useState(false);
  const [isNightFullscreen, setIsNightFullscreen] = useState(false);

  const handleMouseEnter = (side) => {
    setHoveredSide(side);
  };

  const handleMouseLeave = () => {
    setHoveredSide(null);
  };

  const toggleDayFullscreen = () => {
    setIsDayFullscreen(!isDayFullscreen);
  };

  const toggleNightFullscreen = () => {
    setIsNightFullscreen(!isNightFullscreen);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Day side */}
      <motion.div
        className={`p-8 w-1/2 h-screen bg-gradient-to-br from-blue-400 to-blue-700 flex justify-center items-center ${isDayFullscreen ? 'absolute top-0 left-0 z-50' : ''}`}
        initial={{ x: 0 }}
        animate={{
          width: isDayFullscreen ? '100%' : hoveredSide === 'left' ? '100%' : '50%',
          transitionEnd: {
            x: isDayFullscreen ? 0 : null
          }
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        onMouseEnter={() => handleMouseEnter('left')}
        onMouseLeave={handleMouseLeave}
      >
        <DaySide onClick={toggleDayFullscreen} />
      </motion.div>

      {/* Night side */}
      <motion.div
        className={`p-8 w-1/2 h-screen bg-gradient-to-br from-purple-700 to-indigo-900 flex justify-center items-center ${isNightFullscreen ? 'absolute top-0 left-0 z-50' : ''}`}
        initial={{ x: 0 }}
        animate={{
          width: isNightFullscreen ? '100%' : hoveredSide === 'right' ? '100%' : '50%',
          transitionEnd: {
            x: isNightFullscreen ? 0 : null
          }
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        onMouseEnter={() => handleMouseEnter('right')}
        onMouseLeave={handleMouseLeave}
      >
        <NightSide onClick={toggleNightFullscreen} />
      </motion.div>
    </div>
  );
};

export default SplashPage;
