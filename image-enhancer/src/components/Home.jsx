import React from 'react';

function Home() {
  return (
    <div className="pt-20 bg-black flex items-center justify-center">

      <div className="text-center max-w-3xl px-4">

        <div className="inline-flex items-center px-4 py-2 bg-gray-800 rounded-full mb-6">
          <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
          <span className="text-sm font-medium text-gray-300">AI-Powered Image Enhancement</span>
        </div>


        <h1 className="text-5xl font-bold text-white">
          Transform Your Photos Instantly
        </h1>


        <p className="text-lg text-gray-400 mt-4">
          Experience the magic of AI-powered image enhancement. Turn ordinary shots into extraordinary masterpieces in seconds.
        </p>
      </div>
    </div>
  );
}

export default Home;
