import React from 'react'
import { HiXMark } from 'react-icons/hi2'

export default function ModalWrapper({text , display , displayHandler , children}) {
  return (
    <>
    <div onClick={() => displayHandler(false)} className={`w-screen h-screen fixed top-0 left-0 z-40 bg-black bg-opacity-40  ${!display && 'hidden'}`}></div>
    <div className={`rounded-t-3xl w-full bg-white z-40 p-3 spcae-y-2 text-neutral-800 fixed left-0 bottom-0 transition-all duration-300 -mb-[30rem] ${display && 'mb-0'}`}>
      <span className='p-3  flex items-center justify-between'><p className='text-lg font-semibold'>{text}</p><HiXMark onClick={() => displayHandler(false)} className='text-2xl cursor-pointer'/></span>
      {children}
      <button onClick={() => displayHandler(false)} className='w-full p-3 bg-gradient-to-bl from-neutral-800 to-neutral-600 text-white font-semibold rounded-xl my-2'>Return</button>
    </div>
    </>
  )
}