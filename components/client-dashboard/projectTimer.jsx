import React from 'react'

export default function ProjectTimer() {
  return (
    <div className='flex justify-center items-center gap-x-2 p-4 border rounded-2xl w-96 text-secondary-300'>
        <span className='text-center'>
            <b className='text-7xl'>23</b>
            <p className='text-secondary-400 mt-2 font-semibold'>Days</p>
        </span>
        <b className='text-3xl mx-1'>:</b>
        <span className='text-center'>
            <b className='text-7xl'>03</b>
            <p className='text-secondary-400 mt-2 font-semibold'>Hours</p>
        </span>
        <b className='text-3xl mx-1'>:</b>
        <span className='text-center'>
            <b className='text-7xl'>15</b>
            <p className='text-secondary-400 mt-2 font-semibold'>Minutes</p>
        </span>
    </div>
  )
}
