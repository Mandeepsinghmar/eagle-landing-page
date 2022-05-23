import React from 'react';
import HeroBanner from './components/HeroBanner';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='bg-main-bg'>
      <div className='bg-hero-img bg-no-repeat bg-cover h-screen'>
        <Navbar />
        <HeroBanner />
      </div>
    </div>
  );
};

export default App;
