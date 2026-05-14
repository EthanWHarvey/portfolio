import React from "react";
import Image from "next/image";
import ethereum from "../public/assets/skills/ethereum.png";
import ethersJS from "../public/assets/skills/ethers.png";
import hardhat from "../public/assets/skills/hardhat.png";
import java from "../public/assets/skills/java.png";
import javascript from "../public/assets/skills/javascript.png";
import nodeJS from "../public/assets/skills/node.png";
import react from "../public/assets/skills/react.png";
import solidity from "../public/assets/skills/solidity.png";
import python from "../public/assets/skills/python.png";
import tailwind from "../public/assets/skills/Tailwind.png";
import nextjs from "../public/assets/skills/nextjs.png";
import cLang from "../public/assets/skills/CLanguage.png";



const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#E94B3CFF]'>
          Skills
        </p>
        <h2 className='text-gray-300 py-4'>What I Can Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='p-6 shadow-xl ronded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={python} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-200'>Python</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl ronded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={tailwind} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-200'>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl ronded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={nextjs} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-200'>Next.JS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl ronded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={cLang} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-200'>C</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl ronded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={javascript} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-200'>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl ronded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={nodeJS} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-200'>Node.JS</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl ronded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={react} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-200'>React</h3>
              </div>
            </div>
          </div>
          <div className='p-6 shadow-xl ronded-xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image src={java} width='64px' height='64px' alt='/' />
              </div>
              <div className='flex flex-col items-center justify-center'>
                <h3 className='text-gray-200'>Java</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
