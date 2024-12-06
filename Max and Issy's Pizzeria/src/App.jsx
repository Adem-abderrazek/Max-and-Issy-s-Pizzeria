
import react from 'react'
import Hero from './Components/Home/Hero';
import Menu from './Components/Home/Menu/Menu';
import Footer from './Components/Home/Footer';
import AboutUs from './Components/Home/AboutUs';
import Reviews from './Components/Home/Reviews';
import NavBar from './Components/Home/NavBar';
import Reservation from './Components/Home/Reservation';
function App() {
  return (
    <div className=" items-center justify-center h-screen bg-gray-100 font-merienda">
      <NavBar/>
      <Hero />
      <Menu/>
      <AboutUs/>
      <Reservation/>
      <Reviews/>
      <Footer/>
    </div>
  );
};

export default App;