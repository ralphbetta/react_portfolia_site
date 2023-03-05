import React from 'react'
import { services } from '../data'

const Services = () => {

  return (
    <div className=' mt-10 px-[10%] bg-neutral-900 py-8' >
      <h1 className=" text-center text-3xl font-black ">What I do for client</h1>
      <p className=" text-center mx-[15%] mt-5 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea provident fugit sit, itaque commodi vero eius fugiat ullam perspiciatis nam quae odit perferendis quis. Mollitia corporis doloremque molestiae error.</p>

      <div className="grid grid-cols-4 gap-x-5">
        {
        services.map((e, index) => (
          <div className=" bg-slate-800 p-5 rounded-md" key={index}>
            <p className=" text-accent mb-16 text-2xl">{e.icon}</p>
            <h1 className=" text-sm font-semibold">{e.name}</h1>
            <p className="">{e.description}</p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Services