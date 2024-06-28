import { useRouter } from 'next/navigation'
import React from 'react'

export default function MoreProject() {

  const router = useRouter()  

  return (
    <div onClick={() => router.push('/projects')} href="/projects" className='cursor-pointer flex items-center my-28 max-md:mt-44 max-w-[1100px] max-xl:max-w-[95%] bg-gradient-to-b from-neutral-800 to-neutral-600 mx-auto h-[10rem] p-5 text-white rounded-2xl shadow-lg relative max-md:justify-center'>
        <strong className='text-5xl font-thin max-md:mt-12 max-sm:text-3xl max-[400px]:text-xl'>Click to see more projects</strong>
        <img loading='lazy' className='size-[32rem] max-md:size-72 absolute md:-right-20 md:-top-[12rem] max-md:-top-40 max-md:left-1/2 max-md:-translate-x-1/2 drop-shadow-2xl' src='/images/models/mac.png' alt='mac-model'/>
    </div>
  )
}