import React from 'react'
import Heading from './Heading'
import Card from './Card'
const data = [
    {
        id:0,
        title:"Static Interactive Resume",
        desc:"An Interactive Resume ,build with HTML,CSS which is based on Typescript that allows user to display their Skills",
        img:"/image2.png",
        tags: ["HTML","Node","CSS","Typescript"],
    },
    {
        id:1,
        title:"Dynamic Resume Builder",
        desc:"A Dynamic Resume Builder, built with HTML, CSS, based on TypeScript, allowing users to input credentials and generate a Resume.",
        img:"/image3.png",
        tags: ["HTML","Node","CSS","Typescript"] ,
    }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) =>(<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
