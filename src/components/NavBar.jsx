import React from 'react';
import { FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {

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
        <div className='cursor-pointer pr-4 z-10 text-gray-500'>
            <FaBars size={30} />
        </div>
    </div>
  )
}

export default NavBar