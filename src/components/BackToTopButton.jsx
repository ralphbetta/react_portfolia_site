import React, { useEffect, useState } from 'react'

import { animateScroll as scroll } from 'react-scroll'

import { AiOutlineArrowUp } from 'react-icons/ai'

const BackToTopButton = () => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.screenY);

            return window.pageYOffset > 600 ? setShow(true) : setShow(false);

          

        });
    });

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return show ?(<button onClick={()=>scrollToTop()}
    className=' text-white rounded-full bg-accent w-12 h-12 hover:bg-accent-hover fixed right-12 bottom-12 cursor-pointer flex justify-center items-center transition-all'>
         <AiOutlineArrowUp className='w-6 h-6' />
        </button>):(<div></div>)
}

export default BackToTopButton