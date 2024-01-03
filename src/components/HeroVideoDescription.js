// HeroVideoDescription.js
import React from 'react';
import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const HeroVideoDescription = () => {
  return (
    <div className="bg-gray-100 py-8 md:py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8"> {/* Match the Navbar padding */}
        <div className="flex flex-col md:flex-row items-start rounded-lg shadow-lg overflow-hidden">
          <div className="w-full md:w-1/2">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Z09luBg7Yi8"
              title="YouTube Video Player"
              allowFullScreen
              className="shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
            />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <p className="text-lg font-semibold mb-4 text-orange-500">Welcome to the FASQ hotel - Nouakchott&apos;.s Premier 5-Star Experience</p>
            <p className="text-gray-700 hover:text-gray-900">
              Nestled in the heart of Nouakchott, the FASQ hotel is a 5-star haven that epitomizes luxury and Mauritanian hospitality. 
              With panoramic views of the Atlantic and the city, our exquisite rooms offer unparalleled comfort and style. 
              Indulge in world-class dining, relax in our serene spa, and experience the rich local culture through our curated experiences. 
              Our commitment to personalized service and sustainable luxury ensures an unforgettable stay in Mauritania&apos;.s bustling capital.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              {/* Social Icons */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-orange-500">
                <FaYoutube size="24" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-orange-500">
                <FaFacebookF size="24" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-orange-500">
                <FaInstagram size="24" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-orange-500">
                <FaTwitter size="24" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideoDescription;
