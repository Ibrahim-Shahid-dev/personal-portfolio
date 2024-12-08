import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div className='text-2xl md:text-4xl' data-aos="zoom-in-up">
                <h2 className='text-5xl'><b>Tech tools and platforms I've used</b></h2>
                <br />
                <p className='text-gray-500 text-3xl md:text-2xl pt-2'>
                I have experience with HTML, CSS, JavaScript, and TypeScript, and have built a few projects using these technologies. Currently, I'm learning React and Next.js and have started working with these frameworks on personal projects.
                </p>
            </div>
            <div className='grid grid-cols-2 text-accent text-4xl sm:text-100xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">HTML</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Node js</h2>
                </div>
                <div className='space-y-2'>
                    <h2  data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">React js</h2>
                    <h2 data-aos="zoom-in-up">Next js</h2>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
