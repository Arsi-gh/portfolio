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
        <img loading='lazy' className='w-full h-[20rem] rounded-2xl shadow-xl bg-secondary-900 dark:bg-secondary-700 object-contain' src={images[index]} alt="" />
        <div className='w-full sm:h-80 grid grid-rows-3 grid-cols-7 gap-3 max-sm:flex max-sm:overflow-auto max-sm:p-1'>
            {images.map((img , imgIndex) => <ImgItem key={imgIndex} currentIndex={index} setIndex={setIndex} img={img} index={imgIndex} customClass={classes[imgIndex]}/>)}
        </div>
    </section>
  )
}

const ImgItem = ({index , currentIndex , img , customClass , setIndex}) => {
  return (
    <span onClick={() => setIndex(index)} className={`cursor-pointer ${customClass} rounded-xl bg-white max-sm:min-w-[10rem] max-sm:h-[5rem] overflow-hidden shadow-sm relative outline-offset-2 outline-primary-600 ${currentIndex == index && 'outline outline-2'}`}>
      <span className='w-full h-full bg-neutral-800 absolute top-0 left-0 z-10 bg-opacity-30'></span>
      <img loading='lazy' className='w-full h-full object-contain' src={img} alt="img-gallary" />
    </span>
  )
}