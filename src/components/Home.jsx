import React from 'react';
import HeroImage from '../assets/heroimage.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <>
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center h-full'>

          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
              I am a Data Scientist
          </h2>

          <p className='text-gray-500 py-4 max-w-md'>
          I have 3 years of experience building and desgining softwares.
            Currently, I love to work on data science projects using technologies like
            Python, Machine Learning, Power BI, SQL, Plotly-Dash, React, Tailwind, Flask, PostgresQl and Git.
          </p>

          <div>
            <Link to='portfolio' smooth duration={500}
            className='group text-white w-fit bg-gradient-to-r px-8 py-3 my-2 flex items-center rounded-md from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            
            </Link>
            
          </div>

        </div>
        <div>
           <img 
           className='rounded-2xl mx-auto w-1/3 md:w-[400px]' 
           src={HeroImage} 
           alt='profile'/>
        </div>
         

      </div>
    </div>
      
      
    </>
  )
}

export default Home