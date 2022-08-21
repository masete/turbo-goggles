import React from 'react';
import { FaBars, FaTimes} from 'react-icons/fa'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 fixed text-white bg-black p-4'>
        <div>
            <h1 className='text-6xl font-signature ml-4'>masete</h1>
        </div>
    </div>
  )
}

export default NavBar