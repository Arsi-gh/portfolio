import React from 'react'
import { FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export default function Project({id , title , images , desc}) {
  return (
    <div className='mb-12 w-[23rem] h-[30rem] max-sm:w-[20rem] max-sm:h-[28rem] max-[400px]:w-[15rem] max-[400px]:h-[22rem] rounded-2xl bg-white shadow-2xl overflow-hidden text-neutral-700 relative max-sm:text-sm'>
        <Image width={500} height={500} className='w-full h-60 object-contain bg-white rounded-t-2xl border-b border-zinc-300' src={images[0]} alt="project-image" />
        <p className='mt-2 text-lg font-semibold p-2 px-4 max-sm:text-sm max-[400px]:px-2'>{title}</p>
        <p className='px-4 line-clamp-5 max-sm:line-clamp-1'>{desc}</p>
        <Link href={`/projects/${id}`} className='p-3 w-full flex items-center justify-center underline gap-2 '>See more about the project<FaChevronRight/></Link>
    </div>
  )
}