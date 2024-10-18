import Image from 'next/image';
import React from 'react';


export default function Loading() {
 

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
          src={"/aibanner.png"}
          alt="banner"
          width={300}
          height={300}
          className=""
        />
      <p className='text-2xl font-bold text-gray-500'>Wait for a while 🔃🔃🔃🍞🍞💕💕💕💕</p>
     
    </div>
  );
}
