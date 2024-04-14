import Link from 'next/link'
import React from 'react'

export default function ProjectCard({id , title , desc , images}) {
  return (
    <Link href={`/projects/${id}`} className='bg-white border border-zinc-300 rounded-lg h-80 overflow-hidden cursor-pointer transition-all hover:shadow-lg'>
      <div className='relative'>
        <img className='bg-neutral-700 w-full h-60 object-cover' src={images[0]} alt="project-img" />
        <span className='w-full h-full bg-black bg-opacity-10 absolute top-0 left-0'></span>
      </div>
        <div className='p-3 bg-zinc-50'>
            <p className='font-semibold'>{title}</p>
            <span className='mt-2 flex gap-3'>
                <p className='truncate'>{desc}</p>
            </span>
        </div>
    </Link>
  )
}
