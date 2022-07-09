import React from "react";
import Image from "next/image";
import BikeChainImg from "../public/assets/projects/BikeChain.png";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import CryptoMafiaNFT from "../public/assets/projects/CryptoMafiaNFT.png";
import airKrypto from "../public/assets/projects/airKrypto.png";
import Mobi from "../public/assets/projects/mobi.png";

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#E94B3CFF]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='BikeChain'
            backgroundImg={BikeChainImg}
            projectUrl='/bikechain'
            tech='React JS'
          />
          <ProjectItem
            title='NFT Mint Website'
            backgroundImg={CryptoMafiaNFT}
            projectUrl='/mint'
            tech='React JS'
          />
          <ProjectItem
            title='airKrypto'
            backgroundImg={airKrypto}
            projectUrl='/airkrypto'
            tech='Next JS'
          />
          <ProjectItem
            title='Mobi'
            backgroundImg={Mobi}
            projectUrl='/mobi'
            tech='Next JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
