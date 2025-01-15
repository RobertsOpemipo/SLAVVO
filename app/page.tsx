import React from 'react';
import Image from 'next/image';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import pic from '../public/images/pexels-cottonbro-10677505.jpg';
import poster from '../public/images/soul & soir [Final].png';



const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white px-2 sm:px-4 pt-[70px] md:pt-[110px]">
      <NavBar />

      
      <div className="mb-4 sm:mb-6 md:mb-8 text-center">
        <h1 className="text-[17vw] lg:text-[17vw] font-bold font-zen-dots">SLAVVO.</h1>
      </div>

      
      <div className="flex flex-col md:flex-row w-full md:mb-8 items-center">
        <div className="relative w-[250px] md:w-2/4 h-[500px] md:h-[700px] flex items-center justify-center mb-9 lg:mb-0">
          <Image src={pic} alt="Nature" layout="fill" className="object-cover" />
        </div>
        <div className="flex flex-col md:w-2/4 md:pl-4 pl-2 h-[500px] md:h-[700px] justify-end">
          <h2 className="lg:text-[4vw] text-[6vw] font-semibold mb-[-10px] mt-10 font-zen-dots  ">SOUL & REBELLION.</h2>
          <p className="lg:text-sm text-xs lg:mb-1 font-lora tracking-normal leading-loose lg:tracking-wide lg:leading-relaxed sm:tracking-tight sm:leading-normal">
            mide johnson is a rap, jazz, and neo-soul artist with an eye for provocation and a tongue for poetry. his elite lyricism, emotional relatability, and conceptual vision positions him as a breath of fresh air. born in ibadan, nigeria, and groomed in lagos and london, mide and his team of part-time eccentrics are hard at work using sound, words, and graphic visuals to tell the stories of everyday people for his debut album, “slavvo”.
          </p>
          <a href="https://www.scribd.com/document/778378439/Slavvo-the-Culture-s-Unusual-Leader-pdf" className="font-lora text-xs lg:text-sm underline hover:bg-white hover:text-black p-1 transition duration-300 flex items-center w-fit">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className="mr-1">
              <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
            </svg>
            <span className='bad-script'> about mide</span>
          </a>
        </div>
      </div>

