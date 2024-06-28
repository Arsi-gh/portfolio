import Link from 'next/link'
import React from 'react'
import { typeIcons } from './projectIcons'

export default function ProjectCard({id , types , title , desc , images}) {
  return (
    <Link href={`/projects/${id}`} className='bg-secondary-800 border border-primary-200 rounded-lg sm:h-80 overflow-hidden cursor-pointer transition-all sm:hover:shadow-lg max-sm:shadow-xl'>
        <div className='relative'>
          <img className='bg-neutral-700 w-full sm:h-60 object-cover min-h-32 border-b' src={images[0]} alt="project-img" />
          <span className='w-full h-full absolute top-0 left-0 dark:bg-neutral-800 dark:bg-opacity-40'></span>
        </div>
        <div className='p-3 bg-secondary-800 max-sm:text-sm text-primary-800'>
            <p className='font-semibold flex justify-between gap-x-2'>{title}<span className='flex gap-x-2'>{types.map(type => typeIcons[type])}</span></p>
            <span className='mt-2 flex gap-3'>
                <p className='truncate'>{desc}</p>
            </span>
        </div>
    </Link>
  )
}

