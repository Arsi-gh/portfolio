import Image from 'next/image'
import React, { useState } from 'react'

export default function ImageGallary({images}) {

  const [index , setIndex] = useState(0)

  const classes = [
    "row-start-1 row-end-2 col-start-1 col-end-5",
    "row-start-1 row-end-2 col-start-5 col-end-8",
    "row-start-2 row-end-3 col-start-1 col-end-3",
    "row-start-2 row-end-3 col-start-3 col-end-6",
    "row-start-2 row-end-3 col-start-6 col-end-8",
    "row-start-3 row-end-4 col-start-1 col-end-4",
    "row-start-3 row-end-4 col-start-4 col-end-8",
  ]

  if (images) return (
    <section className='lg:w-[30rem] flex flex-col gap-3'>
        <Image width={500} height={500} className='w-full h-[20rem] rounded-2xl shadow-xl bg-white object-contain' src={images[index]} alt="" />
        <div className='w-full  sm:h-[20rem] grid grid-rows-3 grid-cols-7 gap-3 max-sm:flex max-sm:overflow-auto'>
            {images.map((img , index) => <ImgItem key={index} setIndex={setIndex} img={img} index={index} customClass={classes[index]}/>)}
        </div>
    </section>
  )
}

const ImgItem = ({index , img , customClass , setIndex}) => {
  return (
    <span onClick={() => setIndex(index)} className={`cursor-pointer ${customClass} rounded-xl bg-white max-sm:min-w-[10rem] max-sm:h-[5rem] overflow-hidden shadow-sm relative`}>
      <span className='w-full h-full bg-neutral-800 absolute top-0 left-0 z-10 bg-opacity-60'></span>
      <Image width={400} height={400} className='w-full h-full object-contain' src={img} alt="img-gallary" />
    </span>
  )
}