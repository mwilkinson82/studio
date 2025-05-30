import React from 'react';
import Image from 'next/image';
import { BadgeCheck } from 'lucide-react'; // Using lucide-react for the verified badge

// TODO: Make content dynamic (stars, title, quote, avatar, name, role, stats, links)
const SocialProofCard = () => {
  return (
    <div className="group relative w-full max-w-[380px] mx-auto font-sans">
      <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-neutral-800 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-indigo-500/20">
        <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/5 to-purple-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-40 dark:from-indigo-500/10 dark:group-hover:opacity-60" />
        <div className="absolute -right-16 -bottom-16 h-32 w-32 rounded-full bg-gradient-to-br from-purple-500/5 to-indigo-500/0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-40 dark:from-purple-500/10 dark:group-hover:opacity-60" />
        
        <div className="relative p-6">
          <div className="absolute right-6 top-6">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-12 w-12 text-indigo-500/10 dark:text-indigo-500/5 group-hover:text-indigo-500/20 dark:group-hover:text-indigo-500/15 transition-colors duration-300">
              <path d="M14.417 6.679C15.447 7.773 16 9 16 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C9.591 12.322 8.17 10.841 8.17 9c0-1.657 1.343-3 3-3s3.215.186 3.247.679zm5.498 0C20.945 7.773 21.5 9 21.5 10.989c0 3.5-2.457 6.637-6.03 8.188l-.893-1.378c3.335-1.804 3.987-4.145 4.247-5.621-.537.278-1.24.375-1.929.311C15.091 12.322 13.67 10.841 13.67 9c0-1.657 1.343-3 3-3s3.215.186 3.245.679z" />
            </svg>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5 text-amber-400">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <h3 className="text-xl font-semibold text-neutral-800 dark:text-white">
              A|P is One in a Million.
            </h3>
            <p className="text-neutral-600 dark:text-slate-400 text-sm sm:text-base">
              I've been working with Marshall and A|P for almost 5 years. I've gone from $2M to over $10M in that time and have expanded geographically. A|P has changed the way I see preparation, strategy, marketing and operations. I see the world differently,I have clarity. I'm A|P for life, you can call me anytime and I'll tell you about it.
            </p>
          </div>
          <div className="mt-6 flex items-center gap-4">
            <div className="group/avatar relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-75 blur transition-all duration-300 group-hover/avatar:opacity-100" />
              <div className="relative h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-700 ring-1 ring-slate-300 dark:ring-slate-600 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/AJ SignaturePreview copy.jpg"
                  alt="AJ Hoover"
                  width={48}
                  height={48}
                  className="object-cover" 
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-neutral-800 dark:text-white">AJ Hoover</h4>
              <p className="text-sm text-neutral-500 dark:text-slate-400">CEO Beau Monde Builders</p>
            </div>
            <div className="ml-auto">
              <div className="flex items-center gap-1 rounded-full bg-green-500/10 dark:bg-green-500/20 px-3 py-1 ring-1 ring-green-500/30 dark:ring-green-500/40">
                <BadgeCheck className="h-4 w-4 text-green-600 dark:text-green-400" />
                <span className="text-xs font-medium text-green-700 dark:text-green-300">Verified</span>
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-4">
            <div className="rounded-xl bg-slate-100 dark:bg-neutral-700/50 p-3 sm:p-4">
              <div className="flex items-center gap-1 sm:gap-2">
                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500 dark:text-indigo-400">
                  <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-white">12</span>
              </div>
              <p className="mt-1 text-xs text-neutral-500 dark:text-slate-400">Purchases</p>
            </div>
            <div className="rounded-xl bg-slate-100 dark:bg-neutral-700/50 p-3 sm:p-4">
              <div className="flex items-center gap-1 sm:gap-2">
                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500 dark:text-indigo-400">
                  <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-white">8</span>
              </div>
              <p className="mt-1 text-xs text-neutral-500 dark:text-slate-400">Reviews</p>
            </div>
            <div className="rounded-xl bg-slate-100 dark:bg-neutral-700/50 p-3 sm:p-4">
              <div className="flex items-center gap-1 sm:gap-2">
                <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500 dark:text-indigo-400">
                  <path d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" strokeWidth={2} strokeLinejoin="round" strokeLinecap="round" />
                </svg>
                <span className="text-xs sm:text-sm font-medium text-neutral-700 dark:text-white">45</span>
              </div>
              <p className="mt-1 text-xs text-neutral-500 dark:text-slate-400">Helpful</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialProofCard;
