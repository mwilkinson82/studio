import React from 'react';
import Lottie from 'lottie-react';

const SalesMarketingCard = () => {
  const animationPath = "/Animation - 1748300039725.json"; 

  return (
    <div className="bg-white dark:bg-neutral-100 rounded-xl shadow-2xl w-full h-full flex flex-col group cursor-pointer overflow-hidden">
      {/* Lottie Animation Container - Reduced height */}
      <div className="flex-shrink-0 h-36 sm:h-40 md:h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
        <Lottie 
          path={animationPath} 
          loop={true} 
          autoplay={true}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-2xl font-extrabold text-black dark:text-neutral-800 mb-1.5">
            Sales & Marketing in the 21st Century
          </h3>
          <p className="text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-500 mb-3">
            <span className="text-red-500 font-bold">LIVE</span> Wednesday's 7PM EST
          </p>
          
          <div className="bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-lg p-3 mt-2">
            <p className="text-sm text-neutral-700 dark:text-neutral-300 line-clamp-3 sm:line-clamp-4 md:line-clamp-5">
              "If you think cold calling and hard closing is efficient and effective in 2025, ask yourself, did I cold call you? Learn to use modern tools to multiply your output, jam your funnel and close with authority."
            </p>
          </div>
        </div>
        
        {/* Learn More Button - Made larger and more button-like */}
        <div className="mt-auto pt-4 self-start"> {/* Added mt-auto to push to bottom, pt-4 for space */}
          <a href="#" className="inline-block text-sm bg-sky-600 text-white py-2.5 px-6 rounded-lg hover:bg-sky-700 transition-colors font-semibold shadow-md hover:shadow-lg">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default SalesMarketingCard;
