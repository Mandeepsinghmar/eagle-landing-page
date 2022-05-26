import React from 'react';
import { BsTwitter, BsArrowRight } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FiYoutube } from 'react-icons/fi';
import { AiOutlineLinkedin } from 'react-icons/ai';

import Logo from '../assets/images/logo.svg';

const Footer = () => {
  return (
    <div className='mt-72 relative pb-10'>
      <div className='flex justify-around items-center flex-wrap'>
        <div className='flex flex-col justify-between px-20 '>
          <img className='w-32 h-32' src={Logo} alt='logo' />
          <div className='flex gap-20 mt-6'>
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
          <p className='mt-10 text-white text-xl leading-8'>
            To learn more about Metaverse 3D Pixel Streaming <br />
            complete the webform or contact us.
          </p>
          <div className='mt-14'>
            <p className=' text-white text-2xl font-semibold'>Address</p>
            <p className='mt-2 text-white text-xl leading-10'>
              4514 Cole Avenue, Suite 632A, <br />
              Dallas, TX 75205
            </p>
          </div>
          <div className='mt-14 '>
            <p className=' text-white text-2xl font-semibold'>Email & Phone</p>
            <p className='mt-2 text-white text-xl leading-10'>
              business@eagle3dstreaming.com <br />
              Phone: (432) 296-2920
            </p>
          </div>
        </div>
        <div>
          <div className='flex justify-start gap-6 flex-wrap w-795'>
            <input
              placeholder='Name'
              className='bg-transparent text-xl text-white w-96 border-2 border-gray-400 p-4 focus:outline-none focus:border-white'
            />
            <input
              placeholder='Email'
              className='bg-transparent text-xl text-white w-96 border-2 border-gray-400 p-4 focus:outline-none focus:border-white'
            />
            <input
              placeholder='Phone Number'
              className='bg-transparent text-xl text-white w-96 border-2 border-gray-400 p-4 focus:outline-none focus:border-white'
            />
            <input
              placeholder='Website'
              className='bg-transparent text-xl text-white w-96 border-2 border-gray-400 p-4 focus:outline-none focus:border-white'
            />
            <textarea
              placeholder='Reason/interest in Pixel streaming'
              rows='4'
              className='bg-transparent text-xl text-white w-795 border-2 border-gray-400 p-4 focus:outline-none focus:border-white'
            />
            <button className='bg-demo text-white text-2xl px-6 py-3 rounded'>
              Request demo
            </button>
          </div>
          <div className='text-white text-2xl mt-10 cursor-pointer'>
            <p>all news posts</p>
            <BsArrowRight className='ml-40 ' />
          </div>
        </div>
      </div>
      <div className='mt-72 flex justify-center gap-10 items-center'>
        <p className='text-white text-xl'>Copyright © 2022</p>
        <p className='text-white text-xl'>Eagle 3D Streaming</p>
        <p className='text-white text-xl'>Eagle Pixel Streaming</p>
      </div>
    </div>
  );
};

export default Footer;
