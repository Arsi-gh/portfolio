import React from 'react'

export default function TechElem ({text , children , customClass}) {
    return (
        <div className={`cursor-default p-2 px-3  mb-2 h-fit rounded-lg flex items-center gap-x-2 bg-white border border-zinc-100 text-neutral-800 text-lg shadow-lg ${customClass}`}>
            {children}
            <span className={`${customClass ? 'h-5' : 'h-7'} w-[1px] bg-zinc-300`}></span>
            <p className='font-semibold'>{text}</p>
        </div>
    )
}
