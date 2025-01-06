import React from 'react';

const Footer = () => {
  return (
    <div className="flex flex-col bg-black text-white p-8 w-full ">
      {/* Flex container for Subscription and Social Links */}
      <div className="flex w-full max-w-full justify-between mb-8">
        {/* Subscription Section */}
        <div className="flex flex-col items-start ">
          <h2 className="text-lg mb-4">SUBSCRIBE</h2>
          <p className="text-sm mb-4">Sign up with your email address to keep up with the plantation.</p>
          <form className="flex space-x-2 mb-2">
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 rounded bg-gray-800 border border-gray-600 placeholder-gray-400"
            />
            <button className="p-2 bg-white text-black rounded">Sign Up</button>
          </form>
          <p className="text-sm">We respect your privacy.</p>
        </div>

        {/* Social Media Links Section */}
        <div className="flex flex-col items-end ml-auto">
          <a href="#" className="text-sm underline">INSTAGRAM</a>
          <a href="#" className="text-sm underline">YOUTUBE</a>
          <a href="#" className="text-sm underline">TIKTOK</a>
        </div>
      </div>

      {/* Brand Name Section */}
      <div className="flex justify-center mb-4">
        <h1 className="text-[10vw] font-bold">SLAWO</h1>
      </div>
    </div>
  );
}

export default Footer;