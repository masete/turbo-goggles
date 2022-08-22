import React from 'react';
import HeroImage from '../assets/heroimage.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <>
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>

      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

        <div>

          <h2>
              Iam a FullStack Developer
          </h2>

          <p>
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

          <img className='h-[350px] rounded-2xl mx-auto w-2/3 md:w-full' src={HeroImage} alt='profile'/>

      </div>
    </div>
      
      
    </>
  )
}

export default Home