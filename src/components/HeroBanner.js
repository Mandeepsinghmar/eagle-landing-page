import React from 'react';

const HeroBanner = () => {
  return (
    <div className=' text-white float-right pr-20 mt-14'>
      <div>
        <p className='text-xl'>Welcome to Eagle 3D Streaming</p>
        <h1 className='text-8xl uppercase font-semibold my-2'>
          We bring <br />
          fantastic ideas <br />
          to life in a 3d <br />
          world
        </h1>
        <p className='text-xl'>
          Globally deploy Unreal Applications in <br />
          Minutes with Eagle's Self-serve Pixel <br />
          Streaming Platform.
        </p>
      </div>
      <div className='bg-black p-10 rounded-lg mt-28 flex gap-14'>
        <input
          placeholder='Your e-mail'
          className='bg-black w-72 border-b-2 border-white pl-4 focus:outline-none'
        />
        <button className='bg-demo px-6 py-3 rounded-full'>Request demo</button>
      </div>
    </div>
  );
};

export default HeroBanner;
