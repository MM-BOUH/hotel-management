// components/HeroDescription.js

import { useEffect, useState } from 'react';
import {
  FaSmileBeam,
  FaBed,
  FaUsers,
  FaUmbrellaBeach,
  FaUtensils,
  FaSwimmingPool,
} from 'react-icons/fa';

// Hook to animate numbers
const useAnimatedCounter = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const frameDuration = 1000 / 60; // assuming 60 fps
  const totalFrames = Math.round(duration / frameDuration);
  const countPerFrame = end / totalFrames;

  useEffect(() => {
    let frame = 0;
    const counter = () => {
      frame++;
      const currentCount = Math.min(countPerFrame * frame, end);
      setCount(currentCount);
      if (frame < totalFrames) {
        requestAnimationFrame(counter);
      }
    };
    requestAnimationFrame(counter);
    return () => cancelAnimationFrame(counter);
  }, [end, countPerFrame, totalFrames]);

  return Math.floor(count);
};

// StatCard subcomponent
// StatCard subcomponent
const StatCard = ({ icon: Icon, label, value }) => {
  // Define a CSS class based on the length of the label
  const labelClass =
    label.length <= 10 ? 'text-md' : label.length <= 15 ? 'text-sm' : 'text-xs';

  // Define a CSS class based on the length of the value
  const valueClass =
    value.toString().length <= 2
      ? 'text-lg'
      : value.toString().length <= 4
      ? 'text-md'
      : 'text-sm';

  return (
    <div
      className={`group hover:bg-white hover:shadow-lg hover:border hover:border-gray-300 hover:rounded-lg p-4 transition duration-300 ease-in-out transform hover:scale-105`}
    >
      <Icon className="mx-auto text-2xl text-orange-500 mb-2" />
      <span className={`block font-semibold mb-1 ${labelClass}`}>{label}</span>
      <span className={`font-bold flex-grow ${valueClass}`}>{value}</span>
    </div>
  );
};




const HeroDescription = () => {
  // Animated stats
  const happyGuests = useAnimatedCounter(50000);
  const rooms = useAnimatedCounter(3000);
  const staffs = useAnimatedCounter(1000);
  const destinations = useAnimatedCounter(100);
  const restaurants = useAnimatedCounter(4);
  const pools = useAnimatedCounter(4);

  return (
<div className="flex-1 text-center bg-gray-100 py-12 px-4 rounded-lg mx-4 my-4 md:mx-8 md:my-8">      
  <h1 className="text-xl font-bold mb-3 text-orange-500">Explore Our Exquisite Hotel</h1>
      <p className="mb-6">Experience an Exquisite Hotel Immersed in Rich History and Timeless Elegance.</p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
        <StatCard icon={FaSmileBeam} label="Happy Guests" value={happyGuests} />
        <StatCard icon={FaBed} label="Rooms" value={rooms} />
        <StatCard icon={FaUsers} label="Staffs" value={staffs} />
        <StatCard icon={FaUmbrellaBeach} label="Destinations" value={destinations} />
        <StatCard icon={FaUtensils} label="Restaurants" value={restaurants} />
        <StatCard icon={FaSwimmingPool} label="Pools" value={pools} />
      </div>
    </div>
  );
};

export default HeroDescription;
