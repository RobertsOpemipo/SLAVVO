import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import pic from '../public/images/pexels-cottonbro-10677505.jpg';
import girl from '../public/images/stage performance 3.png';
import poster from '../public/images/xftghstd.png';
import additionalImage1 from '../public/images/stage performance 2.png'; 
import additionalImage2 from '../public/images/stage performance.png'; 
import additionalImage3 from '../public/images/stage performance 3.png';
import slovvo from '../public/images/slavvo.jpg';
import tree from '../public/images/tree.jpg';
import mic from '../public/images/mic.jpg';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';





const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white px-2 sm:px-4 pt-[70px] md:pt-[80px]">
      <NavBar />

      {/* Title Section */}
      <div className="mb-4 sm:mb-6 md:mb-8 w-full lg:mt-5">
        <h1 className="text-[15vw] lg:text-[18vw] font-bold text-center mt-[-40px] lg:mt-[-100px] lg:mb-[-60px] font-cubao ">SLAVVO.</h1>
        <h2 className="text-[4vw] sm:text-[3vw] font-semibold text-right mr-2 sm:mr-12 mb-[-10px] font-cubao">SOUL & REBELLION.</h2>
      </div>

      {/* First Image and Text Section */}
      <div className="flex flex-col md:flex-row w-full md:mb-8 ">
        <div className="relative w-full md:w-2/4 h-[500px] md:h-[700px] flex items-end md:ml-9 mb-4 lg:mb-0">
          <Image 
            src={pic} 
            alt="Nature" 
            layout="fill" 
            className="object-cover" 
          />
        </div>
        <div className="flex flex-col md:justify-normal lg:justify-end w-full md:w-2/4 md:pl-4 pl-2 h-[400px] md:h-[700px] ml-0 lg:ml-4">
          <p className="lg:text-sm text-xs lg:mb-1 font-glacial tracking-normal leading-loose lg:tracking-wide lg:leading-relaxed sm:tracking-tight sm:leading-normal">
              mide johnson is a rap, jazz, and neo-soul artist with an eye for provocation and a tongue for poetry. his elite lyricism, emotional relatability, and conceptual vision positions him as a breath of fresh air. born in ibadan, nigeria, and groomed in lagos and london, mide and his team of part-time eccentrics are hard at work using sound, words, and graphic visuals to tell the stories of everyday people for his debut album, “slavvo”.
          </p>
          <a href="https://www.scribd.com/document/778378439/Slavvo-the-Culture-s-Unusual-Leader-pdf" className="font-merriweather text-xs lg:text-sm underline hover:bg-white hover:text-black p-1 transition duration-300 flex items-center w-fit ">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className="mr-1">
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
            </svg>
            <span className='font-glacial '> about mide</span>
          </a>
        </div>
      </div>

      <hr className="lg:mb-3 mt-28 w-full border-t-4 border-white"/>

      {/* Second Paragraph and Image Section */}
      <div className="flex flex-col md:flex-row w-full mb-6 lg:mb-8 justify-between">
        <div className="flex flex-col justify-center w-full md:w-[50%] lg:pl-32 pr-4 md:h-[500px] h-[600px] ">
          <h2 className="md:text-2xl text-sm md:mb-9 font-bold text-center font-cubao lg:mt-18 md:mt-0">“SOUL & SOIR” : JAN 16 2025</h2>
          <p style={{ letterSpacing: '0.19em', lineHeight: '1.9' }} className="md:text-base text-xs text-center md:text-left md:mb-2 mb-4 font-glacial">
            join us for an evening of soul, rhythm, nostalgia, friendship, and emotion. the “Soul and Soir” live concert will be headlined by Midé Johnson and features iconic performances from Rania Yasmine, Emerald, Tanaparis, and Marina Santos. Portia, a comedienne and incredible host, will take the stage to light up the audience as she guides them through the live renditions. tickets are available for 5 CHF in the link below and 10 CHF at the concert entrance.
          </p>
          <a href="https://www.patreon.com/c/MideJohnson" className="font-merriweather text-xs sm:text-sm underline hover:bg-white hover:text-black p-1 transition duration-300 flex items-center w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className="mr-1">
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
            </svg>
            <span className='font-glacial'> buy your tickets now</span>
          </a>
        </div>
        
        <div className="relative w-[full] md:w-[30%] lg:h-[500px] h-[400px] flex items-end border border-black">
          <Image 
            src={girl} 
            alt="Concert" 
            layout="fill" 
            className="object-cover" 
          />
        </div>
      </div>
      <div className="relative w-full lg:w-[50%] h-[600px] mb-8 mr-auto">
        <Image 
          src={poster} 
          alt="Concert Poster" 
          layout="fill" 
          className="object-cover" 
        />
      </div>

      <div className="mb-8 flex flex-row md:flex-col">
        <div className="relative w-[35%] h-[500px] mb-4 ml-auto"> 
          <Image 
            src={additionalImage1} 
            alt="Step Image 1" 
            layout="fill" 
            className="object-cover" 
          />
        </div>
        <div className="relative w-[35%] h-[480px] mb-4 mx-auto lg:-mt-96 lg:mb-10"> 
          <Image 
            src={additionalImage2} 
            alt="Step Image 2" 
            layout="fill" 
            className="object-cover" 
          />
        </div>
        <div className="relative w-[35%] h-[450px] mr-auto lg:-mt-96 lg:mb-10"> 
          <Image 
            src={additionalImage3} 
            alt="Step Image 3" 
            layout="fill" 
            className="object-cover" 
          />
        </div>
        <hr/>
      </div>
      <div className="flex flex-col md:flex-row w-full mb-5">
        {/* Left Column with Text */}
        <div className="md:w-1/2 flex flex-col justify-start p-8">
          <h1 className="lg:text-xl font-semibold lg:mb-10 mb-4 font-cubao text-base">SLAVVO (EARLY ACCESS)</h1>
          <h4 style={{ letterSpacing: '0.19em', lineHeight: '1.9' }} className="lg:text-4xl text-xl font-bold mb-4 font-cubao">NOT JUST AN ALBUM. AN EXPERIENCE. FOR ALL IMMIGRANTS: LEGAL, ILLEGAL & LETHAL.</h4>
          <Link href="/Tracklist" className="font-merriweather text-xs sm:text-sm underline hover:bg-white hover:text-black p-1 transition duration-300 flex items-center w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className="mr-1">
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
            </svg>
            <span className='font-glacial'> view exclusive track list & features</span>
          </Link>
          </div>

        {/* Right Column with Image */}
        <div className="md:w-1/2 relative h-[400px] sm:h-[500px] md:h-[700px]">
          <Image 
            src={slovvo} 
            alt="Your Description" 
            layout="fill" 
            className="object-cover" 
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full lg:mb-8 justify-around">
        <div className="relative w-full md:w-1/4 h-[500px] md:h-[700px] flex items-end md:ml-20">
          <Image 
            src={tree} 
            alt="Nature" 
            layout="fill" 
            className="object-cover" 
          />
        </div>
        <div className="relative w-full md:w-3/4 h-[500px] md:h-[700px] flex items-end md:ml-20">
          <Image 
            src={mic} 
            alt="Nature" 
            layout="fill" 
            className="object-cover" 
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;