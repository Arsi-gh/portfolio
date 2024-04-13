import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import Project from './project';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaChevronRight , FaChevronLeft} from 'react-icons/fa';
import { useRefs } from '@/context/refsProvider';
import Title from '@/components/global/title';

export default function ProjectWrapper() {

  const swiperRef = useRef();
  const projectsRef = useRefs().projectsRef


  return (
    <>
    <Title text="Latest projects" ref={projectsRef}/>
    <div className='mt-12 max-w-screen-xl mx-auto'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={3}
        breakpoints= {{
          100 : {
            slidesPerView : 3
          },
          800 : {
            slidesPerView: 5,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide> <Project/> </SwiperSlide>
        <SwiperSlide> <Project/> </SwiperSlide>
        <SwiperSlide> <Project/> </SwiperSlide>
        <SwiperSlide> <Project/> </SwiperSlide>
        <SwiperSlide> <Project/> </SwiperSlide>
        <SwiperSlide> <Project/> </SwiperSlide>
        <SwiperSlide> <Project/> </SwiperSlide>
      </Swiper>
    </div>
    <div className='flex w-fit mx-auto mb-24 gap-1'>
      <button onClick={() => swiperRef.current.slidePrev()} className='slide-button-next p-3 rounded-full bg-white border border-zinc-200 shadow-xl text-neutral-600 cursor-pointer'><FaChevronLeft className='text-xl'/></button>
      <button onClick={() => swiperRef.current.slideNext()} className='slide-button-prev p-3 rounded-full bg-white border border-zinc-200 shadow-xl text-neutral-600 cursor-pointer'><FaChevronRight className='text-xl'/></button>
    </div>
    </>
  )
}