import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
  return (
    <>
    <div className='flex flex-col top-[35%] fixed left-0'>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 duration-300'>
                <a href='' className='flex justify-between text-white items-center w-full'>
                    <> LinkedIn <FaLinkedinIn size={30}/></>
                </a>
            </li>
        </ul>
    </div>
    </>
  )
}

export default SocialLinks