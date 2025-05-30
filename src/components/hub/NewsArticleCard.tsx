import React from 'react';
import Image from 'next/image'; 
import { AppLogo } from '@/components/core/AppLogo'; 

const NewsArticleCard = () => {
  return (
    <a 
      href="#" 
      className="flex flex-col items-center justify-between w-full h-full text-center group p-4 bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-100 dark:from-sky-800/80 dark:via-indigo-800/80 dark:to-purple-800/80 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-102 overflow-hidden"
    >
      <figure className="overflow-hidden rounded-lg relative w-full max-w-md h-[50%] mb-3 bg-slate-200 dark:bg-neutral-700 shadow-md"> 
        <Image 
          src="/Newspaper.G01.2k.png" 
          alt="Abstract newspaper background"
          fill 
          style={{ objectFit: 'cover' }} 
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw" // More specific sizes
          className="transition-transform duration-300 group-hover:scale-105" 
        />
        <span className="absolute top-3 left-3 px-3 py-1 bg-sky-500 dark:bg-sky-600 text-white text-xs sm:text-sm font-bold rounded-md shadow-lg">
          NEWS
        </span>
      </figure>
      
      <div className="px-2 pb-2 w-full max-w-md flex-grow flex flex-col justify-center items-center overflow-y-auto">
        <time dateTime="2025-05-26T19:10:07.818Z" className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
          26 May 2025
          <span className="mx-1">•</span>
          4 min read
        </time>
        
        <div className="flex items-center justify-center my-2">
          <AppLogo className="w-7 h-7 sm:w-8 sm:h-8 mr-2 text-sky-600 dark:text-sky-400" /> 
          <p className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white text-pretty">
            A|P News
          </p>
        </div>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 opacity-90 group-hover:opacity-100 transition-opacity duration-300 mt-1 leading-relaxed">
          Global advisory and management consulting firm a|p brings its billion dollar consulting experience to the world and makes it affordable for the business people and executives who need it most.
        </p>
      </div>
    </a>
  );
}

export default NewsArticleCard;
