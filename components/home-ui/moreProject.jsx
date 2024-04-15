import { useRouter } from 'next/navigation'
import React from 'react'

export default function MoreProject() {

  const router = useRouter()  

  return (
    <div onClick={() => router.push('/projects')} href="/projects" className='cursor-pointer flex items-center my-28 max-w-[1100px] bg-gradient-to-b from-neutral-800 to-neutral-600 mx-auto h-[10rem] p-5 text-white rounded-2xl shadow-lg relative'>
        <strong className='text-5xl font-thin'>Click to see more projects</strong>
        <img className='size-[32rem] absolute -right-20 -top-[12rem] drop-shadow-2xl' src='/images/models/mac.png' alt='mac-model'/>
    </div>
  )
}