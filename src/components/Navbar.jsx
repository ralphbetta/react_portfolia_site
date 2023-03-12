import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
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

    let easeing = [0.6, -0.05, 0.01, 0.99];

    const header = {
        initial: {
          y: -60,
          opacity: 0,
          transition: { duration: 0.05, ease: easeing }
        },
        animate: {
          y: 0,
          opacity: 1,
          animation: {
            duration: 0.6,
            ease: easeing
          }
        }
      }

    return (
        <motion.header variants={header}  initial='initial' animate='animate' exit='exit' className='h-[64px] flex justify-between items-center px-10 sm:px-20 bg-slate-900 fixed w-full'>
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
            <motion.div
                // variants={circleVariants}
                // initial='hidden'
                // animate={!menu ? 'visible':''}

                className={!menu ? "sm:hidden px-10 pt-[28px] w-full h-full bg-accent fixed z-50 left-0 top-0 ease-in-out duration-500" : "hidden top-[100%]"}>

                <div className="flex justify-end text-white" onClick={() => toggleMenu()}>
                    {menu ? icons.menu : icons.close}
                </div>
                {/* Menu */}
                <ul className='lex-cols space-y-5 pt-24'>
                    {navigation.map((data, index) => <li className="capitalize cursor-pointer text-center" key={index}>
                        <Link
                            to={data.href}
                            activeClass='active'
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className='
                          transition-all duration-300
                          text-white hover:text-accent-hover'>{data.name}</Link>
                    </li>)}
                </ul>

            </motion.div>
        </motion.header>
    )
}

export default Navbar