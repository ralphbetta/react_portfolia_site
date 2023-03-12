import React from 'react'

import { bannerImage } from '../data'
import { motion } from 'framer-motion';

const Hero = () => {

  let easeing = [0.6, -0.05, 0.01, 0.99];

  const childrenStagger = {
    initial: { x: "-10rem" },
    animate: {
      x: 0,
      transition:
      {
        staggerChildren: 0.05,
        ease: "easeInOut",
        duration: 1
      },
    }
  }

  
  const stagger = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  }

  const fadeInUp = {
    initial: {
      y: -60,
      opacity: 0,
      transition: {
        duration: 0.6, ease: easeing
      }
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: easeing
      }
    }
  };

  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const firstName = {
    initial: {
      y: -20,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.04,
        staggerDirection: -1
      }
    }
  }

  const lastName = {
    initial: {
      y: -20,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.04,
        staggerDirection: 1
      }
    }
  }

  const letter = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: { duration: 1, ...transition }
    }
  };

  const btnGroup = {
    initial: {
      y: -60,
      opacity: 0,
      transition: { duration: 0.6, ease: easeing }
    },
    animate: {
      y: 0,
      opacity: 1,
      animation: {
        duration: 0.6,
        ease: easeing
      }
    }
  };
  const star = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 0.8, ease: easeing }
    },
    animate: {
      y: 0,
      opacity: 1,
      animation: {
        duration: 0.6,
        ease: easeing
      }
    }
  };

  const header = {
    initial: {
      y: -60,
      opacity: 0,
      transition: { duration: 0.1, ease: easeing }
    },
    animate: {
      y: 0,
      opacity: 1,
      animation: {
        duration: 0.6,
        ease: easeing
      }
    }
  };


  return (
    <motion.div className='grid grid-cols-2 w-full px-10 sm:px-20 pt-28 justify-center' initial='initial' animate='animate' exit='exit'>
      <motion.div variants={star} className="col-span-2 md:col-span-1 justify-center">
        <p className=" text-accent text-2xl text-center sm:text-left ">Hey!, I'm Sixtus</p>
        <motion.h1 className='text-3xl md:text-6xl text-center sm:text-left font-medium leading-[-40px] my-4'>
          I Build & Design<br /> Web Applications.
        </motion.h1>
        <p className="text-center sm:text-left ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusantium repellendus. </p>
        <button className=' bg-accent hover:bg-accent-hover text-white px-5 py-2 mt-5 flex sm:mx-0 mx-auto mb-10'>Work with me</button>
      </motion.div>

      <div className=" hidden md:flex justify-center">
        <motion.img src={bannerImage} className="w-[50%] " alt="" initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: .5, delay: 0.8 }} />
      </div>

    </motion.div>
  )
}

export default Hero