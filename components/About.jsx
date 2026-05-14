import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import MeImg from "../public/assets/me3.png";

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
            My primary focus is enlightn, the client acquisition agency I
            founded in 2022 that helps creators, coaches, and consultants build
            predictable revenue. Building and running a real business has been
            the most formative experience of my life — it has shaped how I think
            about systems, strategy, and what it actually takes to deliver
            results for people.
          </p>
          <p className='py-2 text-gray-200'>
            Alongside that, I am pursuing a B.S. in Computer Science at the
            University of Colorado Colorado Springs, where I am steadily
            expanding my technical skills in Java, Python, C, and web
            development. I see software engineering as a long-term investment
            that makes me a sharper operator and builder — not a career pivot,
            but a deliberate layer on top of the business foundation I have
            already been developing.
          </p>
          <p className='text-xl inline border-b-4 border-[#E94B3CFF] text-gray-300'>
            Why CS and Business?
          </p>
          <p className='py-6 text-gray-200'>
            Running enlightn taught me that the best ideas die without good
            execution, and understanding technology makes you a better decision
            maker regardless of what you are building. I am interested in how
            software, systems thinking, and business strategy overlap — and I am
            always finding ways to apply what I learn on the engineering side
            directly to the work I am doing every day.
          </p>
          <Link href='/#projects'>
            <p className='py-4 text-gray-200 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='w-full h-auto m-auto shadow-xl shadow-gray-600 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src={MeImg} className='rounded-xl' alt='Ethan Harvey' />
          </div>

          <div className='w-full shadow-xl shadow-gray-600 rounded-xl p-6'>
            <h3 className='text-gray-300 text-lg font-semibold pb-3 border-b border-gray-600'>
              Contact Info
            </h3>
            <div className='pt-4 space-y-3 text-gray-200 text-sm'>
              <p>
                <span className='text-[#E94B3CFF] uppercase tracking-widest text-xs'>
                  Name
                </span>
                <br />
                Ethan Harvey
              </p>
              <p>
                <span className='text-[#E94B3CFF] uppercase tracking-widest text-xs'>
                  Location
                </span>
                <br />
                Colorado Springs, CO
              </p>
              <p>
                <span className='text-[#E94B3CFF] uppercase tracking-widest text-xs'>
                  Email
                </span>
                <br />
                <a
                  href='mailto:xethanharvey@gmail.com'
                  className='hover:text-[#E94B3CFF] transition-colors'
                >
                  xethanharvey@gmail.com
                </a>
              </p>
              <p>
                <span className='text-[#E94B3CFF] uppercase tracking-widest text-xs'>
                  GitHub
                </span>
                <br />
                <a
                  href='https://github.com/EthanWHarvey'
                  target='_blank'
                  rel='noreferrer'
                  className='hover:text-[#E94B3CFF] transition-colors'
                >
                  github.com/EthanWHarvey
                </a>
              </p>
            </div>
            <div className='flex gap-4 pt-5'>
              <a
                href='https://github.com/EthanWHarvey'
                target='_blank'
                rel='noreferrer'
              >
                <div className='rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <FaGithub size={18} />
                </div>
              </a>
              <a href='mailto:xethanharvey@gmail.com'>
                <div className='rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                  <AiOutlineMail size={18} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
