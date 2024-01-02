import React from 'react';

const RoomSelectionCard = () => {
  return (
    // Apply the same max-width as the Hero section to maintain layout consistency
    // mx-auto to center the card in the viewport
    // px-4 for padding on the left and right on small screens
    // md:px-8 for padding on the left and right on medium screens and above
    // my-8 for vertical margins
    <div className="bg-yellow-300 p-4 md:p-8 rounded-lg shadow-md max-w-4xl mx-auto my-8">
      <form className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div className="flex-1">
          <label htmlFor="room-type" className="block text-lg font-medium text-gray-700 mr-3">
            Room Type
          </label>
          <select id="room-type" className="mt-1 block w-full md:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
            <option>All</option>
            {/* Add other options here */}
          </select>
        </div>
        <div className="flex-1 md:flex-initial">
          <label htmlFor="search" className="block text-lg font-medium text-gray-700 mr-3">
            Search
          </label>
          <input type="text" id="search" placeholder="Search..." className="mt-1 block w-full md:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md" />
        </div>
        <button type="submit" className="w-full md:w-auto px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-teal-500 rounded shadow ripple hover:shadow-lg focus:outline-none">
          Search
        </button>
      </form>
    </div>
  );
};

export default RoomSelectionCard;
