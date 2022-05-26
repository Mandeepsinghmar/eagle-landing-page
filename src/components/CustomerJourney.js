import React from 'react';
import { BiBuildings } from 'react-icons/bi';

import LogoBg from '../assets/images/logo-bg.svg';

const CustomerJourney = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-28 mt-10 border-t-2 border-gray-400'>
      <p className='uppercase text-white text-6xl ml-14 italic'>
        Create unified <br /> projects for the <br /> entire customer <br />
        journey
      </p>
      <div className='mt-20'>
        <div className='flex gap-40'>
          <div className='flex flex-col gap-24'>
            <div className='flex flex-col justify-center items-center'>
              <BiBuildings className='text-blue-400 text-6xl' />
              <p className='text-white uppercase font-medium text-2xl'>
                Virtual events
              </p>
              <p className='text-white text-xl'>
                Photoreal visualizations, <br /> digital editions.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <BiBuildings className='text-blue-400 text-6xl' />
              <p className='text-white uppercase font-medium text-2xl'>
                Virtual events
              </p>
              <p className='text-white text-xl'>
                Photoreal visualizations, <br /> digital editions.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <BiBuildings className='text-blue-400 text-6xl' />
              <p className='text-white uppercase font-medium text-2xl'>
                Virtual events
              </p>
              <p className='text-white text-xl'>
                Photoreal visualizations, <br /> digital editions.
              </p>
            </div>
          </div>
          <div className='flex flex-col '>
            <div className='flex flex-col justify-center items-center'>
              <BiBuildings className='text-blue-400 text-6xl' />
              <p className='text-white uppercase font-medium text-2xl'>
                Virtual events
              </p>
              <p className='text-white text-xl'>
                Photoreal visualizations, <br /> digital editions.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <img src={LogoBg} className='w-534 h-72' />
            </div>
            <div className='flex flex-col justify-center items-center'>
              <BiBuildings className='text-blue-400 text-6xl' />
              <p className='text-white uppercase font-medium text-2xl'>
                Virtual events
              </p>
              <p className='text-white text-xl'>
                Photoreal visualizations, <br /> digital editions.
              </p>
            </div>
          </div>
          <div className='flex flex-col gap-24'>
            <div className='flex flex-col justify-center items-center'>
              <BiBuildings className='text-blue-400 text-6xl' />
              <p className='text-white uppercase font-medium text-2xl'>
                Virtual events
              </p>
              <p className='text-white text-xl'>
                Photoreal visualizations, <br /> digital editions.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <BiBuildings className='text-blue-400 text-6xl' />
              <p className='text-white uppercase font-medium text-2xl'>
                Virtual events
              </p>
              <p className='text-white text-xl'>
                Photoreal visualizations, <br /> digital editions.
              </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <BiBuildings className='text-blue-400 text-6xl' />
              <p className='text-white uppercase font-medium text-2xl'>
                Virtual events
              </p>
              <p className='text-white text-xl'>
                Photoreal visualizations, <br /> digital editions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerJourney;
