import React, {useEffect, useState } from 'react'
import { testimonials } from '../data'
import { GiPlainCircle } from 'react-icons/gi'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Reference
// https://swiperjs.com/react

import { Autoplay, Pagination  } from 'swiper'

const Testimony = () => {

    const swiper = useSwiper();

    const [activeIndex, setActiveIndex] = useState(0)


    const onSwipChange =index=>{
        setActiveIndex(index);

        
    }

    const onNext = () =>{
        swiper.slideNext();
    }

    useEffect(() => {
        const stylesheet = document.styleSheets[0];
        stylesheet.insertRule(".swiper-pagination-bullet-active { background: #0f172a !important;}", 0); 
        stylesheet.insertRule(".swiper-pagination-bullet { background: #0f172a !important;}", 0);   

        // .swiper-pagination-bullet {
        //     background-color: blue;
        //     width: 5rem;
        //     height: 1rem;
        //     border-radius: .5rem;
        //   }
        
        
      }, []);

    return (
        <div className='mx-[10%] mt-5 relative -z-4'>
        <Swiper
      navigation={true}
      direction={"horizontal"}
      centeredSlides={true}
      spaceBetween={150}
      slidesPerView={1}
      onSlideChange={(pen) => onSwipChange(pen.activeIndex)}
      onSwiper={(swiper) => console.log(swiper)}
      pagination = {{clickable: true}}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination]}
      className='mySwiper'
    >

      {testimonials.map((item, index)=>(
         <SwiperSlide className='' key={index}>
                <div className="grid md:grid-cols-3 gap-x-5 sm:w-[80%]">

                    <div className='overflow-hidden flex justify-center items-start'>
                        <img className=' md:w-[70%] h-full flex mx-auto rounded-r-lg' src={item.authorImg} alt="" />
                    </div>

                    <div className=' col-span-2 sm:mr-10'>
                        <h1 className="text-sm ">{item.authorText}</h1>
                        <p className=" mt-5 text-accent">{item.authorName}</p>
                        <p className="">{item.authorPosition}</p>
                    </div>
                </div>
         </SwiperSlide>
         )
      )}

    </Swiper>

    <div className='flex justify-center items-center gap-x-3 mt-5'>
                {testimonials.map((e, index) => (
                    <p className={activeIndex == index? " text-amber-700 text-[10px]":" text-gray-700 text-[10px]"} key={index}><GiPlainCircle /></p>
                ))}
    </div>
        </div>
        // <div className=' mt-10 px-[10%] md:px-[15%] py-8' >
        //     <h1 className=" text-center text-2xl md:text-3xl  font-black ">What other people say</h1>
        //     <p className=" text-center sm:mx-[15%] mt-5 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ea provident fugit sit, itaque commodi vero eius fugiat ullam perspiciatis nam quae odit perferendis quis. Mollitia corporis doloremque molestiae error.</p>

        //     <div className=" flex gap-x-10">

        //         <div className="grid md:grid-cols-3 gap-x-5 sm:w-[80%]">

        //             <div className='overflow-hidden flex justify-center items-start mb-2'>
        //                 <img className=' md:w-[70%] h-full flex mx-auto rounded-r-lg' src={testimonials[0].authorImg} alt="" />
        //             </div>

        //             <div className=' col-span-2 sm:mr-10'>
        //                 <h1 className="text-sm ">{testimonials[0].authorText}</h1>
        //                 <p className=" mt-10 text-accent">{testimonials[0].authorName}</p>
        //                 <p className="">{testimonials[0].authorPosition}</p>
        //             </div>
        //         </div>
        //     </div>
            // <div className='flex justify-center items-center gap-x-3 mt-5'>
            //     {testimonials.map((e, index) => (
            //         <p className=" text-amber-700 text-[10px]" key={index}><GiPlainCircle /></p>
            //     ))}
            // </div>
        // </div>
      
    )
}

export default Testimony