import React from 'react'
import { FaRegImage } from "react-icons/fa6";

export default function ProjectPreview() {
  return (
    <div className='text-secondary-300 border font-semibold rounded-xl p-3 size-96 min-h-96 overflow-hidden relative'>
      <p className='flex gap-x-2 items-center'><FaRegImage className='text-xl'/>ProjectPreview</p>
      <img className='w-full h-full mt-3 bg-zinc-100 rounded-t-2xl object-contain' src="/images/projects/real-estate/1.jpg" alt="" />
    </div>
  )
}
