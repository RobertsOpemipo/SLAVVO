import React from 'react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white p-8 w-full">
      {/* Flex container for Social Links */}
      <div className="flex w-full max-w-full justify-center mb-8 space-x-8">
        {/* Social Media Links Section */}
        <a href="#" className="flex items-center space-x-2 text-sm hover:bg-white hover:text-black">
          <FaInstagram className="text-lg" />
          <span>INSTAGRAM</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-sm  hover:bg-white hover:text-black">
          <FaYoutube className="text-lg" />
          <span>YOUTUBE</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-sm hover:bg-white hover:text-black">
          <FaTiktok className="text-lg" />
          <span>TIKTOK</span>
        </a>
      </div>

      {/* Brand Name Section */}
      <div className="flex justify-center mb-4 w-full">
        <h1 className="lg:text-[20vw] font-bold tracking-wide text-[10vw]">SLAVVO</h1>
      </div>
    </div>
  );
}

export default Footer;