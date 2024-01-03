// components/Navbar.js
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons from react-icons
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="px-4 md:px-8 py-4 flex items-center justify-between">
      <h1 className="text-3xl md:text-4xl font-bold text-orange-500">
    <Link href="/" className="hover:underline">Hotel</Link>
  </h1>

        <div className="hidden md:flex space-x-4 md:space-x-8 lg:space-x-12">
          
          <button className="bg-transparent hover:bg-orange-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition ease-in-out duration-200">
            Rooms
          </button>
          <button className="bg-transparent hover:bg-orange-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition ease-in-out duration-200">
            Restaurant
          </button>
          <button className="bg-transparent hover:bg-orange-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition ease-in-out duration-200">
            Amenities
          </button>
          <button className="bg-transparent hover:bg-orange-500 text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded transition ease-in-out duration-200">
            Contact
          </button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="px-8 py-4 bg-white shadow-md">
         
          <button className="w-full text-left bg-transparent hover:bg-orange-500 text-black font-semibold hover:text-white py-2 px-4 rounded transition ease-in-out duration-200">
            Rooms
          </button>
          <button className="w-full text-left bg-transparent hover:bg-orange-500 text-black font-semibold hover:text-white py-2 px-4 rounded transition ease-in-out duration-200">
            Restaurant
          </button>
          <button className="w-full text-left bg-transparent hover:bg-orange-500 text-black font-semibold hover:text-white py-2 px-4 rounded transition ease-in-out duration-200">
            Amenities
          </button>
          <button className="w-full text-left bg-transparent hover:bg-orange-500 text-black font-semibold hover:text-white py-2 px-4 rounded transition ease-in-out duration-200">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
