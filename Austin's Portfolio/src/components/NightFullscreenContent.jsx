import React from 'react';

const NightFullscreenContent = () => {
  return (
    <div className="text-white px-4 py-6 sm:px-8 sm:py-12 mx-auto max-w-screen-lg h-screen flex flex-col justify-center items-center">
      {/* Banner */}
      <div className="text-center mb-4 sm:mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Austin Ventour</h1>
        <div className="w-100 h-1 bg-blue-400 mx-auto"></div>
      </div>

      {/* About Me section */}
      <section className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4">About Me</h2>
        <p className="text-xs sm:text-sm mb-4">
          Hey there! I'm a versatile individual with a passion for both tech and tunes. By day, I'm diving deep into the world of software engineering as a trainee at Digital Futures, where I've been honing my skills in React, JavaScript, and Java. From crafting sleek and responsive web applications to tinkering with backend magic using Express, I'm always on the lookout for new challenges and ways to level up my coding game.
        </p>
        <p className="text-xs sm:text-sm mb-4">
          But when the sun sets, you'll often find me behind the decks as a professional DJ, spinning beats at various international gigs. Whether it's collaborating with event organisers or fine-tuning my music library management skills, I thrive on the energy of live performances and the excitement of making people move to the rhythm.
        </p>
        <p className="text-xs sm:text-sm">
          In my spare time, I'm a bit of a tech enthusiast, having worked as a tech assistant and delving into projects like setting up customer gaming computers and even building a state-of-the-art streaming room. And let's not forget my barista days, where I mastered the art of crafting the perfect cup of joe while working towards my Level 2 barista certification.
        </p>
      </section>

      {/* Portfolio section */}
      <h2 className="text-2xl sm:text-4xl font-bold mb-4">Portfolio</h2>
      <section className="mb-4 sm:mb-8 flex justify-center">
        {/* Portfolio 1 */}
        <div className="relative bg-gray-800 p-4 sm:p-6 rounded-lg mr-2 group" style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
          <h3 className="text-xs font-semibold mb-2 sm:mb-4 text-center absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition duration-300">Gym Log App (React)</h3>
          <div className="group-hover:filter group-hover:blur-sm transition duration-300">
            <img src="https://images.pexels.com/photos/5209197/pexels-photo-5209197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Portfolio 1" className="w-full h-full object-cover rounded-lg" />
          </div>
          <a href="your_link_url_here" className="text-blue-400 hover:underline absolute inset-0 flex items-center justify-center z-20"></a>
        </div>

        {/* Portfolio 2 */}
        <div className="relative bg-gray-800 p-4 sm:p-6 rounded-lg group" style={{ width: '200px', height: '200px', overflow: 'hidden' }}>
          <h3 className="text-sm font-semibold mb-2 sm:mb-4 text-center absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition duration-300">MUA Website (Under Development)</h3>
          <div className="group-hover:filter group-hover:blur-sm transition duration-300">
            <img src="https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Portfolio 2" className="w-full h-full object-cover rounded-lg" />
          </div>
          <a href="your_link_url_here" className="text-blue-400 hover:underline absolute inset-0 flex items-center justify-center z-20"></a>
        </div>
      </section>
    </div>
  );
};

export default NightFullscreenContent;
