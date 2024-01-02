import React from 'react';
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const enhancedStyle = {
  container: `flex-1 bg-gray-100 py-8 px-4 rounded-lg mx-4  md:mx-8 md:my-1 shadow-lg`,
  iframeContainer: `w-full md:w-1/2 rounded-lg overflow-hidden`,
  textContainer: `w-full md:w-1/2 ml-4`,
  title: `text-lg font-semibold mb-4 text-orange-500`,
  description: `text-gray-700 hover:text-gray-900`,
  socialIcons: `flex justify-center space-x-4 mt-4`,
  icon: `transition-colors duration-300 hover:text-orange-500`, // Adding hover effect
};

const HeroVideoDescription = () => {
  return (
    <div className={enhancedStyle.container}>
      <div className="flex items-start">
        <div className={enhancedStyle.iframeContainer}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Z09luBg7Yi8"
            title="YouTube Video Player"
            allowFullScreen
            className="shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
          />
        </div>
        <div className={enhancedStyle.textContainer}>
          <p className={enhancedStyle.title}>Welcome to the FASQ hotel - Nouakchott's Premier 5-Star Experience</p>
          <p className={enhancedStyle.description}>
          Nestled in the heart of Nouakchott, the FASQ hotel is a 5-star haven that epitomizes luxury and Mauritanian hospitality. 
          With panoramic views of the Atlantic and the city, our exquisite rooms offer unparalleled comfort and style. 
          Indulge in world-class dining, relax in our serene spa, and experience the rich local culture through our curated experiences. 
          Our commitment to personalized service and sustainable luxury ensures an unforgettable stay in Mauritania's bustling capital.          </p>
          <div className={enhancedStyle.socialIcons}>
            <a href="#" target="_blank" rel="noopener noreferrer" className={enhancedStyle.icon}>
              <FaYoutube size="24" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={enhancedStyle.icon}>
              <FaFacebookF size="24" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={enhancedStyle.icon}>
              <FaInstagram size="24" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className={enhancedStyle.icon}>
              <FaTwitter size="24" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideoDescription;
