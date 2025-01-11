import React from 'react';
import Link from 'next/link';

const TracklistHeader = () => {
  return (
    <nav className="relative p-4 bg-black text-white flex items-center ">
      <Link href="/" className="flex items-center relative group hover:border-b-2 hover:transition-all">
        <span className="text-lg font-semibold ">
          The Plantation
        </span>
        <span className="block h-0.5 bg-white transition-all duration-300 scale-x-0 group-hover:scale-x-100 absolute left-0 bottom-0" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#ffffff"
          className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1"
        >
          <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
        </svg>
      </Link>
    </nav>
  );
};

export default TracklistHeader;