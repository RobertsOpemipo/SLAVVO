import React from 'react';
import Image from 'next/image';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import pic from '../public/images/pexels-cottonbro-10677505.jpg';
import girl from '../public/images/stage performance 3.png';
import poster from '../public/images/soul & soir [Final].png';
import additionalImage1 from '../public/images/stage performance 2.png'; 
import additionalImage2 from '../public/images/stage performance.png'; 
import additionalImage3 from '../public/images/stage performance 3.png';
import slovvo from '../public/images/slavvo.jpg';
import tree from '../public/images/tree.jpg';
import mic from '../public/images/mic.jpg';

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
        <div className="flex flex-col md:w-2/4 md:pl-4 pl-2 h-[400px] md:h-[700px] justify-end">
          <h2 className="lg:text-[4vw] text-[6vw] font-semibold mb-[-10px] mt-10 font-zen-dots  ">SOUL & REBELLION.</h2>
          <p className="lg:text-sm text-xs lg:mb-1 font-bad-script tracking-normal leading-loose lg:tracking-wide lg:leading-relaxed sm:tracking-tight sm:leading-normal">
            mide johnson is a rap, jazz, and neo-soul artist with an eye for provocation and a tongue for poetry. his elite lyricism, emotional relatability, and conceptual vision positions him as a breath of fresh air. born in ibadan, nigeria, and groomed in lagos and london, mide and his team of part-time eccentrics are hard at work using sound, words, and graphic visuals to tell the stories of everyday people for his debut album, “slavvo”.
          </p>
          <a href="https://www.scribd.com/document/778378439/Slavvo-the-Culture-s-Unusual-Leader-pdf" className="font-bad-script text-xs lg:text-sm underline hover:bg-white hover:text-black p-1 transition duration-300 flex items-center w-fit">
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

  
      <div className="flex-1 p-6 font-bad-script ">
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
            className="font-bad-script text-xs lg:text-sm underline hover:bg-white hover:text-black p-1 transition duration-300 flex items-center w-fit"
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

        
            <div className="flex-1 p-6 font-bad-script text-justify">
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
              className="font-merriweather text-xs sm:text-sm underline hover:bg-black hover:text-white p-1 transition duration-300 flex items-center w-fit"
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

      {/* Additional Images Section */}
<div className="bg-black p-8">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    
    {/* Card 1 */}
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0">
        <Image src={additionalImage1} alt="Step Image 1" layout="fill" className="object-cover transition-transform duration-300 hover:scale-110" />
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0">
        <Image src={additionalImage2} alt="Step Image 2" layout="fill" className="object-cover transition-transform duration-300 hover:scale-110" />
      </div>
    </div>

    {/* Card 3 */}
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0">
        <Image src={additionalImage3} alt="Step Image 3" layout="fill" className="object-cover transition-transform duration-300 hover:scale-110" />
      </div>
    </div>

    {/* Card 4 */}
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0">
        <Image src={additionalImage3} alt="Step Image 4" layout="fill" className="object-cover transition-transform duration-300 hover:scale-110" />
      </div>
    </div>

    {/* Card 5 */}
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0">
        <Image src={additionalImage3} alt="Step Image 5" layout="fill" className="object-cover transition-transform duration-300 hover:scale-110" />
      </div>
    </div>

    {/* Card 6 */}
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <div className="absolute inset-0">
        <Image src={additionalImage3} alt="Step Image 6" layout="fill" className="object-cover transition-transform duration-300 hover:scale-110" />
      </div>
    </div>
    
  </div>
</div>
      <hr/>

      {/* About Mide Section */}
      <div className="flex flex-col items-center w-full md:mb-8 p-6 bg-[#fffbfb] rounded-lg shadow-md">
        <h1 className="text-6xl lg:text-8xl font-bold text-black mb-4 text-center">ALL ABOUT MIDE</h1>
        <a 
          href="https://linktr.ee/midejohnson" 
          className="bg-black text-white text-sm lg:text-md py-2 px-4 rounded shadow transition duration-300 hover:bg-gray-800"
        >
          Learn More
        </a>
      </div>


      <Footer />
    </div>
  );
}

export default Home;