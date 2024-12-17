import React from 'react'
import { IoMdSettings } from "react-icons/io";
import { HiCheck } from "react-icons/hi";
import { PiTimerBold } from "react-icons/pi";


export default function ProjectSteps() {
  return (
    <div className='p-3 rounded-xl border space-y-3 w-[22rem] font-semibold text-secondary-300'>
        <p className='text-secondary-200'>Steps : </p>
        <p className='p-3 rounded-lg border border-inherit bg-primary-100 line-through flex justify-between items-center'>Host and domain registration <HiCheck className='text-2xl'/></p>
        <p className='p-3 rounded-lg border border-inherit bg-primary-100 line-through flex justify-between items-center'>Layout design <HiCheck className='text-2xl'/></p>
        <p className='p-3 rounded-lg  flex justify-between items-center bg-primary-300 gradient'>Layout design <IoMdSettings className='text-2xl animate-spin'/></p>
        <p className='p-3 rounded-lg border border-inherit flex justify-between items-center'>Development <PiTimerBold className='text-2xl'/></p>
        <p className='p-3 rounded-lg border border-inherit flex justify-between items-center'>Bugs and Testing <PiTimerBold className='text-2xl'/></p>
        <p className='p-3 rounded-lg border border-inherit flex justify-between items-center'>Edits and Review <PiTimerBold className='text-2xl'/></p>
        <p className='p-3 rounded-lg border border-inherit flex justify-between items-center'>Deployment <PiTimerBold className='text-2xl'/></p>
        <p className='p-3 rounded-lg border border-inherit flex justify-between items-center'>Finish <PiTimerBold className='text-2xl'/></p>
    </div>
  )
}
