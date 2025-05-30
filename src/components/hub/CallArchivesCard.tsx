import React from 'react';
import Image from 'next/image'; 

const CallArchivesCard = () => {
  return (
    <section 
      className="relative group flex flex-col items-center justify-between w-full h-full p-4 bg-white dark:bg-neutral-800 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative w-full h-[calc(100%-5.5rem)] mb-2 rounded-lg overflow-hidden">
        <Image
          src="/Cloud White.png" 
          alt="Call Archives Cloud"
          fill 
          style={{ objectFit: 'cover' }} 
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw" // More specific sizes
          priority 
        />
      </div>

      <div className="text-center py-1 flex-shrink-0">
        <p className="text-xl sm:text-2xl font-bold text-neutral-800 dark:text-neutral-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors mb-1">
          a|p archives.
        </p>
        <p className="text-sm font-medium text-sky-500 dark:text-sky-400 mt-0 mb-1.5">
          updated daily.
        </p>
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 opacity-90 group-hover:opacity-100 leading-snug">
          Recordings of 3 years of Power Hour, Sales and Marketing School, and Contractor School.
        </p>
      </div>
    </section>
  );
}

export default CallArchivesCard;
