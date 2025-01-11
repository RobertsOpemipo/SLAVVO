import React from 'react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="flex flex-col  text-black p-8 w-full min-h-[100px]">
      {/* Flex container for Social Links */}
      <div className="flex w-full max-w-full justify-center mb-8 space-x-8">
        {/* Social Media Links Section */}
        <a href="#" className="flex items-center text-black space-x-2 rounded-md p-2 text-sm hover:bg-black hover:text-white">
          <FaInstagram className="text-lg" />
          <span>INSTAGRAM</span>
        </a>
        <a href="#" className="flex items-center space-x-2 rounded-md p-2 text-black text-sm hover:bg-black hover:text-white">
          <FaYoutube className="text-lg" />
          <span>YOUTUBE</span>
        </a>
        <a href="#" className="flex items-center space-x-2 rounded-md p-2 text-black text-sm hover:bg-black hover:text-white">
          <FaTiktok className="text-lg" />
          <span>TIKTOK</span>
        </a>
      </div>

      {/* Brand Name Section */}
      <div className="flex justify-center mb-4 w-full">
        <h1 className="lg:text-[20vw] font-bold tracking-wide font-merriweather text-[11vw]">SLAVVO</h1>
      </div>
    </footer>
  );
}

export default Footer;