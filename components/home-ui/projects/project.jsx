import React from 'react'
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

export default function Project({id , title , images , desc}) {
  return (
    <div className='mb-12 w-[23rem] h-[30rem] max-sm:w-[20rem] max-sm:h-[28rem] max-[400px]:w-[15rem] max-[400px]:h-[22rem] rounded-2xl bg-white dark:bg-gradient-to-b dark:from-neutral-700 dark:to-neutral-800 shadow-xl overflow-hidden text-primary-700 relative max-sm:text-sm'>
        <div className='w-full h-60 relative grid place-content-center'>
          <img loading='lazy' clasName='w-full h-full object-contain bg-secondary-800 rounded-t-2xl border-b border-zinc-300' src={images[0]} alt="project-image" />
          <span className='hidden dark:block w-full h-full bg-neutral-800 bg-opacity-30 absolute top-0'></span>
        </div>
        <p className='sm:mt-2 text-lg font-semibold p-2 px-4 max-sm:text-sm  max-sm:truncate'>{title}</p>
        <p className='px-4 line-clamp-5 max-sm:line-clamp-1 text-primary-600'>{desc}</p>
        <Link href={`/projects/${id}`} className='p-3 w-full flex items-center justify-center underline gap-2 '>See more about the project<FaChevronRight/></Link>
    </div>
  )
}