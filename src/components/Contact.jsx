import React from 'react'

const  Contact = () => {
  return (
    <>
    <div>
        <div>
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
                </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact