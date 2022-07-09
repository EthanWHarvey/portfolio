import React from "react";
import BikeChainImg from "../public/assets/projects/BikeChain.png";
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
          src={BikeChainImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>BikeChain</h2>
          <h3>React JS / Solidity / Ethers.js</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#E94B3CFF]'>
            Project
          </p>
          <h2 className='text-gray-300 py-4'>Overview</h2>
          <p>
            This dApp was built using React JS, Chakra UI, Solidity, and Hardhat
            to connect to the blockchain. BikeChain is essentially a bike
            renting dApp that allows users to rent out a bike using test
            BNB(Binance Coin) and the BSC(Binance Smart Chain) Testnet by
            connecting to metamask wallet. Users can see their BNB credit, BNB
            due, Ride minutes, and bike status(green = can check out, red =
            already have a bike checked out).
          </p>
          <a
            href='https://github.com/EthanWHarvey/bikechain'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://bikechain.vercel.app/'
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
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Solidity
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Chakra UI
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Ethers.js
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Hardhat
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> BSC & BNB
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Node.js
              </p>
              <p className='text-gray-400 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
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
