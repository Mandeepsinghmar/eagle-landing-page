import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';

import Logo from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <div className='flex justify-between px-20 relative py-10'>
      <img className='w-32 h-32' src={Logo} alt='logo' />
      <div className='flex flex-col gap-40'>
        <div className='flex gap-20 items-center'>
          <div className='flex gap-10'>
            <a href='/twitter'>
              <BsTwitter className='text-white text-2xl' />
            </a>
            <a href='/twitter'>
              <FiYoutube className='text-white text-2xl' />
            </a>
            <a href='/twitter'>
              <FaFacebookF className='text-white text-2xl' />
            </a>
            <a href='/twitter'>
              <AiOutlineLinkedin className='text-white text-2xl' />
            </a>
          </div>
          <div className='flex gap-20'>
            <h4 className='text-3xl text-freeTrial tracking-widest'>
              FREE TRIAL
            </h4>
            <h4 className='text-3xl text-white tracking-wider'>LOGIN</h4>
          </div>
        </div>

        <div className=' text-white pr-20'>
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
          <div className='bg-black p-10 rounded-lg mt-52 flex gap-14 justify-center'>
            <input
              placeholder='Your e-mail'
              className='bg-black text-xl w-96 border-b-2 border-white pl-4 focus:outline-none'
            />
            <button className='bg-demo px-6 py-3 rounded-full text-xl'>
              Request demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
