import React from 'react'
import { HiOutlineUser } from "react-icons/hi2";

export default function Comment({name , desc , text , customCss}) {
  return (
    <figure className={`w-96 bg-secondary-800 rounded-xl shadow-xl p-5 h-fit max-md:w-full max-sm:text-sm ${customCss}`}>
        <figcaption className='flex items-center gap-x-4'>
            <span className='size-14 rounded-full bg-zinc-100 dark:bg-stone-900 grid place-content-center max-sm:size-12'>
                <HiOutlineUser className='text-primary-500 text-3xl max-sm:text-xl'/>
            </span>
            <span className='flex flex-col'>
                <p className='font-semibold text-primary-800'>{name}</p>
                <p className='text-primary-700'>{desc}</p>
            </span>
        </figcaption>
        <blockquote className='mt-4 text-primary-600 max-sm:mt-2'>{text}</blockquote>
    </figure>
  )
}