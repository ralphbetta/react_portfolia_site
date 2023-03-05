import React from 'react'
import { aboutImage } from '../data'


const About = () => {
    return (
        <div className=' bg-gray-900 md:flex gap-10 p-10'>
            <div className='w-full flex justify-center items-start'>
                <img className=' rounded-2xl h-[75%]' src={aboutImage} alt="" />
            </div>
            <div className='w-full'>
                <h1 className=' font-bold text-3xl mt-5 md:m-0 text-center md:text-left'>Jane Wilson</h1>
                <p className=" text-xl text-accent mb-10 text-center md:text-left">Freelance Web Developer</p>
                <p className=" text-center md:text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, eaque alias. Velit quo aliquid sequi? Porro quis aut dolores, ullam laudantium quae aperiam. Esse cupiditate perspiciatis a ex autem possimus Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur culpa error odio natus. Dicta repudiandae aspernatur delectus explicabo saepe laudantium libero
                </p>
                <button className=' bg-accent hover:bg-accent-hover text-white px-5 py-2 mt-5 flex sm:mx-0 mx-auto mb-10 rounded-md'>Contact me</button>
            </div>
        </div>
    )
}

export default About