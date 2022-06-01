import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

const News = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-32'>
      <div>
        <p className='uppercase text-white text-8xl italic '>Latest News</p>
        <p className='uppercase text-white text-6xl font-semibold ml-52'>
          The latest news, coverage <br />
          and insights from the <br />
          eagle 3d team
        </p>
      </div>
      <div className='flex justify-start items-start mt-20'>
        <div className='bg-white flex-2'>
          <img
            height='fit-content'
            className='h-[507px]'
            src='https://open3dmodel.com/wp-content/uploads/2019/04/20190419_5cb9e4ddac036.jpg'
          />
        </div>
        <div className='bg-gray-500 p-20'>
          <p className='uppercase text-white text-3xl font-semibold'>
            worldwide <br />
            3d vehicle <br />
            configurators <br />
            for brp brands
          </p>
          <p className='text-white text-xl mt-4'>
            The then Director of Seagull Company,
            <br /> Edmund “Quintin” Anderson said, <br /> service is similar to
            Netflix.
          </p>
          <p className='uppercase text-white pt-20'>Press release</p>
        </div>
      </div>
      <div className='flex gap-10 mt-16 justify-center items-center'>
        <div>
          <div className='bg-white flex-2'>
            <img
              height='fit-content'
              className='h-full w-[300px]'
              src='https://open3dmodel.com/wp-content/uploads/2019/04/20190419_5cb9e4ddac036.jpg'
            />
          </div>
          <div className='bg-gray-500 p-6'>
            <p className='uppercase text-white text-xl font-semibold'>
              worldwide <br />
              3d vehicle <br />
              configurators <br />
              for brp brands
            </p>
            <p className='text-white text-sm mt-4'>
              The then Director of Seagull Company,
              <br /> Edmund “Quintin” Anderson said, <br /> service is similar
              to Netflix.
            </p>
            <p className='uppercase text-white pt-10'>Press release</p>
          </div>
        </div>

        <div>
          <div className='bg-white flex-2'>
            <img
              height='fit-content'
              className='h-full w-[300px]'
              src='https://open3dmodel.com/wp-content/uploads/2019/04/20190419_5cb9e4ddac036.jpg'
            />
          </div>
          <div className='bg-gray-500 p-6'>
            <p className='uppercase text-white text-xl font-semibold'>
              worldwide <br />
              3d vehicle <br />
              configurators <br />
              for brp brands
            </p>
            <p className='text-white text-sm mt-4'>
              The then Director of Seagull Company,
              <br /> Edmund “Quintin” Anderson said, <br /> service is similar
              to Netflix.
            </p>
            <p className='uppercase text-white pt-10'>Press release</p>
          </div>
        </div>
        <div>
          <div className='bg-white flex-2'>
            <img
              height='fit-content'
              className='h-full w-[300px]'
              src='https://open3dmodel.com/wp-content/uploads/2019/04/20190419_5cb9e4ddac036.jpg'
            />
          </div>
          <div className='bg-gray-500 p-6'>
            <p className='uppercase text-white text-xl font-semibold'>
              worldwide <br />
              3d vehicle <br />
              configurators <br />
              for brp brands
            </p>
            <p className='text-white text-sm mt-4'>
              The then Director of Seagull Company,
              <br /> Edmund “Quintin” Anderson said, <br /> service is similar
              to Netflix.
            </p>
            <p className='uppercase text-white pt-10'>Press release</p>
          </div>
        </div>

        <div className='text-white text-2xl ml-20 cursor-pointer'>
          <p>all news posts</p>
          <BsArrowRight className='ml-40 ' />
        </div>
      </div>
    </div>
  );
};

export default News;
