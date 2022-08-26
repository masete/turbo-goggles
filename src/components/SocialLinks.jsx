import React from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child:(
                <> LinkedIn <FaLinkedinIn size={30}/></>
            ),
            href: "https://www.linkedin.com/in/nicholas-masete-98b157101/",
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child:(
                <> Github <FaGithub size={30}/></>
            ),
            href: "https://github.com/masete"
        },
        {
            id: 3,
            child:(
                <> Twitter <FaTwitter size={30}/></>
            ),
            href: "https://twitter.com/NicholasMasete"
        },
        {
            id: 4,
            child:(
                <> mail <HiOutlineMail size={30}/></>
            ),
            href: "mailto:foo@gmail.com"
        },
        {
            id: 5,
            child:(
                <> Resume <BsFillPersonLinesFill size={30}/></>
            ),
            href: "/resume.pdf",
            style: 'rounded-br-md',
            download: true,
        }
    ]
  return (
    <>
    <div className='hidden lg:flex flex-col top-[30%] fixed left-0'>
        <ul>
            {links.map(({id, style, href,child, download})=>(
                <li  key={id} 
                className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md bg-gray-500 duration-300 ${style}`}>
                    <a href={href} 
                    className='flex justify-between text-white items-center w-full'
                    download={download}
                    target='_blank'
                    rel="noreferrer"
                    >
                        {child}
                    </a>
                </li>

            ))}
            
        </ul>
    </div>
    </>
  )
}

export default SocialLinks