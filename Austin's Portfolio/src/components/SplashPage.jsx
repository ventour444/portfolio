import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DaySide from './DaySide';
import NightSide from './NightSide';
import DayFullscreenContent from './DayFullscreenContent';
import NightFullscreenContent from './NightFullscreenContent';

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
    if (!isDayFullscreen) {
      setIsDayFullscreen(true);
      setIsNightFullscreen(false);
    }
  };

  const toggleNightFullscreen = () => {
    if (!isNightFullscreen) {
      setIsNightFullscreen(true);
      setIsDayFullscreen(false); 
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Day side */}
      <motion.div
        className={`w-1/2 bg-gradient-to-br from-gray-300 to-gray-400 justify-center items-center relative`}
        initial={{ x: 0 }}
        animate={{
          width: isDayFullscreen || hoveredSide === 'left' ? '250%' : '50%',
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        onMouseEnter={() => handleMouseEnter('left')}
        onMouseLeave={handleMouseLeave}
        onClick={toggleDayFullscreen}
      >
        {isDayFullscreen && (
          <motion.div
            className="absolute inset-0 bg-gray-800"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        )}
        {isDayFullscreen ? <DayFullscreenContent onClick={toggleDayFullscreen} /> : <DaySide />}
      </motion.div>

      {/* Night side */}
      <motion.div
        className={`w-1/2 bg-gradient-to-br from-gray-800 to-gray-900 justify-center items-center relative `}
        initial={{ x: 0 }}
        animate={{
          width: isNightFullscreen || hoveredSide === 'right' ? '250%' : '50%',
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        onMouseEnter={() => handleMouseEnter('right')}
        onMouseLeave={handleMouseLeave}
        onClick={toggleNightFullscreen}
      >
        {isNightFullscreen && (
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          ></motion.div>
        )}
        {isNightFullscreen ? <NightFullscreenContent onClick={toggleNightFullscreen} /> : <NightSide />}
      </motion.div>
    </div>
  );
};

export default SplashPage;
