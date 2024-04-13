import React from 'react'
import { HiOutlineUser } from "react-icons/hi2";

export default function Comment({name , desc , text}) {
  return (
    <figure className='w-96 bg-white rounded-xl shadow-xl p-5 h-fit max-md:w-full max-sm:text-sm'>
        <figcaption className='flex items-center gap-x-4'>
            <span className='size-14 rounded-full bg-zinc-100 grid place-content-center max-sm:size-12'>
                <HiOutlineUser className='text-neutral-700 text-3xl max-sm:text-xl'/>
            </span>
            <span className='flex flex-col'>
                <p className='font-semibold text-neutral-800'>{name}</p>
                <p className='text-neutral-700'>{desc}</p>
            </span>
        </figcaption>
        <blockquote className='mt-4 text-neutral-600 max-sm:mt-2'>{text}</blockquote>
    </figure>
  )
}