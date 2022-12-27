import React from 'react'

const About = () => {
  return (
    <>
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-500 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl border-b-4 border-gray-500 font-bold inline'>About</p>
            </div>

            <p className='text-xl mt-20'>
            Am an open-source contributor with an ambitious personality that thrives on challenges.
             Setting new goals and aiming to be more productive and effective in any environment. 
             Looking for opportunities where I can be part of engineering impactful software solutions
              using my hard-earned skills in data engineering.

              I am a professional Data Scientist with experience in data cleaning, machine learning model training,
              Power BI, Explanatory Data analysis, ELT, Data warehousing, SQL, plotly-Dash, web scrapping using selenium.

              I have vast experience in python API development using Flask, most of which i developed during 
              bootcamps ren by andela in their search for exceptional african talent to assign their US based 
              clients. In the period i learnt alot including python, git, TDD, OOP, DSA, Javascript and technical writing on medium

            </p>

            <br />
            <p className='text-xl'>
                I have grown over the years working on Data Science dashboards using plotly dash, 
                building projects using React, NodeJs. I have worked with PostgresQl and mongoDB.
            
               I fancy accessibility, customer journey and story, UX, project management, search engine optimization and responsiveness in websites.
            </p>
        </div>
    </div>
    </>
  )
}

export default About