"use client";
import React from 'react';
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col text-white p-4 sm:p-8 w-full min-h-[100px]">
      <div className="flex flex-col sm:flex-row w-full max-w-full justify-center mb-4 space-x-0 sm:space-x-8 space-y-4 sm:space-y-0">
        <a href="https://www.instagram.com/midethemagic/" className="flex items-center text-white space-x-2 rounded-md p-2 text-sm hover:bg-white hover:text-black text-glacial">
          <FaInstagram className="text-lg" />
          <span>INSTAGRAM</span>
        </a>
        <a href="https://x.com/midethemagic" className="flex items-center text-white space-x-2 rounded-md p-2 text-sm hover:bg-white hover:text-black text-glacial">
          <FaTwitter className="text-lg" />
          <span>Twitter</span>
        </a>
        <a href="https://www.tiktok.com/@midethemagic" className="flex items-center text-white space-x-2 rounded-md p-2 text-sm hover:bg-white hover:text-black text-glacial">
          <FaTiktok className="text-lg" />
          <span>TIKTOK</span>
        </a>
      </div>

      <div className="flex justify-center items-center mb-4 w-full">
        <h1 className="text-[15vw] lg:text-[19vw] font-bold tracking-wide font-cubao">SLAVVO</h1>
      </div>
    </footer>
  );
}

export default Footer;