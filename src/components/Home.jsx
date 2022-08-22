import React from 'react';
import HeroImage from '../assets/heroimage.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <>
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

        <div className='flex flex-col justify-center h-full'>

          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
              Iam a FullStack Developer
          </h2>

          <p className='text-gray-500 py-4 max-w-md'>
          I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Django, PostgresQl and Git.
          </p>

          <div>
            Portfolio
            <span>
              <MdOutlineKeyboardArrowRight />
            </span>
            
          </div>

        </div>

          <img className='h-[400px] rounded-2xl mx-auto md:w-[350px]' src={HeroImage} alt='profile'/>

      </div>
    </div>
      
      
    </>
  )
}

export default Home