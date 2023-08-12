import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Events from '../components/Events';

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <Events/>
      <Footer />
    </div>
  )
};

export default Landing