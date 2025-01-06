import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col bg-gray-900 text-white p-8 w-full">
      {/* Flex container for Subscription and Social Links */}
      <div className="flex w-full max-w-full justify-around mb-8">
        {/* Subscription Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg mb-4">SUBSCRIBE</h2>
          <p className="text-sm mb-4">Sign up with your email address to keep up with the plantation.</p>
          <form className="flex space-x-2 mb-2">
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 w-full border border-gray-400 bg-gray-800 placeholder-gray-400 rounded-md"
            />
            <button className="p-3 bg-white text-black rounded-md hover:bg-black hover:text-white hover:border border-white">Sign Up</button>
          </form>
          <p className="text-sm">We respect your privacy.</p>
        </div>

        {/* Social Media Links Section */}
        <div className="flex flex-col items-end ml-auto">
          <a href="#" className="text-sm underline mb-2">INSTAGRAM</a>
          <a href="#" className="text-sm underline mb-2">YOUTUBE</a>
          <a href="#" className="text-sm underline mb-2">TIKTOK</a>
        </div>
      </div>

      {/* Brand Name Section */}
      <div className="flex justify-center mb-4 w-full">
        <h1 className="text-[10vw] font-bold">SLAWO</h1>
      </div>
    </div>
  );
}

export default Footer;