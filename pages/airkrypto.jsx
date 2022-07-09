import React from "react";
import airKrypto from "../public/assets/projects/airKrypto.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const bikechain = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={airKrypto}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>airKrypto</h2>
          <h3>Next JS / Tailwind / JavaScript </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#E94B3CFF]'>
            Project
          </p>
          <h2 className='text-gray-300 py-4'>Overview</h2>
          <p>
            This app was built using Next JS, Tailwind, JavaScript, and the
            Mapbox API. It is rental property app that showcases different homes
            and apartments in four different states/countries. The idea is that
            users can use crypto to pay for their stay which possibly I may add
            a wallet and Smart contract function, so all data is stored on the
            blockchain. The app uses Mapbox API for the map and locations.
          </p>
          <a
            href='https://github.com/EthanWHarvey/airKrypto'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://airkrypto-i9wcebenh-ethanwharvey.vercel.app/'
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
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next JS
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Mapbox API
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Chakra UI
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

export default bikechain;
