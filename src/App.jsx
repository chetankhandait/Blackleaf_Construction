import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loader from './Loader';
import 'tailwindcss/tailwind.css';
import HeroSection from './HeroSection';
import SepratePage from './SepratePage';
import SeprateContact from './SeprateContact';

const App = () => {
  const [showHero, setShowHero] = useState(false);

  const handleAnimationComplete = () => {
    setShowHero(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          showHero ? <HeroSection /> : <Loader onAnimationComplete={handleAnimationComplete} />
        } />
        <Route path="/:Id" element={<SepratePage />} />
        <Route path="/contact" element={<SeprateContact/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
