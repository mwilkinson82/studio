'use client';

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '@/animations/animation1.json';

const LottieSplash = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <Lottie
      animationData={animationData}
      loop={false}
      autoplay={true}
      style={{ width: '80%', maxWidth: '600px', height: 'auto' }}
    />
  </div>
);

export default LottieSplash;