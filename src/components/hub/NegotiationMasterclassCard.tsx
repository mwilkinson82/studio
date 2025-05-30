import React from 'react';
import Script from 'next/script'; 

const NegotiationMasterclassCard = () => {
  const videoId = "gsxqmy7zck";

  return (
    <div className="bg-neutral-900 dark:bg-black rounded-xl shadow-xl overflow-hidden w-full h-full flex flex-col group cursor-pointer">
      <div className="wistia-player-container relative w-full" style={{ paddingTop: '56.25%' }}> 
        <wistia-player 
          media-id={videoId} 
          seo="false" 
          chapters="true" 
          allowFullScreen 
          allowtransparency="true" 
          className="absolute top-0 left-0 w-full h-full"
        ></wistia-player>
      </div>

      <Script src={`https://fast.wistia.com/embed/${videoId}.js`} strategy="lazyOnload" type="module" async />
      
      <style jsx global>{`
        wistia-player[media-id='${videoId}']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${videoId}/swatch');
          display: block;
          filter: blur(5px);
          width: 100%;
          height: 100%;
          position: absolute; 
          top: 0;
          left: 0;
        }
        wistia-player[media-id='${videoId}'] {
            display: block; 
        }
      `}</style>

      <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between bg-neutral-800/30 dark:bg-neutral-900/50">
        <div> 
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 truncate">
            Negotiation Masterclass
          </h3>
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-400 line-clamp-4 mb-3">
            4 week live intensive masterclass, rolling 4 week schedule, Monday's 7pm EST
          </p>
        </div>

        <div className="mt-auto"> 
          {/* Button classes updated for smaller size */}
          <button type="button" className="flex justify-center gap-1 items-center mx-auto shadow-lg text-sm bg-gray-50 backdrop-blur-md font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-3 py-1.5 overflow-hidden border-2 rounded-full group">
            Learn More
            <svg className="w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-1 rotate-45" viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z" className="fill-gray-800 group-hover:fill-gray-800" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NegotiationMasterclassCard;
