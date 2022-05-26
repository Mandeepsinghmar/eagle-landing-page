import React from 'react';

import './App.css';
import CustomerJourney from './components/CustomerJourney';
import Demo from './components/Demo';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Partners from './components/Partners';
import Solutions from './components/Solutions';
import Spotlight from './components/Spotlight';

const App = () => {
  return (
    <div className='bg-primary'>
      <div className='hero h-screen'>
        <Navbar />
      </div>
      <Partners />
      <Solutions />
      <Spotlight />
      <CustomerJourney />
      <Demo />
      <div className='footer bg-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
