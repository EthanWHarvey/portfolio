import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#E94B3CFF]'>
            About
          </p>
          <h2 className='text-gray-300 py-4'>Who I Am</h2>
          <p className='py-4 text-gray-200'>
            I’m a very ambitious Blockchain Developer who emphasizes creating
            excellent functional and fast software. I can develop smart
            contracts that are flawless and secure as well as plan, build, and
            launch a website. I have been blockchain developing for two years
            and coding since I was 16. I am looking for a role in an established
            company with the opportunity to work with the latest technologies on
            diverse and challenging projects.
          </p>
          <p className='text-xl inline border-b-4 border-[#E94B3CFF] text-gray-300 '>
            {" "}
            Why Blockchain?
          </p>
          <p className='py-6 text-gray-200'>
            I chose to specialize in blockchain because when I first found out
            about cryptocurrencies, NFTs, and web3.0 I was very fascinated and
            intrigued by its technology. Ever since then I have become immersed
            in the languages and architecture, and I can confidently say there
            is nothing id rather do. Heck, who wouldn’t want to take part in the
            future of the internet?
          </p>
          <p className='text-xl inline border-b-4 border-[#E94B3CFF] text-gray-300 '>
            Life When I&apos;m Not Coding!
          </p>
          <p className='py-6 text-gray-200'>
            Currently, I am going into my second-year student at the University
            of Colorado – Colorado Springs where I am pursuing my BS in Computer
            Science. Most of my programming knowledge is self-taught as I love
            and am very passionate about programming. When I&apos;m not coding,
            I love to play basketball, watch sports (Formula 1, football,
            basketball, soccer) hang out with friends and family, learn
            Japanese, and watch anime!
          </p>
          <Link href='/#projects'>
            <p className='py-4 text-gray-200 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
