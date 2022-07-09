import React from "react";
import Mobi from "../public/assets/projects/mobi.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const mint = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={Mobi}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Mobi</h2>
          <h3>Next JS / Tailwind / Sanity.io </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#E94B3CFF]'>
            Project
          </p>
          <h2 className='text-gray-300 py-4'>Overview</h2>
          <p>
          This dApp was built using Next JS, Sanity.io, Tailwind, and
            Ethers.js.It&apos;s essentially a car renting dApp that uses Mapbox API.
            You enter where you are and then want to go. It then calculates the
            distance and gives the amount that will be charged in Rinkeby ETH.
            For Rinkeby ETH you will need a Metamask account and some test eth
            using a rinkeby faucet. The dApp uses Sanity.io to keep track of the
            users and rides.

          </p>
          <a
            href='https://github.com/EthanWHarvey/mobi'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://mobi-ethanwharvey.vercel.app/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-600 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-gray-400 text-center font-bold pb-2'>
              Technologies
            </p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next Js
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sanity.io
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Ethers.js
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Mapbox API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className=' text-gray-500 underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default mint;
