import React from 'react'
import { testimonials } from '../data'
import { GiPlainCircle } from 'react-icons/gi'

const Testimony = () => {
    return (
        <div className=' mt-10 px-[10%] md:px-[15%] py-8' >
            <h1 className=" text-center text-2xl md:text-3xl  font-black ">What other people say</h1>
            <p className=" text-center sm:mx-[15%] mt-5 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea provident fugit sit, itaque commodi vero eius fugiat ullam perspiciatis nam quae odit perferendis quis. Mollitia corporis doloremque molestiae error.</p>

            <div className=" flex gap-x-10">

                <div className="grid md:grid-cols-3 gap-x-5 sm:w-[80%]">

                    <div className='overflow-hidden flex justify-center items-start mb-2'>
                        <img className=' md:w-[70%] h-full flex mx-auto rounded-r-lg' src={testimonials[0].authorImg} alt="" />
                    </div>

                    <div className=' col-span-2 sm:mr-10'>
                        <h1 className="text-sm ">{testimonials[0].authorText}</h1>
                        <p className=" mt-10 text-accent">{testimonials[0].authorName}</p>
                        <p className="">{testimonials[0].authorPosition}</p>
                    </div>
                </div>



     

            </div>
            <div className='flex justify-center items-center gap-x-3 mt-5'>
                {testimonials.map((e, index) => (
                    <p className=" text-amber-700 text-[10px]" key={index}><GiPlainCircle /></p>
                ))}
            </div>
        </div>
    )
}

export default Testimony