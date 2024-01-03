import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="bg-white py-4 md:py-8">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-8 lg:space-x-12">
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-orange-500 ">Hotel</h2>
            <h3 className="text-4xl font-bold mt-2">Contact</h3>
            <p className="mt-4">
              <FaMapMarkerAlt className="inline-block mr-2" />
              123 Road
            </p>
            <p className="mt-2">
              <FaPhone className="inline-block mr-2" />
              000-000-00-00
            </p>
            <p className="mt-2">
              <FaEnvelope className="inline-block mr-2" />
              mohamed@example.com
            </p>
          </div>
          {/* Links */}
          <div className="flex flex-col md:flex-row md:w-2/3 lg:w-3/4 justify-between text-center md:text-left">
            <div className="mb-8 md:mb-0">
              <h4 className="font-semibold">Our Story</h4>
              <h4 className="font-semibold mt-4">Get in Touch</h4>
              <h4 className="font-semibold mt-4">Our Privacy Commitment</h4>
              <h4 className="font-semibold mt-4">Terms of Service</h4>
              <h4 className="font-semibold">Customer Assistance</h4>
            </div>
            <div>
              <h4 className="font-semibold">Dining Experience</h4>
              <h4 className="font-semibold mt-4">Wellness</h4>
              <h4 className="font-semibold mt-4">Fitness</h4>
              <h4 className="font-semibold mt-4">Sports</h4>
              <h4 className="font-semibold">Events</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
