import React from 'react'
import { CgFormatLeft } from 'react-icons/cg'
import { SiReact, SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaChevronRight } from 'react-icons/fa';

export default function Project() {
  return (
    <div className='mb-12 w-[23rem] h-[30rem] max-sm:w-[20rem] max-sm:h-[28rem] max-[400px]:w-[15rem] max-[400px]:h-[22rem] rounded-2xl bg-white shadow-xl  text-neutral-700 relative max-sm:text-sm'>
        <img className='w-full h-60 object-cover bg-neutral-700 rounded-t-2xl' src="" alt="" />
        <p className='text-lg font-semibold p-2 px-4 max-sm:text-sm max-[400px]:px-2'>Mobile Coffee website redesign</p>
        <p className='text-lg font-semibold px-4 max-sm:text-sm max-[400px]:px-2'>Technologies : </p>
        <div className='flex flex-wrap gap-2 p-2 px-4 max-[400px]:hidden'>
            <TechItem text="Next js"><TbBrandNextjs className='text-xl max-sm:text-sm'/></TechItem>
            <TechItem text="Tailwind css"><SiTailwindcss className='text-xl max-sm:text-sm'/></TechItem>
            <TechItem text="React"><SiReact className='text-xl max-sm:text-sm'/></TechItem>
            <TechItem text="React hook form"><CgFormatLeft className='text-xl max-sm:text-sm'/></TechItem>
        </div>
        <button className='p-3 w-full flex items-center justify-center gap-2 underline'>See project online <FaChevronRight/></button>
    </div>
  )
}

const TechItem = ({children , text}) => {
    return (
        <span className='flex gap-2 p-2 items-center rounded-lg shadow-md border border-zinc-200 bg-white'>
            {children}
            <span className='w-[1px] h-5 bg-zinc-300'></span>
            <p>{text}</p>
        </span>
    )
}