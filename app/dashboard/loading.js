'use client'

import React from 'react';
import Lottie from 'react-lottie';
// import animationData from '/loadanimation.json'; // Adjust the path as needed

export default function Loading() {
  const defaultOptions = {
    loop: true, // Set to true for looping the animation
    autoplay: true, // Set to true to start the animation automatically
    animationData: '/loadanimation.json',
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Lottie options={defaultOptions} height={400} width={400} />
      <p>This is loading 🔃🔃🔃🍞🍞💕💕💕💕</p>
    </div>
  );
}
