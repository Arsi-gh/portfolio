import Link from 'next/link'
import React from 'react'
import { typeIcons } from './projectIcons'
import Image from 'next/image'

export default function ProjectCard({id , types , title , desc , images}) {
  return (
    <Link href={`/projects/${id}`} className='bg-white border border-zinc-300 rounded-lg sm:h-80 overflow-hidden cursor-pointer transition-all sm:hover:shadow-lg max-sm:shadow-xl'>
      <div className='relative'>
        <Image width={500} height={300} className='bg-neutral-700 w-full sm:h-60 object-cover min-h-32' src={images[0]} alt="project-img" />
        <span className='w-full h-full bg-black bg-opacity-10 absolute top-0 left-0'></span>
      </div>
        <div className='p-3 bg-zinc-50 max-sm:text-sm'>
            <p className='font-semibold flex justify-between gap-x-2'>{title}<span className='flex gap-x-2 text-neutral-800'>{types.map(type => typeIcons[type])}</span></p>
            <span className='mt-2 flex gap-3'>
                <p className='truncate'>{desc}</p>
            </span>
        </div>
    </Link>
  )
}
