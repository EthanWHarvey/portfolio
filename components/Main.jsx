/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaFileAlt } from "react-icons/fa";

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-200'>
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-300'>
            Hi, I'm <span className='text-[#E94B3CFF]'> Ethan</span>
          </h1>
          <h1 className='py-2 text-gray-300'>
            An Entrepreneur & Software Engineer
          </h1>
          <p className='py-4 text-gray-200 max-w-[70%] m-auto'>
            My focus is on building and scaling enlightn, the client acquisition
            agency I founded in 2022, while expanding my technical foundation
            through a B.S. in Computer Science at UCCS. I am driven by the
            overlap between business systems and software — using each discipline
            to sharpen my thinking in the other.
          </p>
          <div className='flex items-center justify-between max-w-[430px] m-auto py-4'>
            <a
              href='https://docs.google.com/document/d/1KZr7FSp6WdqqbQEizJH3zLiDeZKOY5XV4dvAn4fSALA/edit?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaFileAlt />
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
