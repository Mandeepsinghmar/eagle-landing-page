import React from 'react';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import Video1 from '../assets/videos/screen-capture.webm';

const Spotlight = () => {
  return (
    <div className='mt-32 border-top-2 border-dotted border-gray-200 flex flex-col justify-center items-center'>
      <div className='ml-96 flex gap-20 self-start'>
        <p className='uppercase text-white text-8xl ml-14 '>Spotlight</p>
        <p className='uppercase text-white text-6xl font-semibold'>
          how customers <br />
          leverage the eagle 3d <br />
          streaming platform <br />
        </p>
      </div>
      <div className=' mt-16'>
        <div>
          <video src={Video1} controls className='w-10/12 h-600 m-auto'></video>
        </div>
        <div className='flex justify-around gap-32 items-center mt-10 ml-10'>
          <div className='self-start'>
            <p className='text-white text-2xl'>SONY</p>
            <p className='text-white text-6xl'>immersive web experiences</p>
            <p className='text-white text-xl mt-2'>
              Experience sony's immersive 3d showroom <br />
              virtual experience
            </p>
          </div>
          <div className='flex gap-2 mr-10'>
            <div className='border-2 border-white rounded-full p-2'>
              <BsChevronLeft className='text-white text-2xl ' />
            </div>
            <div className='border-2 border-white rounded-full p-2'>
              <BsChevronRight className='text-white text-2xl ' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
