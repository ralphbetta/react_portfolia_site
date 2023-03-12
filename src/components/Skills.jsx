import React from 'react'
import { skills } from '../data'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 px-10 bg-neutral-900'>
        {
           skills.map((data, index)=>(
           <motion.div 
           initial={{scale:0}}
           whileInView={{scale:1}}
           transition={{
            duration: 1,
            delay: (index*0.1),
            ease: [0.5, 0.71, 1, 1.5],
           }}
           >
             <img key={index} className=' w-full p-4' src={data.image} alt="" />
           </motion.div>
           )) 
        }
    </div>
  )
}

export default Skills