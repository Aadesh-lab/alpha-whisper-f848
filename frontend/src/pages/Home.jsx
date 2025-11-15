import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;