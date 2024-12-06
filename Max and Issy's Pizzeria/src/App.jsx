import React from 'react';
import NavBar from './Components/Home/NavBar';
import Hero from './Components/Home/Hero';
import Menu from './Components/Home/Menu';
import AboutUs from './Components/Home/AboutUs';
import Reviews from './Components/Home/Reviews';
const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <AboutUs/>
      <Reviews/>

    </div>
  );
};

export default App;