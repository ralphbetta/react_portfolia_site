import React from 'react'
import { skills } from '../data'

const Skills = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 px-10 bg-neutral-900'>
        {
           skills.map((data, index)=>(
            <img key={index} className=' w-full p-4' src={data.image} alt="" />
           )) 
        }
    </div>
  )
}

export default Skills