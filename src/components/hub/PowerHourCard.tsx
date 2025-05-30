import React from 'react';

const PowerHourCard = () => {
  return (
    <div className="relative bg-teal-700/80 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-teal-600/70 w-full h-full flex flex-col justify-between">
      
      {/* Updated Icon Button - Top Right */}
      <div className="absolute top-3 right-3 z-30">
        <button 
          type="button" 
          className="p-1.5 border border-white/60 rounded-full hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all group"
          aria-label="Learn more about Power Hour"
          onClick={() => console.log('Power Hour explore clicked')} // Placeholder action
        >
          <svg 
            className="w-5 h-5 text-white transform group-hover:scale-110 transition-transform duration-200 ease-in-out"
            viewBox="0 0 24 24" 
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </button>
      </div>

      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-l-2 border-pink-400 rounded-tl-2xl opacity-80" />
      <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-t-2 border-r-2 border-red-300 rounded-tr-2xl opacity-80" />
      <div className="absolute bottom-0 left-0 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-l-2 border-yellow-400 rounded-bl-2xl opacity-80" />
      <div className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 border-b-2 border-r-2 border-pink-400 rounded-br-2xl opacity-80" />
      
      <div className="relative z-10 flex flex-col flex-grow pt-48 sm:pt-56"> 
        <div className="flex-grow flex flex-col justify-start items-center"> 
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-white text-center">Daily Power Hour</h2>
          <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-t from-pink-400 via-red-300 to-yellow-400 text-center">
            The ONLY Daily Call of its kind in the World
          </h3>
          
          <div className="my-3 sm:my-4 px-4 py-1 sm:px-5 sm:py-1.5 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full text-xs sm:text-sm text-white whitespace-nowrap shadow-md">
            Mon - Fri 8am EST
          </div>

          <p className="text-base sm:text-lg text-gray-200 mb-4 sm:mb-6 text-center">
            Power Hour is your morning jolt, inspiration and MBA in one call. Everyday.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-4 sm:mb-6 text-gray-200">
            <span className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-yellow-500/20 hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-yellow-500/50 border border-teal-500 hover:border-yellow-400 hover:scale-105 transition-transform cursor-pointer text-xs sm:text-sm text-white">
              Video
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-yellow-500/20 hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-yellow-500/50 border border-teal-500 hover:border-yellow-400 hover:scale-105 transition-transform cursor-pointer text-xs sm:text-sm text-white">
              MBA
            </span>
            <span className="px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-pink-500/20 to-yellow-500/20 hover:bg-gradient-to-r hover:from-pink-500/30 hover:to-yellow-500/50 border border-teal-500 hover:border-yellow-400 hover:scale-105 transition-transform cursor-pointer text-xs sm:text-sm text-white">
              Q&amp;A
            </span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-2 pt-1 border-t border-teal-600/60">
        <a href="#" className="flex-1 group inline-flex items-center justify-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 hover:opacity-90 transition-opacity text-white text-xs font-semibold">
          Learn More
          <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} className="group-hover:rotate-12 transition-transform duration-300 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1={10} y1={14} x2={21} y2={3} />
          </svg>
        </a>
        <a href="#" className="flex-1 group inline-flex items-center justify-center gap-1 px-2 py-0.5 rounded-full border border-teal-500 hover:border-pink-400 transition-colors text-white text-xs font-semibold">
          Success Guaranteed
          <svg xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-12 transition-transform duration-300 ml-1" width={10} height={10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
            <circle cx={12} cy={8} r={7} />
            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default PowerHourCard;
