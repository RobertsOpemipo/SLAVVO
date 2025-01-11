import React from 'react';
import { FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'; 

const Footer = () => {
  return (
    <footer className="flex flex-col text-black p-4 sm:p-8 w-full min-h-[100px]">
    
      <div className="flex flex-col sm:flex-row w-full max-w-full justify-center mb-4 space-x-0 sm:space-x-8 space-y-4 sm:space-y-0">
        
        <a href="#" className="flex items-center text-black space-x-2 rounded-md p-2 text-sm hover:bg-black hover:text-white">
          <FaInstagram className="text-lg" />
          <span>INSTAGRAM</span>
        </a>
        <a href="#" className="flex items-center text-black space-x-2 rounded-md p-2 text-sm hover:bg-black hover:text-white">
          <FaYoutube className="text-lg" />
          <span>YOUTUBE</span>
        </a>
        <a href="#" className="flex items-center text-black space-x-2 rounded-md p-2 text-sm hover:bg-black hover:text-white">
          <FaTiktok className="text-lg" />
          <span>TIKTOK</span>
        </a>
      </div>

      
      <div className="flex justify-center mb-4 w-full">
        <h1 className="text-[15vw] lg:text-[19vw] font-bold tracking-wide font-merriweather">SLAVVO</h1>
      </div>
    </footer>
  );
}

export default Footer;