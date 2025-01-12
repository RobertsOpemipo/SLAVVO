'use client';
import { useState } from 'react';
import Image from 'next/image'; // Import the Image component

const tracks = [
  { title: 'dark skin girls.', image: '/images/qr code beige 2.png' },
  { title: 'ibadan blues.', image: '/images/pexels-cottonbro-10677505.jpg' },
  { title: 'survival', image: '/images/stage.jpg' },
  { title: 'calvin kleins', image: '/images/slavvo.jpg' },
];

const TrackList = () => {
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-screen text-white bg-black md:flex-row">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        {hoveredTrack && (
          <Image
            src={hoveredTrack}
            alt="Track Image"
            width={256} 
            height={256} 
            className="hidden md:block object-cover"
          />
        )}
      </div>
      <div className="w-full md:w-1/2 p-4 h-screen">
        <h1 className="font-audiowide text-2xl md:text-7xl mb-10">Exclusive Track List</h1>
        <ul className="list-none">
          {tracks.map((track, index) => (
            <li
              key={index}
              className="cursor-pointer transition-transform transform hover:scale-105 mb-8 font-merriweather"
              onMouseEnter={() => setHoveredTrack(track.image)}
              onMouseLeave={() => setHoveredTrack(null)}
            >
              <h2 className="text-lg md:text-4xl font-merriweather">{track.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TrackList;