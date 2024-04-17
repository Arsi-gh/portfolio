import React from 'react'
import { EngFlag, FaFlag } from './flags'

export default function LngSelection({displayHandler}) {
    return (
        <>
            <div onClick={() => displayHandler(false)} className='z-10 fixed top-0 left-0 w-screen h-screen'></div>
            <div className='bg-zinc-50 rounded-lg flex flex-col z-10 border-2 border-zinc-200 shadow-xl absolute top-16 max-sm:top-14'>
              <p className='cursor-pointer p-4 flex gap-2 items-center hover:bg-zinc-100'><EngFlag/>English</p>
              <p className='cursor-pointer p-4 flex gap-2 items-center hover:bg-zinc-100'><FaFlag/>Persian</p>
            </div>
        </>
    )
}
