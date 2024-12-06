import React from 'react'
import { useState, useEffect } from 'react';

function NavBar() {

  const [isScrolled, setIsScrolled] = useState(false);
  console.log("hell,nlhbgvllllq");

  // Add a scroll listener to toggle background color
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50  transition-all duration-300 ${isScrolled ? 'bg-peach' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        {/* <div className="font-bold text-xl">Gusto</div> */}
        <img width={150} height={30} src="https://www.maxandissys.com/wp-content/uploads/2021/05/max-issy-logo-chicago-1.png" alt="" />
        <ul className="flex space-x-8">
          <li><h1 href="#specials" className=" text-lg text-bloody ">Menu</h1></li>
          <li><h1 href="#about" className=" text-lg text-bloody">Review</h1></li>
          <li><h1 href="#menu" className=" text-lg text-bloody ">About Us </h1></li>
          <li><h1 href="#chef" className=" text-lg text-bloody ">Chefs</h1></li>
          <li><h1 href="#contact" className=" text-lg text-bloody ">Contact</h1></li>
          <li><h1 href="#contact" className=" text-lg text-bloody ">Reservation</h1></li>

        </ul>
      </div>
    </nav>
  )
}

export default NavBar