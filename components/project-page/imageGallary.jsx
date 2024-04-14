import React, { useState } from 'react'

export default function ImageGallary({images}) {

  const [index , setIndex] = useState(0)

  return (
    <section className='lg:w-[30rem] flex flex-col gap-3'>
        <img className='w-full h-[20rem] rounded-2xl shadow-xl bg-white object-contain' src={images[index]} alt="" />
        <div className='w-full  sm:h-[20rem] grid grid-rows-3 grid-cols-7 gap-3 max-sm:flex max-sm:overflow-auto'>
            <span onClick={() => setIndex(0)} className='cursor-pointer rounded-xl bg-white row-start-1 row-end-2 col-start-1 col-end-5 max-sm:min-w-[10rem] max-sm:h-[5rem] overflow-hidden shadow-sm relative'>
              <span className='w-full h-full bg-neutral-800 absolute top-0 left-0 z-10 bg-opacity-60'></span>
              <img className='w-full h-full object-contain' src={images[0]} alt="" />
            </span>
            <span onClick={() => setIndex(1)} className='cursor-pointer rounded-xl bg-white row-start-1 row-end-2 col-start-5 col-end-8 max-sm:min-w-[10rem] max-sm:h-[5rem] overflow-hidden shadow-sm relative'>
              <span className='w-full h-full bg-neutral-800 absolute top-0 left-0 z-10 bg-opacity-60'></span>
              <img className='w-full h-full object-contain' src={images[1]} alt="" />
            </span>
            <span onClick={() => setIndex(2)} className='cursor-pointer rounded-xl bg-white row-start-2 row-end-3 col-start-1 col-end-3 max-sm:min-w-[10rem] max-sm:h-[5rem] overflow-hidden shadow-sm relative'>
              <span className='w-full h-full bg-neutral-800 absolute top-0 left-0 z-10 bg-opacity-60'></span>
              <img className='w-full h-full object-contain' src={images[2]} alt="" />
            </span>
            <span onClick={() => setIndex(3)} className='cursor-pointer rounded-xl bg-white row-start-2 row-end-3 col-start-3 col-end-6 max-sm:min-w-[10rem] max-sm:h-[5rem] overflow-hidden shadow-sm relative'>
              <span className='w-full h-full bg-neutral-800 absolute top-0 left-0 z-10 bg-opacity-60'></span>
              <img className='w-full h-full object-contain' src={images[3]} alt="" />
            </span>
            <span onClick={() => setIndex(4)} className='cursor-pointer rounded-xl bg-white row-start-2 row-end-3 col-start-6 col-end-8 max-sm:min-w-[10rem] max-sm:h-[5rem] overflow-hidden shadow-sm relative'>
              <span className='w-full h-full bg-neutral-800 absolute top-0 left-0 z-10 bg-opacity-60'></span>
              <img className='w-full h-full object-contain' src={images[4]} alt="" />
            </span>
            <span onClick={() => setIndex(5)} className='cursor-pointer rounded-xl bg-white row-start-3 row-end-4 col-start-1 col-end-4 max-sm:min-w-[10rem] max-sm:h-[5rem] overflow-hidden shadow-sm relative'>
              <span className='w-full h-full bg-neutral-800 absolute top-0 left-0 z-10 bg-opacity-60'></span>
              <img className='w-full h-full object-contain' src={images[5]} alt="" />
            </span>
            <span onClick={() => setIndex(6)} className='cursor-pointer rounded-xl bg-white row-start-3 row-end-4 col-start-4 col-end-8 max-sm:min-w-[10rem] max-sm:h-[5rem] overflow-hidden shadow-sm relative'>
              <span className='w-full h-full bg-neutral-800 absolute top-0 left-0 z-10 bg-opacity-60'></span>
              <img className='w-full h-full object-contain' src={images[6]} alt="" />
            </span>
        </div>
    </section>
  )
}
