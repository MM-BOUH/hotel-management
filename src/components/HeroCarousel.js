// components/HeroCarousel.js
import { useState } from 'react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    '/images/rooms/room1.jpg',
    '/images/rooms/room3.jpg',
    '/images/rooms/room4.jpg',
    '/images/rooms/room5.jpg',
    '/images/rooms/room6.jpg',
    '/images/rooms/room7.jpg',
  ];

  // Function to cycle through the images
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  // Start the image cycle
  useState(() => {
    const intervalId = setInterval(nextSlide, 3000); // Change image every 3 seconds
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <div className="flex-1 flex justify-center items-center overflow-hidden rounded-b-lg md:rounded-b-none md:rounded-r-lg mx-4 my-4 md:mx-0 md:my-0">
      {images.map((src, index) => (
        <img
          key={src}
          src={src}
          alt={`Slide ${index}`}
          className={`transition-transform duration-700 ease-in-out transform hover:scale-110 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          style={{ height: '500px', width: 'auto', display: currentSlide === index ? 'block' : 'none' }}
        />
      ))}
    </div>
  );
};

export default HeroCarousel;
