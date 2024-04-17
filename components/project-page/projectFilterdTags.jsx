import React from 'react'
import { HiOutlineTrash } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";


export default function ProjectFilterdTags() {
  return (
    <>
    <div className="p-2 flex flex-wrap gap-2 items-center">
        <TagItem text="Gsap"/>
        <TagItem text="Tailwind"/>
        <TagItem text="React"/>
        <TagItem text="Three.js"/>
    </div>
    <button className='p-3 w-full text-red-500 font-semibold flex justify-between items-center border-t hover:bg-zinc-50'>Remove tags<HiOutlineTrash className='text-2xl'/></button>
    </>
  )
}

const TagItem = ({text}) => {
    return (
        <span className="p-1 px-3 rounded-full bg-zinc-100 border flex items-center gap-x-1">{text}<HiOutlineXMark className='cursor-pointer text-xl text-zinc-600'/></span>
    )
}