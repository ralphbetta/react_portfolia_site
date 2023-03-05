import React from 'react'
import { brands } from '../data'

const Brands = () => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 bg-slate-800 px-10 justify-center items-center'>
        {brands.map((data,index)=>(
        <div className={index === 4 ?'flex mx-auto col-span-2 sm:col-span-1 py-2':'flex mx-auto py-2'} key={index}><img src={data.img} alt="" /></div>
        ))}
    </div>
  )
}

export default Brands