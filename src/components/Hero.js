// components/Hero.js
import React from 'react';
import HeroDescription from './HeroDescription';
import HeroCarousel from './HeroCarousel';
import HeroVideoDescription from './HeroVideoDescription';

const Hero = () => {
  return (
    <div> 
      <div className="flex flex-col md:flex-row pt-16 md:pt-20 mx-4 md:mx-8">
        <HeroDescription />
        <HeroCarousel />
      </div>
        
        <HeroVideoDescription />
      </div>
  );
};

export default Hero;
