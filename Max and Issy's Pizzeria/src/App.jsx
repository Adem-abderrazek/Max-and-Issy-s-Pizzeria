
import react from 'react'
import Hero from './Components/Home/Hero';
import Menu from './Components/Home/Menu/Menu';
import Footer from './Components/Home/Footer';
function App() {
  return (
    <div className=" items-center justify-center h-screen bg-gray-100">
      <Hero />
      <Menu/>
      <Footer/>
    </div>
  );
};

export default App;