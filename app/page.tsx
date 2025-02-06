import React from 'react';
import Image from 'next/image';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import pic from '../public/images/3.png';
import poster from '../public/images/soul & soir [Final].png';



const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black px-2 sm:px-4 pt-[70px] md:pt-[110px]">
      <NavBar />

      
      <div className="mb-4 sm:mb-6 md:mb-8 text-center">
        <h1 className="text-[17vw] lg:text-[17vw] font-bold font-zen-dots">SLAVVO.</h1>
      </div>

      
      <div className="flex flex-col md:flex-row w-full md:mb-8 items-center">
        <div className="relative w-[250px] md:w-2/4 h-[500px] md:h-[700px] flex items-center justify-center mb-2 lg:mb-0">
          <Image src={pic} alt="Nature" layout="fill" className="object-cover" />
        </div>
        <div className="flex flex-col md:w-2/4 md:pl-4 pl-2 h-[500px] md:h-[700px] justify-end">
          <h2 className="lg:text-[4vw] text-[6vw] font-semibold mb-[-10px] mt-3 font-zen-dots  ">SOUL & REBELLION.</h2>
          <p className="lg:text-sm text-xs lg:mb-1 font-lora tracking-normal leading-loose lg:tracking-wide lg:leading-relaxed sm:tracking-tight sm:leading-normal text-justify">
            mide johnson is a rap, jazz, and neo-soul artist with an eye for provocation and a tongue for poetry. his elite lyricism, emotional relatability, and conceptual vision positions him as a breath of fresh air. born in ibadan, nigeria, and groomed in lagos and london, mide and his team of part-time eccentrics are hard at work using sound, words, and graphic visuals to tell the stories of everyday people for his debut album, “slavvo”.
          </p>
          <a href="https://www.scribd.com/document/778378439/Slavvo-the-Culture-s-Unusual-Leader-pdf" className="font-lora text-xs lg:text-sm underline hover:bg-black hover:text-white p-1 transition duration-300 flex items-center w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className="mr-1">
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
            <span className='bad-script'> about mide</span>
          </a>
        </div>
      </div>
      <hr className="lg:mb-5 lg:mt-5 mt-5 w-full border-t-2 border-black" />
      <div className="flex flex-col md:flex-row w-full mb-6 md:mb-0 lg:mt-10 mt-10">
  
        <div className="flex-1 text-start md:text-left mb-4 md:mb-0 lg:mt-9">
          <h1 className="text-2xl lg:text-4xl font-bold text-start font-zen-dots mb-4">SLAVVO (Pre-Album)</h1>
          <h2 className="text-2xl lg:text-4xl font-bold text-start font-zen-dots mb-6">FOR ALL IMMIGRANTS: LEGAL, ILLEGAL & LETHAL</h2>
          <a 
            href="https://midejohnson.bandcamp.com/album/slavvo-pre-album" 
            className="font-lora text-xs lg:text-sm underline hover:bg-black hover:text-white p-2 transition duration-300 flex items-center w-fit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className="mr-1">
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
            Listen to the pre-album
          </a>
        </div>

        <div className="relative flex-1 lg:p-6 font-lora w-full">
          <div className="h-[1000px] lg:h-[500px] flex flex-col mb-2 justify-stretch">
            
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
              <div className="relative md:col-span-2">
                <img src="/images/slavvo1.jpg" alt="Description 1" className="w-full h-auto object-cover shadow-md"/>
              </div>
              <div className="relative md:col-span-1 flex flex-col">
                <img src="/images/slavvo2.png" alt="Description 2" className="w-full h-auto object-cover  shadow-md mb-4"/>
                <img src="/images/slavvo3.png" alt="Description 3" className="w-full h-auto object-cover  shadow-md"/>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <hr className="lg:mb-5 w-full border-t-2 border-black"/>
      

      <div className="p-6 grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-6">
        <div>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Image
                alt="Vivo Latam collage"
                fetchPriority="high"
                width={480}
                height={356}
                src="/images/Copy of _DSC2759-Enhanced-NR.jpg" 
                className="w-full nc-disable-selection"
                style={{ color: 'transparent' }}
              />
            </div>
            <div>
              <Image
                alt="Vivo Latam collage"
                fetchPriority="high"
                width={480}
                height={550}
                src="/images/Copy of _DSC2826-Enhanced-NR.jpg" 
                className="w-full nc-disable-selection"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mt-20">
            <Image
              alt="Vivo Latam collage"
              fetchPriority="high"
              width={483}
              height={812}
              src="/images/Copy of _DSC2881-Enhanced-NR.jpg" 
              className="w-full nc-disable-selection"
              style={{ color: 'transparent' }}
            />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Image
                alt="Vivo Latam collage"
                fetchPriority="high"
                width={480}
                height={356}
                src="/images/Copy of _DSC2978-Enhanced-NR.jpg" 
                className="w-full nc-disable-selection"
                style={{ color: 'transparent' }}
              />
            </div>
            <div>
              <Image
                alt="Vivo Latam collage"
                fetchPriority="high"
                width={480}
                height={550}
                src="/images/Copy of _DSC2979-Enhanced-NR.jpg" 
                className="w-full nc-disable-selection"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mt-7">
            <Image
              alt="Vivo Latam collage"
              fetchPriority="high"
              width={483}
              height={812}
              src="/images/Copy of _DSC3194-Enhanced-NR.jpg" 
              className="w-full nc-disable-selection"
              style={{ color: 'transparent' }}
            />
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Image
                alt="Vivo Latam collage"
                fetchPriority="high"
                width={480}
                height={456}
                src="/images/Copy of _DSC3194-Enhanced-NR(1).jpg" 
                className="w-full nc-disable-selection"
                style={{ color: 'transparent' }}
              />
            </div>
            <div>
              <Image
                alt="Vivo Latam collage"
                fetchPriority="high"
                width={480}
                height={650}
                src="/images/Copy of DSC3055-Enhanced-NR.jpg" 
                className="w-full nc-disable-selection"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>

        <div>
          <div className="mt-20">
            <Image
              alt="Vivo Latam collage"
              fetchPriority="high"
              width={483}
              height={1000}
              src="/images/Copy of DSC3055-Enhanced-NR.jpg" 
              className="w-full nc-disable-selection"
              style={{ color: 'transparent' }}
            />
          </div>
        </div>
      </div>



      
      <div className="relative w-full font-zen-dots">
        <div className="flex flex-col items-center w-full p-6 ">
          <h1 className="text-4xl lg:text-8xl font-bold text-black mb-9 text-center">Mide’s discography</h1>
          
          <div className="flex space-x-4 flex-wrap justify-center items-center">
            <a 
              href="https://www.youtube.com/@midejohnson" 
              className="lg:bg-black  lg:text-white text-sm lg:text-md py-2 px-4 lg:rounded lg:shadow transition duration-300 hover:bg-white hover:text-black"
            >
              &gt; YOUTUBE
            </a>
            <a 
              href="https://open.spotify.com/artist/7Clc8KPr7J1AEwsGkdiVU9" 
              className="lg:bg-black lg:text-white text-sm lg:text-md py-2 px-4 lg:rounded lg:shadow transition duration-300 hover:bg-white hover:text-black"
            >
              &gt; SPOTIFY
            </a>
            <a 
              href="https://music.apple.com/us/artist/mide-johnson/1550047601" 
              className="lg:bg-black  lg:text-white text-sm lg:text-md py-2 px-4 lg:rounded lg:shadow transition duration-300 hover:bg-white hover:text-black"
            >
              &gt; APPLE MUSIC
            </a>
            <a 
              href="https://audiomack.com/thejohnson-1" 
              className="lg:bg-black lg:text-white text-sm lg:text-md py-2 px-4 lg:rounded lg:shadow transition duration-300 hover:bg-white hover:text-black"
            >
              &gt; AUDIOMACK
            </a>
            <a 
              href="http://patreon.com/MideJohnson" 
              className="lg:bg-black lg:text-white text-sm lg:text-md py-2 px-4 lg:rounded lg:shadow transition duration-300 hover:bg-white hover:text-black"
            >
              &gt; PATRON
            </a>
            <a 
              href="https://linktr.ee/midejohnson" 
              className="lg:bg-black lg:text-white text-sm lg:text-md py-2 px-4 lg:rounded lg:shadow transition duration-300 hover:bg-white hover:text-black"
            >
              &gt; LINKTREE
            </a>
          </div>
        </div>

        {/* Wave SVG */}
        <svg
          className="w-full h-auto" // Responsive height
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#000" // Change the color if needed
            d="M0,128L30,106.7C60,85,120,43,180,48C240,53,300,107,360,128C420,149,480,139,540,117.3C600,96,660,64,720,58.7C780,53,840,75,900,96C960,117,1020,139,1080,128C1140,117,1200,75,1260,53.3C1320,32,1380,64,1410,80L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
          />
        </svg>
      </div>


      <Footer />
    </div>
  );
}

export default Home;