<div className="flex flex-col md:flex-row w-full mb-6 md:mb-8 lg:mt-10 mt-10">
  
  <div className="flex-1 text-start md:text-left mb-4 md:mb-0 lg:mt-9">
    <h1 className="text-2xl lg:text-4xl font-bold text-start font-zen-dots">SLAVVO (Pre-Album)</h1>
  </div>

  
      <div className="flex-1 p-6 font-lora ">
        <p className="text-base lg:text-base lg:mt-12 mb-4 px-4">
          The Slavvo (Pre-Album) is a compelling four-track compilation that delves into themes of identity, 
          the quest for belonging, love, and the resilience of survival through the lens of an immigrant. 
          While these narratives are not new—they have been expressed and reinterpreted across various art forms and genres— 
          Slavvo offers a unique experience characterized by acute relatability, deeply emotional storytelling, 
          and an unparalleled passion.
        </p>
        <p className="text-base lg:text-lg mb-4 px-4">
          This pre-album serves as a precursor to the forthcoming ten-track full-length album. 
          Though it represents only a fraction of the complete work, it stands alone as a remarkable piece of artistry. 
          It embodies an unfinished narrative; in the grand tapestry of our lives, our stories are never truly complete—we rewrite them each day.
        </p>
        <p className="text-base lg:text-lg mb-4 px-4">
          Experience this reggae, soul, jazz, and rap masterpiece exclusively through this link.
        </p>

        {/* Link Section */}
        <div className="flex  mt-6">
          <a 
            href="http://patreon.com/MideJohnson" 
            className="font-lora text-xs lg:text-sm underline hover:bg-white hover:text-black p-1 transition duration-300 flex items-center w-fit"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className="mr-1">
                  <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                </svg>
            Listen to the pre-album
          </a>
        </div>
      </div>
    </div>

      <hr className="lg:mb-5 mt-28 w-full border-t-2 border-black"/>
      <div className="flex flex-col md:flex-row w-full mb-6 md:mb-8 lg:mt-10 mt-10">
        
        <div className="flex-1 text-start md:text-left mb-4 md:mb-0 lg:mt-9">
          <h1 className="text-2xl lg:text-4xl font-bold text-start font-zen-dots">“SOUL & SOIR” : JAN 16 2025</h1>
        </div>

        
            <div className="flex-1 p-6 font-lora">
              <p className="text-sm lg:text-base lg:mt-12 mb-4 px-4 ">
                The Slavvo (Pre-Album) is a compelling four-track compilation that delves into themes of identity, 
                the quest for belonging, love, and the resilience of survival through the lens of an immigrant. 
                While these narratives are not new—they have been expressed and reinterpreted across various art forms and genres— 
                Slavvo offers a unique experience characterized by acute relatability, deeply emotional storytelling, 
                and an unparalleled passion.
              </p>
              <p className="text-sm lg:text-lg mb-4 px-4">
                Join us for a rare evening of soul, rhythm, nostalgia, friendship, and emotion. The “Soul and Soir” live concert will be headlined by Midé Johnson and features iconic performances from Rania Yasmine, Emerald, Tanaparis, Marina Santos and Raven. Portia, a comedienne and incredible host, will take the stage to light up the audience as she guides them through the live renditions. T
              </p>
              <p className="text-sm lg:text-lg mb-4 px-4">
                he event is co-organized by Village Du Soir and the Geneva Secretariat Interns Association. Tickets are available for 5 CHF online and 10 CHF at the concert entrance.
              </p>

              {/* Link Section */}
              <div className="flex  mt-6">
                <a 
              href="https://www.patreon.com/c/MideJohnson" 
              className="font-lora text-xs sm:text-sm underline hover:bg-white hover:text-black p-1 transition duration-300 flex items-center w-fit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" className="mr-1">
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/>
              </svg>
              <span className='font-glacial'> buy your tickets now</span>
            </a>
              </div>
            </div>
      </div>

      {/* Concert Poster Section */}
      <div className="relative w-full lg:w-[50%] h-[600px] mb-8 mr-auto">
        <Image src={poster} alt="Concert Poster" layout="fill" className="object-cover" />
      </div>

      <div className="p-6 grid grid-cols-6 gap-6">
        <div>
          <div className="grid grid-cols-1 gap-6">
            <div>
              <Image
                alt="Vivo Latam collage"
                fetchPriority="high"
                width={480}
                height={356}
                src="/images/Copy of _DSC2759-Enhanced-NR.jpg" // Update with actual image path
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
                src="/images/Copy of _DSC2826-Enhanced-NR.jpg" // Update with actual image path
                className="w-full nc-disable-selection"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[5rem]">
            <Image
              alt="Vivo Latam collage"
              fetchPriority="high"
              width={483}
              height={812}
              src="/images/Copy of _DSC2881-Enhanced-NR.jpg" // Update with actual image path
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
                src="/images/Copy of _DSC2978-Enhanced-NR.jpg" // Update with actual image path
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
                src="/images/Copy of _DSC2979-Enhanced-NR.jpg" // Update with actual image path
                className="w-full nc-disable-selection"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[5rem]">
            <Image
              alt="Vivo Latam collage"
              fetchPriority="high"
              width={483}
              height={812}
              src="/images/Copy of _DSC3194-Enhanced-NR.jpg" // Update with actual image path
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
                src="/images/Copy of _DSC3194-Enhanced-NR(1).jpg" // Update with actual image path
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
                src="/images/Copy of DSC3055-Enhanced-NR.jpg" // Update with actual image path
                className="w-full nc-disable-selection"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
        <div>
          <div className="mt-[5rem]">
            <Image
              alt="Vivo Latam collage"
              fetchPriority="high"
              width={483}
              height={820}
              src="/images/Copy of _DSC2979-Enhanced-NR.jpg" // Update with actual image path
              className="w-full nc-disable-selection"
              style={{ color: 'transparent' }}
            />
          </div>
        </div>
      </div>



      
      <div className="relative w-full font-zen-dots">
        <div className="flex flex-col items-center w-full p-6 bg-black rounded-lg shadow-md">
          <h1 className="text-4xl lg:text-8xl font-bold text-white mb-9 text-center">Mide’s discography</h1>
          
          <div className="flex space-x-4 flex-wrap justify-center">
            <a 
              href="https://www.youtube.com/@midejohnson" 
              className="bg-black text-white text-sm lg:text-md py-2 px-4 rounded shadow transition duration-300 hover:bg-white hover:text-black"
            >
              &gt; YOUTUBE
            </a>
            <a 
              href="https://open.spotify.com/artist/7Clc8KPr7J1AEwsGkdiVU9" 
              className="bg-black text-white text-sm lg:text-md py-2 px-4 rounded shadow transition duration-300 hover:bg-white hover:text-black"
            >
              &gt; SPOTIFY
            </a>
            <a 
              href="https://music.apple.com/us/artist/mide-johnson/1550047601" 
              className="bg-black text-white text-sm lg:text-md py-2 px-4 rounded shadow transition duration-300 hover:bg-white hover:text-black"
            >
              &gt; APPLE MUSIC
            </a>
            <a 
              href="https://audiomack.com/thejohnson-1" 
              className="bg-black text-white text-sm lg:text-md py-2 px-4 rounded shadow transition duration-300 hover:bg-white hover:text-black"
            >
              &gt; AUDIOMACK
            </a>
            <a 
              href="http://patreon.com/MideJohnson" 
              className="bg-black text-white text-sm lg:text-md py-2 px-4 rounded shadow transition duration-300 hover:bg-white hover:text-black"
            >
              &gt; PATRON
            </a>
            <a 
              href="https://linktr.ee/midejohnson" 
              className="bg-black text-white text-sm lg:text-md py-2 px-4 rounded shadow transition duration-300 hover:bg-white hover:text-black"
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
            fill="#fff" // Change the color if needed
            d="M0,128L30,106.7C60,85,120,43,180,48C240,53,300,107,360,128C420,149,480,139,540,117.3C600,96,660,64,720,58.7C780,53,840,75,900,96C960,117,1020,139,1080,128C1140,117,1200,75,1260,53.3C1320,32,1380,64,1410,80L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0Z"
          />
        </svg>
      </div>


      <Footer />
    </div>
  );
}

export default Home;