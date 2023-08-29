import React, { useState } from 'react';
import './App.scss';
import About from './container/About/About';
import Footer from './container/Footer/Footer';
import Header from './container/Header/Header';
import Skills from './container/Skills/Skills';
import Testimonial from './container/Testimonial/Testimonial';
import Work from './container/Work/Work';
import Navbar from './components/Navbar/Navbar';
import SocialMedia from './components/SocialMedia';
// import NavigationDots from './components/NavigationDots';


function App() {
  // const [activeDot, setActiveDot] = useState(0);

  // const handleDotClick = (index) => {
  //   setActiveDot(index);
  // };
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
      <SocialMedia />
      {/* <NavigationDots active={activeDot} onItemClick={handleDotClick} /> */}
    </div>
  );
}

export default App;
