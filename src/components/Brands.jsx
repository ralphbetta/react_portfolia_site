import React from 'react'
import { brands } from '../data'
import { motion } from 'framer-motion'

const Brands = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 bg-slate-800 px-10 justify-center items-center'>
        {brands.map((data,index)=>(
        <motion.div 
        initial={{y: -50}}
        whileInView={{y:0}}
        transition={{
         duration: 1,
         delay: (index*0.05),
        // ease: [0.5, 0.71, 1, 1.5],
        }}
        className={index === 4 ?'flex mx-auto col-span-2 sm:col-span-1 py-2':'flex mx-auto py-2'} key={index}><img src={data.img} alt="" /></motion.div>
        ))}
    </div>
  )
}

export default Brands