import React from 'react'

export default function SkillChart() {
  return (
    <div className='w-96 h-96 my-12 relative max-sm:scale-[90%] max-[400px]:scale-[80%] max-[350px]:scale-[70%] max-[300px]:scale-[60%]'>
        <svg className='absolute left-0 bottom-0 w-full h-full bg-secondary-700 backdrop-blur-3xl bg-opacity-80 shadow-2xl rounded-full rotate-90' xmlns="http://www.w3.org/2000/svg" version="1.1" width="70px" height="70px">
         <defs>
            <linearGradient id="GradientColor">
               <stop offset="0%" stopColor="#e91e63" />
               <stop offset="100%" stopColor="#673ab7" />
            </linearGradient>
         </defs>
         <circle className='stroke-primary-700' cx="190" cy="190" r="140" strokeLinecap="round" />
         <circle className='stroke-primary-700' cx="190" cy="190" r="117" strokeLinecap="round" />
         <circle className='stroke-primary-700' cx="190" cy="190" r="94" strokeLinecap="round" />
         <circle className='stroke-primary-700' cx="190" cy="190" r="71" strokeLinecap="round" />
         <circle className='stroke-primary-700' cx="190" cy="190" r="48" strokeLinecap="round" />
         <circle className='stroke-primary-700' cx="190" cy="190" r="25" strokeLinecap="round" />
        </svg>
        <div className='absolute bottom-10 font-semibold right-[90px]'>
          <p>Js</p>
          <p>Next js</p>
          <p>Tailwind css</p>
          <p>CSS</p>
          <p>HTML</p>
          <p>React</p>
        </div>
    </div>
  )
}
