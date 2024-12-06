import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("https://surackenterprises.com/wp-content/uploads/2024/08/20240617-Amore_36-Photo.jpg")' }}>
      <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-40 text-white text-center">
        <h1 className="text-6xl font-bold">Gusto</h1>
        <p className="mt-4 text-lg">Reservations: (887) 654-3210</p>
      </div>
    </section>
  );
};

export default Hero;