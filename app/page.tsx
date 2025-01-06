import React from 'react';
import Image from 'next/image';
import pic from '../public/images/pexels-cottonbro-10677505.jpg';
import girl from '../public/images/stage performance 3.png';
import poster from '../public/images/xftghstd.png';
import additionalImage1 from '../public/images/stage performance 2.png'; 
import additionalImage2 from '../public/images/stage performance.png'; 
import additionalImage3 from '../public/images/stage performance 3.png';
import slovvo from '../public/images/slavvo.jpg';


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f7f4] text-gray-900 px-2 sm:px-4 pt-[70px] md:pt-[80px]">
      

      {/* Title Section */}
      <div className="mb-4 sm:mb-6 md:mb-8 w-full">
        <h1 className="text-[15vw] lg:text-[18vw] font-bold text-center mt-[-50px] lg:mt-[-100px] mb-[-40px] lg:mb-[-60px] font-audiowide ">SLAVVO.</h1>
        <h2 className="text-[4vw] sm:text-[3vw] font-semibold text-right mr-2 sm:mr-12 mb-[-10px] font-audiowide">SOUL & REBELLION.</h2>
      </div>

      {/* First Image and Text Section */}
      <div className="flex flex-col md:flex-row w-full lg:mb-8 mb-20 ">
        <div className="relative w-full md:w-2/4 h-[500px] md:h-[700px] flex items-end md:ml-9 mb-4 lg:mb-0">
          <Image 
            src={pic} 
            alt="Nature" 
            layout="fill" 
            className="object-cover" 
          />
        </div>
        <div className="flex flex-col justify-end w-full md:w-2/4 md:pl-4 pl-2 h-[400px] md:h-[700px] ml-0 lg:ml-4">
          <p style={{ letterSpacing: '0.19em', lineHeight: '2.8' }} className="lg:text-sm text-sm lg:mb-2 font-merriweather">
            mide johnson is a rap, jazz, and neo-soul artist with an eye for provocation and a tongue for poetry. his elite lyricism, emotional relatability, and conceptual vision positions him as a breath of fresh air. born in ibadan, nigeria, and groomed in lagos and london, mide and his team of part-time eccentrics are hard at work using sound, words, and graphic visuals to tell the stories of everyday people for his debut album, “slavvo”.
          </p>
          <a href="#" className="font-merriweather text-xs sm:text-sm underline hover:bg-black hover:text-white p-1 transition duration-300 flex items-center w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className="mr-1">
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
            </svg>
            <span className='font-audiowide'> about mide</span>
          </a>
        </div>
      </div>

      <hr className='mb-3 w-full'/>

      {/* Second Paragraph and Image Section */}
      <div className="flex flex-col md:flex-row w-full mb-6 lg:mb-8 justify-between">
        <div className="flex flex-col justify-center w-full md:w-[50%] lg:pl-32 pr-4 lg:h-[500px] h-[500px] ">
          <h2 className="md:text-2xl text-lg md:mb-9 font-bold text-center font-audiowide md:mt-18">“SOUL & SOIR” : JAN 16 2025</h2>
          <p style={{ letterSpacing: '0.19em', lineHeight: '1.9' }} className="md:text-base text-base text-center md:text-left md:mb-2 mb-4 font-merriweather">
            join us for an evening of soul, rhythm, nostalgia, friendship, and emotion. the “Soul and Soir” live concert will be headlined by Midé Johnson and features iconic performances from Rania Yasmine, Emerald, Tanaparis, and Marina Santos. Portia, a comedienne and incredible host, will take the stage to light up the audience as she guides them through the live renditions. tickets are available for 5 CHF in the link below and 10 CHF at the concert entrance.
          </p>
          <a href="#" className="font-merriweather text-xs sm:text-sm underline hover:bg-black hover:text-white p-1 transition duration-300 flex items-center w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className="mr-1">
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
            </svg>
            <span className='font-audiowide'> buy your tickets now</span>
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
      <div className="flex flex-col md:flex-row w-full">
        {/* Left Column with Text */}
        <div className="md:w-1/2 flex flex-col justify-start p-8">
          <h1 className="lg:text-xl font-semibold lg:mb-10 mb-4 font-merriweather text-base">SLAVVO (EARLY ACCESS)</h1>
          <h4 style={{ letterSpacing: '0.19em', lineHeight: '1.9' }} className="lg:text-4xl text-xl font-bold mb-4 font-merriweather">NOT JUST AN ALBUM. AN EXPERIENCE. FOR ALL IMMIGRANTS: LEGAL, ILLEGAL & LETHAL.</h4>
          <a href="#" className="font-merriweather text-xs sm:text-sm underline hover:bg-black hover:text-white p-1 transition duration-300 flex items-center w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className="mr-1">
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
            </svg>
            <span className='font-audiowide'> view exclusive track list & features</span>
          </a>
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
        <div className="relative w-full md:w-2/4 h-[500px] md:h-[700px] flex items-end md:ml-20">
          <Image 
            src={pic} 
            alt="Nature" 
            layout="fill" 
            className="object-cover" 
          />
        </div>
        <div className="relative w-full md:w-2/4 h-[500px] md:h-[700px] flex items-end md:ml-20">
          <Image 
            src={pic} 
            alt="Nature" 
            layout="fill" 
            className="object-cover" 
          />
        </div>
      </div>
    </div>
  );
}

export default Home;