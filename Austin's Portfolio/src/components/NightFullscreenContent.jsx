import React from 'react';

const NightFullscreenContent = () => {
  return (
    <div className="text-white px-8 py-12 mx-auto max-w-screen-lg">
      {/* Banner */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-2">Austin Ventour</h1>
        <div className="w-20 h-1 bg-blue-400 mx-auto"></div>
      </div>

      {/* About Me section */}
      <section className="mb-12">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-sm mb-4">
          Hey there! I'm a versatile individual with a passion for both tech and tunes. By day, I'm diving deep into the world of software engineering as a trainee at Digital Futures, where I've been honing my skills in React, JavaScript, and Java. From crafting sleek and responsive web applications to tinkering with backend magic using Express, I'm always on the lookout for new challenges and ways to level up my coding game.
        </p>
        <p className="text-sm mb-4">
          But when the sun sets, you'll often find me behind the decks as a professional DJ, spinning beats at various international gigs. Whether it's collaborating with event organisers or fine-tuning my music library management skills, I thrive on the energy of live performances and the excitement of making people move to the rhythm.
        </p>
        <p className="text-sm">
          In my spare time, I'm a bit of a tech enthusiast, having worked as a tech assistant and delving into projects like setting up customer gaming computers and even building a state-of-the-art streaming room. And let's not forget my barista days, where I mastered the art of crafting the perfect cup of joe while working towards my Level 2 barista certification.
        </p>
      </section>

      {/* Portfolio section */}
      <section className="mb-8 overflow-auto">
        {/* Portfolio 1 */}
        <div className="bg-gray-800 p-6 rounded-lg mb-4">
          <h3 className="text-xl font-semibold mb-4">Gym Log App (React)</h3>
          <p className="text-lg mb-4">
            This is a brief description of the Gym Log App.
          </p>
          <a href="#" className="text-blue-400 hover:underline">View Portfolio</a>
        </div>

        {/* Portfolio 2 */}
        <div className="bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">MUA Website (Under Development)</h3>
          <p className="text-lg mb-4">
            This is a brief description of the MUA Website.
          </p>
          <a href="#" className="text-blue-400 hover:underline">View Portfolio</a>
        </div>
      </section>
    </div>
  );
};

export default NightFullscreenContent;
