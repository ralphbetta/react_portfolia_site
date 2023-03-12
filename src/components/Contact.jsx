import React from 'react'
import {AiOutlineMail } from 'react-icons/ai'
import {CiLocationOn} from 'react-icons/ci'

function Contact() {
    return (
        <div className=' mt-10 px-[10%] py-8 bg-neutral-900 text-white'>
            <h1 className=" text-center text-2xl md:text-3xl  font-black ">Contact me</h1>
            <p className=" text-center sm:mx-[15%] mt-5 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea provident fugit sit, itaque commodi vero eius fugiat ullam perspiciatis nam quae odit perferendis quis. Mollitia corporis doloremque molestiae error.</p>

            <div className=" w-full sm:flex justify-between">
                <div className="sm:w-[48%] mr-5">
                    <div className=" flex items-start justify-start gap-x-5 mb-5">
                        <AiOutlineMail className='text-accent text-2xl'/>
                        <div className="">
                            <h1 className=" font-semibold text-xl">
                                Have a question?</h1>
                            <p className=" text-[17px] text-slate-500">I am here to help you</p>
                            <p className=" text-accent">Email me at support@sixport.com</p>
                        </div>

                    </div>
                    <div className=" flex items-start justify-start gap-x-5">
                        <CiLocationOn className='text-accent text-2xl'/>
                        <div className="">
                            <h1 className=" font-semibold text-xl">Current Location</h1>
                            <p className=" text-[17px] text-slate-500">Bucharest, Romanians</p>
                            <p className=" text-accent">Serving clients worldwide</p>
                        </div>

                    </div>


                </div>

                <div className="mx-auto w-full mt-5">
                    <div className="flex gap-x-5 mb-5">
                        <input type="text" placeholder='Your name' className=" bg-neutral-800 text-white w-full py-4 rounded px-5"/>
                        <input type="text" placeholder='Your name' className=" bg-neutral-800 text-white w-full py-4 rounded px-5"/>
                    </div>
                    <input type="text" placeholder='Your name' className=" bg-neutral-800 text-white mb-5 w-full py-4 rounded px-5"/>

                    <textarea name="Your message" id="" cols="30" rows="10" className='bg-neutral-800 text-white w-full py-4 rounded px-5 focu' placeholder='Your message'></textarea>
                    <button className=' bg-accent w-full sm:w-[20%] py-3 mt-4 text-center hover:bg-accent-hover text-white  rounded-md'>Send Message</button>


                </div>

            </div>

        </div>
    )
}

export default Contact
