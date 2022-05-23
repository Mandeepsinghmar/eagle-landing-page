import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';

import Logo from '../assets/images/logo.svg';

const Navbar = () => {
  return (
    <div className='flex justify-between px-20'>
      <img className='w-32 h-32' src={Logo} alt='logo' />
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
    </div>
  );
};

export default Navbar;
