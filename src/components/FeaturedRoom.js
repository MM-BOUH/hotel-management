import React from 'react';

const FeaturedRoom = () => {
  // Styles similar to HeroVideoDescription
  const titleStyle = `text-lg font-semibold mb-4 text-orange-500`;
  const descriptionStyle = `text-gray-700 hover:text-gray-900`;

  return (
    <div className="flex-1 bg-gray-100 py-8 px-4 rounded-lg mx-4 my-4 md:mx-8 md:my-1 shadow-lg flex items-start">
      {/* Image Container with zoom effect on hover */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <img 
          src="/images/rooms/room6.jpg" 
          alt="Featured Room"
          className="w-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      {/* Content Container */}
      <div className="w-full md:w-1/2 ml-4">
        <h2 className={titleStyle}>Featured Room</h2>
        <p className={descriptionStyle}>
          A spacious and luxurious suite with stunning views. Enjoy the comfort and elegance of this beautiful suite, complete with modern amenities and breathtaking vistas of the city skyline.
        </p>
        <div className="mt-4 flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-gray-700"><span className="font-bold text-gray-900">Start From</span> $100</p>
            <p className="text-gray-700"><span className="font-bold text-gray-900">Discount</span> $8</p>
          </div>
          <button className="px-5 py-2 border rounded-md text-gray-700 border-orange-500 bg-transparent hover:bg-orange-500 hover:text-white transition-colors mt-4 md:mt-0">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoom;
