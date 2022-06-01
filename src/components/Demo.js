import React from 'react';

const Demo = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-44 gap-3'>
      <p className='uppercase text-6xl italic text-white'>Streaming Platform</p>

      <p className='uppercase text-5xl text-white'>
        Try our eagle 3d streaming demo
      </p>
      <p className='text-xl text-white mt-6'>
        {' '}
        Globally deploy Unreal Applications in Minutes with Eagle's Self-serve
        Pixel Streaming Platform.
      </p>
      <div className='bg-demo p-10 rounded-lg mt-20 flex gap-14'>
        <input
          placeholder='Your e-mail'
          className='bg-demo text-white text-xl w-96 border-b-2 border-white pl-4 focus:outline-none'
        />
        <button className='bg-black text-white text-xl px-6 py-3 rounded-full'>
          Request demo
        </button>
      </div>
    </div>
  );
};

export default Demo;
