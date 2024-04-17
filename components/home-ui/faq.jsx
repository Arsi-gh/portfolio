import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

export default function Faq() {
  return (
    <>
    <h3 className='title'>FAQ</h3>
    <section className='2xl:max-w-screen-2xl max-w-screen-xl mx-auto flex flex-col gap-4 my-12 items-center text-neutral-700 max-md:px-4'>
        <Accordion/>
        <Accordion/>
        <Accordion/>
    </section>
    </>
  )
}

const Accordion = () => {

    const [displayAnswer , setDisplayAnswer] = useState(false)

    return (
        <div onClick={() => setDisplayAnswer(!displayAnswer)} className='rounded-2xl cursor-pointer bg-white w-[45rem] flex flex-col h-fit gap-y-2 p-5 border-2 border-zinc-200 shadow-xl transition-all max-md:w-full'>
            <span className='flex justify-between items-center'>
                <p className='font-semibold text-lg max-sm:text-base'>Lorem ipsum dolor sit amet consectetur adipisicin ?</p>
                <FiChevronDown className={`text-3xl  transition-all ${displayAnswer ? 'rotate-180' : 'rotate-0'}`}/>
            </span>
            <span className={`w-full h-[1px] bg-zinc-300 transition-all ${!displayAnswer && 'hidden'}`}></span>
            <p className={`transition-all max-sm:text-sm ${!displayAnswer && 'hidden'}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ducimus ad esse unde consequatur modi sed quidem. Quis, voluptas. Architecto excepturi explicabo eligendi veniam alias soluta quam tempora? Ut, culpa.</p>
        </div>
    )
}