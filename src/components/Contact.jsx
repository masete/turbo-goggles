import React from 'react'

const  Contact = () => {
  return (
    <>
    <div className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div>
                <p>Contact</p>
                <p>Submit this form to get in touch with me...</p>
            </div>

            <div>
                <form action=''>
                    <input type='text' name='name' placeholder='Enter your name here' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                    />

                    <input type='email' name='name' placeholder='Enter your email here' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' 
                    />

                    <textarea name='message' rows='10' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'>

                    </textarea>

                    <button 
                    className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Lets Talk</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact