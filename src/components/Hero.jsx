import React from 'react'

import { bannerImage } from '../data'

const Hero = () => {
  return (
    <div className='grid grid-cols-2 w-full px-20 pt-28 justify-center'>
        <div className=" col-span-2 md:col-span-1 justify-center">
            <p className=" text-accent text-2xl text-center sm:text-left ">Hey!, I'm Sixtus</p>
            <h1 className='text-4xl md:text-6xl text-center sm:text-left font-medium leading-[-40px] my-4'>
                I Build & Design<br/> Web Applications.
            </h1>
            <p className="text-center sm:text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusantium repellendus. </p>
            <button className=' bg-accent hover:bg-accent-hover text-white px-5 py-2 mt-5 flex sm:mx-0 mx-auto mb-10'>Work with me</button>
        </div>

        <div className=" hidden md:flex justify-center">
        <img src={bannerImage} className="w-[50%] "  alt=""  />
        </div>
       
    </div>
  )
} 

export default Hero