"use client";
import React from 'react';
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-white text-black -mt-1 lg:-mt-5 p-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-5xl font-bold tracking-wide font-zen-dots text-center">SLAVVO</h1>
        <p className="text-center mt-2">Inspired by light and driven by design,</p>
        <p className="text-center">Let’s work together!</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-around items-center w-full mb-8">
        <a
          href="https://www.instagram.com/midethemagic/"
          className="flex items-center justify-center text-black text-lg space-x-2 p-2 rounded-md hover:bg-black hover:text-white transition-colors"
        >
          <FaInstagram />
          <span>Instagram</span>
        </a>
        <a
          href="https://x.com/midethemagic"
          className="flex items-center justify-center text-black text-lg space-x-2 p-2 rounded-md hover:bg-black hover:text-white transition-colors"
        >
          <FaTwitter />
          <span>Twitter</span>
        </a>
        <a
          href="https://www.tiktok.com/@midethemagic"
          className="flex items-center justify-center text-black text-lg space-x-2 p-2 rounded-md hover:bg-black hover:text-white transition-colors"
        >
          <FaTiktok />
          <span>TikTok</span>
        </a>
      </div>

      <div className="flex flex-col items-center text-center">
        <p className="text-sm">New Projects / Business</p>
        <p className="text-sm">production@spotstudios.es</p>
        <p className="text-sm">(+34) 930 046 720</p>
      </div>
    </footer>
  );
};

export default Footer;