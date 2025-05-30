'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; 
import CustomEnterButton from '@/components/ui/CustomEnterButton';

const pageContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.1, duration: 0.5 } },
};

const contentCardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.2, duration: 0.6, ease: [0.25, 1, 0.5, 1], staggerChildren: 0.25 },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } },
};

const buttonAppearVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1], delay: 0.4 } },
};

export default function SplashPage() {
  const router = useRouter();
  const imageBorderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const borderElement = imageBorderRef.current;

    const handleAnimationEnd = () => {
      const borderEl = document.getElementById('image-border');
      const squares = document.querySelectorAll('.corner-square');
      const cursorEl = document.getElementById('cursor');

      if (borderEl) {
        borderEl.classList.add('permanent-border-visible');
      }
      squares.forEach(sq => sq.classList.add('permanent-border-visible'));
      
      if (cursorEl) {
        cursorEl.classList.add('permanent-border-visible'); 
      }
    };

    if (borderElement) {
      borderElement.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      if (borderElement) {
        borderElement.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, []); 

  return (
    <motion.div 
      key="splash-page-root"
      className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-sky-100 via-indigo-100 to-purple-100 p-4 select-none md:p-8"
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={cn(
          "w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl",
          "bg-white/70 dark:bg-neutral-800/70 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden", 
          "grid grid-cols-1 md:grid-cols-2 md:h-auto lg:min-h-[65vh]"
        )}
        variants={contentCardVariants}
      >
        {/* Left Column - Text Content */}
        <div className="flex flex-col items-center justify-center text-center p-6 sm:p-8 md:p-10 lg:p-12 border-r-0 md:border-r md:border-white/10">
          <motion.div 
            className="alp-logo-card mb-6 md:mb-8" 
            variants={textItemVariants}
          >
            <span className="alp-logo-text">a|p</span>
          </motion.div>
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-[2.8rem] xl:text-5xl font-bold text-neutral-900 dark:text-white mb-3 md:mb-4 tracking-tight leading-tight"
            variants={textItemVariants}
          >
            Ultra Global Advisory.
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed max-w-md mx-auto mb-8 md:mb-10"
            variants={textItemVariants}
          >
            Reshaping Global Consulting. <br className="hidden sm:block" />Billion Dollar Consulting On Demand.
          </motion.p>
          <motion.div 
            variants={buttonAppearVariant} 
            initial="hidden" 
            animate="visible"
            onClick={() => router.push('/')} 
          >
            <CustomEnterButton />
          </motion.div>
        </div>

        {/* Right Column - Image + Explanation */}
        <div className="flex flex-col items-center text-center justify-start p-0 relative min-h-[400px] sm:min-h-[500px] md:h-full md:rounded-r-3xl bg-gradient-to-br from-sky-100/50 via-indigo-100/50 to-purple-100/50">
          
          <motion.div 
            className="w-full md:aspect-square relative flex-grow md:flex-grow-0 p-4 md:p-6 animated-image-container" 
            variants={textItemVariants} 
          > 
            <div className="relative border border-neutral-300/70 dark:border-neutral-700/70 rounded-lg h-full w-full shadow-sm">
              <Image 
                src="/splash_helmet.png" 
                alt="a|p Helmet - Symbol of Altitude"
                width={576} 
                height={576} 
                layout="responsive" 
                objectFit="contain" 
                className="bg-white/50 dark:bg-neutral-800/30 rounded-lg"
                priority
              />
              <div id="image-border" ref={imageBorderRef}></div>
              <div className="corner-square cs-top-left"></div>
              <div className="corner-square cs-top-right"></div>
              <div className="corner-square cs-bottom-left"></div>
              <div className="corner-square cs-bottom-right"></div>
            </div>

            <div id="cursor">
              <Image
                src="/mouse.svg" 
                alt="Mouse cursor"
                width={24}
                height={24}
              />
              <div id="cursor-text-container">
                a|p design team
              </div>
            </div>
          </motion.div>
          
          {/* Explainer Text Card - Reverted to original structure for shimmer animation */}
          <motion.div 
            className={cn(
              "explainer-card relative z-10 m-4 md:m-6 p-4 sm:p-6 w-[calc(100%-2rem)] md:w-[calc(100%-3rem)] flex-shrink-0 rounded-xl shadow-lg",
              "bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50",
              "dark:from-sky-800/70 dark:via-indigo-800/70 dark:to-purple-800/70",
              "border border-white/50 dark:border-neutral-600"
            )}
            variants={textItemVariants}
            initial={{opacity:0, y:30}} 
            animate={{opacity:1, y:0, transition: {delay:0.6, duration:0.6}}}
          >
            {/* Removed inner div, paragraph is direct child again */}
            <p 
              className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-200 leading-snug max-w-xs sm:max-w-sm mx-auto pb-1"
              style={{ textShadow: '0px 1px 1px rgba(255,255,255,0.1)'}}
            >
              Our a|p logo is reimagining the F-22 Raptor helmet which embodies our core concepts of a|p (altitude.logic.pressure.). The helmet symbolizes <strong className="font-semibold text-neutral-900 dark:text-white">Altitude</strong>—the elevated perspective and strategic foresight we bring to every challenge, inculcate in our clients and use as a north star in our strategic decision making. Coupled with speed and power emblematic of the F-22. <br/><br/> <span className="italic">a|p Founder - Marshall Wilkinson</span>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
