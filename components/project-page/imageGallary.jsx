import React from 'react'

export default function ImageGallary() {
  return (
    <section className='w-full  flex gap-3 h-[30rem]'>
        <div className='w-1/2 h-full rounded-2xl shadow-xl bg-neutral-700' src="" alt="" ></div>
        <div className='w-1/2  h-full grid grid-rows-3 grid-cols-7 gap-3'>
            <span className='rounded-xl bg-neutral-700 row-start-1 row-end-2 col-start-1 col-end-5'></span>
            <span className='rounded-xl bg-neutral-700 row-start-1 row-end-2 col-start-5 col-end-8'></span>
            <span className='rounded-xl bg-neutral-700 row-start-2 row-end-3 col-start-1 col-end-3'></span>
            <span className='rounded-xl bg-neutral-700 row-start-2 row-end-3 col-start-3 col-end-6'></span>
            <span className='rounded-xl bg-neutral-700 row-start-2 row-end-3 col-start-6 col-end-8'></span>
            <span className='rounded-xl bg-neutral-700 row-start-3 row-end-4 col-start-1 col-end-4'></span>
            <span className='rounded-xl bg-neutral-700 row-start-3 row-end-4 col-start-4 col-end-8'></span>
        </div>
    </section>
  )
}
