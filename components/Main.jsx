/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-200'>
            LET'S BUILD SOMETHING LEGENDARY TOGETHER
          </p>
          <h1 className='py-4 text-gray-300'>
            Hi, I'm <span className='text-[#E94B3CFF]'> Ethan</span>
          </h1>
          <h1 className='py-2 text-gray-300'>
            A Blockchain / Front-end Developer
          </h1>
          <p className='py-4 text-gray-200 max-w-[70%] m-auto'>
            I specialize in developing and optimizing dApps (Decentralized
            applications) and smart contracts based on blockchain and
            occasionally blockchain architecture as well as creating modern,
            responsive websites that emphasize optimizing user experience and
            functionality.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/ethan-harvey-x10i/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/EthanWHarvey'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
