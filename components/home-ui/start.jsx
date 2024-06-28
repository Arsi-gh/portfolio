import React from 'react'
import Tech from './tech/Tech'

export default function Start() {
  return (
    <div className='max-w-screen-2xl mx-auto md:mt-28 mt-12 md:mb-12 py-12 overflow-hidden relative'>
        <ImageAnimation/>
        <Tech/>
    </div>
  )
}

const ImageAnimation = () => {

    const data = "Arsalan ghoochani - Web Developer - UiUx Designer -"

    return (
        <section className='absolute left-1/2 transform -translate-x-1/2 bottom-16 z-20 bg-white size-80 rounded-full flex justify-center items-center max-[400px]:scale-75 max-[300px]:scale-50'>
            <div className='absolute size-96 bg-neutral-700 shadow-xl rounded-full'></div>
            <div className='absolute text w-full h-full outline outline-2 outline-offset-4 outline-neutral-200 rounded-full'>
                <p className='text-xl text-zinc-100'>
                    {data.split("").map((char , i) => <span key={i} className='absolute left-1/2 ' style={{transform : `rotate(${i * 7}deg)` , transformOrigin : '0 160px'}}>{char}</span>) }
                </p>
            </div>
        </section>
    )
}

