import React from 'react'
import { social } from '../data'



const Footer = () => {
  return (
    <div>
        <div className="flex justify-center gap-5 mt-10">
            { social.map((e, index) => (
              <p className='text-accent' key={index}>{e.icon}</p>
            ))}
        </div>
        <h1 className=" font-semibold text-xl text-center mt-5">Current Location</h1>
        <p className="text-center mt-4 pb-4"> &#169; 2022 My Potfolio. All rights reserved</p>
    </div>
  )
}

export default Footer