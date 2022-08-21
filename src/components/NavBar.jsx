import React from 'react';
import { useState } from 'react';
import { FaBars, FaTimes} from 'react-icons/fa';

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const links = [
        {
            id:1,
            link: 'home',
        },
        {
            id:2,
            link: 'about',
        },
        {
            id:3,
            link: 'portfolio',
        },
        {
            id:4,
            link: 'experience',
        },
        {
            id:5,
            link: 'contact',
        }
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 fixed text-white bg-black p-4'>
        <div>
            <h1 className='text-6xl font-signature ml-4'>masete</h1>
        </div>
        <ul className='hidden md:flex'>

            {links.map(({id, link}) => (
                <li 
                key={id} 
                className='px-2 text-gray-500 font-medium cursor-pointer capitalize hover:scale-105 duration-200'>
                {link}
                </li>
            ))} 
            
        </ul>
        <div 
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? (<FaBars size={30}/>):(<FaTimes size={30}/>)}
        
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>

                {links.map(({id, link}) => (
                <li 
                    key={id} 
                    className='px-4 capitalize py-6 cursor-pointer text-4xl'>
                {link}
                </li>
            ))} 
            
            </ul>
        )}

        
    </div>
  )
}

export default NavBar