import React from 'react'

export default function Start() {
  return (
    <div className='w-full bg-zinc-50 py-12 bg-opacity-90'>
        <section className='pattern 2x:max-w-screen-2xl max-w-screen-xl mx-auto p-4 flex items-center gap-4'>
            <ImageAnimation/>
        </section>
    </div>
  )
}

const ImageAnimation = () => {

    const data = "Arsalan ghoochani - Web Developer - UiUx Designer -"

    return (
        <section className='relative w-80 h-80 rounded-full  flex justify-center items-center'>
            <div className='absolute w-64 h-64 bg-neutral-700 shadow-2xl rounded-full'></div>
            <div className='absolute text w-full h-full outline outline-2 outline-offset-4 outline-neutral-200 rounded-full'>
                <p className='text-xl'>
                    {data.split("").map((char , i) => <span className='absolute left-1/2 ' style={{transform : `rotate(${i * 7}deg)` , transformOrigin : '0 160px'}}>{char}</span>) }
                </p>
            </div>
        </section>
    )
}