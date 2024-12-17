import React from 'react'

export default function ProjectInfo() {
  return (
    <div className='p-3 border rounded-2xl text-secondary-300 w-96 space-y-2'>
        <p className='font-semibold'>Project Title </p>
       <span className='w-full inline-block border-t border-primary-300'></span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure in reprehenderit officia inventore</p>
       <span className='w-full inline-block border-t border-primary-300'></span>
        <p className='flex gap-x-3 items-center font-semibold'>Project price : <span className='h-[1px] flex-1 '></span> <b className='text-green-500 font-bold text-xl'>300 $</b></p>
        <p className='flex gap-x-3 items-center font-semibold'>Start date : <span className='h-[1px] flex-1 '></span> <b className='font-semibold'>7  july  2024</b></p>
        <p className='flex gap-x-3 items-center font-semibold'>Duration : <span className='h-[1px] flex-1 '></span> <b className='font-semibold text-lg'>30 days</b></p>
    </div>
  )
}
