// components/Hero.js
import HeroDescription from './HeroDescription';
import HeroCarousel from './HeroCarousel';
import HeroVideoDescription from './HeroVideoDescription';

const Hero = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row pt-16 md:pt-20">
        <HeroDescription customClass="mb-0" /> {/* Remove bottom margin */}
        <HeroCarousel customClass="mt-0" /> {/* Remove top margin */}
      </div>
      <HeroVideoDescription />
    </div>
  );
};

export default Hero;
