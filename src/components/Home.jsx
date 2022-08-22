import React from 'react';
import HeroImage from '../assets/heroimage.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <>
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center h-full'>

          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
              Iam a FullStack Developer
          </h2>

          <p className='text-gray-500 py-4 max-w-md'>
          I have 3 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Django, PostgresQl and Git.
          </p>

          <div>
            <button 
            className='group text-white w-fit bg-gradient-to-r px-8 py-3 my-2 flex items-center rounded-md from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            
            </button>
            
          </div>

        </div>

          <img className='md:h-[400px] w-2/3 rounded-2xl mx-auto md:w-[350px]' src={HeroImage} alt='profile'/>

      </div>
    </div>
      
      
    </>
  )
}

export default Home