import React, { useState } from 'react'
import {
    logoCaption,
    navigation,
    social,
    logo,
    icons,
} from '../data'
import { Link } from 'react-scroll'

const Navbar = () => {

    const [menu, setMenu] = useState(true);

    const toggleMenu = () => {
        setMenu(!menu);
    }


    return (
        <header className='h-[64px] flex justify-between items-center px-10 sm:px-20 bg-slate-900 fixed w-full'>
            {/* Logo */}
            <div className=" text-2xl font-semibold text-[#f2f2f2]">
                <img className='h-[20px]' src={logo} alt="" />
            </div>

            {/* Menu */}

            <ul className='hidden sm:flex gap-5'>
                {navigation.map((data, index) => <li className=" capitalize cursor-pointer" key={index}><Link to='#' className=' text-white hover:text-accent'>{data.name}</Link></li>)}
            </ul>

            {/* Socials */}
            <ul className=' hidden sm:flex gap-5'>
                {social.map((data, index) => <li className=" cursor-pointer text-accent hover:text-white" key={index}><Link to='#'>{data.icon}</Link></li>)}
            </ul>
            <div className="block sm:hidden" onClick={() => toggleMenu()}>
                {menu ? icons.menu : icons.close}
            </div>


            {/* Mobile */}
            <div className={!menu ? "sm:hidden px-10 pt-[28px] w-full h-full bg-accent fixed left-0 top-0 ease-in-out duration-500" : "hidden top-[100%]"}>

                <div className="flex justify-end text-white" onClick={() => toggleMenu()}>
                    {menu ? icons.menu : icons.close}
                </div>
                {/* Menu */}
                <ul className='lex-cols space-y-5 pt-24'>
                    {navigation.map((data, index) => <li className="capitalize cursor-pointer text-center" key={index}><Link to='#' className=' text-white hover:text-accent-hover'>{data.name}</Link></li>)}
                </ul>

            </div>
        </header>
    )
}

export default Navbar