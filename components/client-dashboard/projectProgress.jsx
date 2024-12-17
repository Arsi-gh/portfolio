import React from 'react'
import { FaChartPie } from "react-icons/fa6";

export default function ProjectProgress() {
  return (
    <section className='p-4 border rounded-xl flex justify-between items-center text-secondary-200 relative'>
        <div className='space-y-1'>
            <h4 className='font-semibold text-lg mb-6 flex gap-x-2 items-center text-secondary-300'><FaChartPie className='text-2xl'/>Project progress : </h4>
            <p>Duration : 30 days</p>
            <p className='max-w-52'>Deadline : 21 August 2024</p>
        </div>
        <ProgressCircle/>
    </section>
  )
}

const ProgressCircle = () => {
    return (
        <div className='size-28 relative'>
            <svg className='absolute left-0 rotate-[85deg] bottom-0 w-full h-full z-30' xmlns="http://www.w3.org/2000/svg" version="1.1" width="70px" height="70px">
                <defs>
                   <linearGradient id="GradientColor">
                      <stop offset="0%" stopColor="#e91e63" />
                      <stop offset="100%" stopColor="#673ab7" />
                   </linearGradient>
                </defs>
                <circle className='progress-circle stroke-green-500 dark:stroke-green-600' cx="55" cy="55" r="45" strokeLinecap="round" />
            </svg>
            <svg className='absolute left-0 rotate-[85deg] bottom-0 w-full h-full' xmlns="http://www.w3.org/2000/svg" version="1.1" width="70px" height="70px">
                <defs>
                   <linearGradient id="GradientColor">
                      <stop offset="0%" stopColor="#e91e63" />
                      <stop offset="100%" stopColor="#673ab7" />
                   </linearGradient>
                </defs>
                <circle className='bg-progress-circle stroke-primary-200' cx="55" cy="55" r="45" strokeLinecap="round" />
            </svg>
            <b className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl'>70</b>
        </div>
    )
}
