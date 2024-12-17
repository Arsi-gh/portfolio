import React from 'react'
import { BiEditAlt } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";
import { PiTimerBold } from "react-icons/pi";
import { FaCircleXmark } from "react-icons/fa6";
import { IoTicketOutline } from "react-icons/io5";

// const editStatus = {
//   approved : <p className='flex justify-between items-center gap-x-2 text-sm p-1 pl-2 rounded-full bg-gradient-to-tl from-green-500 to-green-400 dark:from-green-600 dark:to-green-500  text-white'>Approved<FaCircleCheck className='text--500 text-lg'/></p>,
//   waiting : <p className='flex justify-between items-center gap-x-2 text-sm p-1 pl-2 rounded-full bg-gradient-to-tl from-purple-500 to-purple-400 dark:from-purple-600 dark:to-purple-500  text-white'>Waiting<PiTimerBold className='text--500 text-xl'/></p>,
//   declined : <p className='flex justify-between items-center gap-x-2 text-sm p-1 pl-2 rounded-full bg-gradient-to-tl from-red-500 to-red-400 dark:from-red-600 dark:to-red-500  text-white'>Declined<FaCircleXmark className='text--500 text-lg'/></p>,
// }

const editStatus = {
  approved : <FaCircleCheck className='text-green-500 text-xl'/>,
  waiting : <PiTimerBold className='text-purple-500 text-2xl'/>,
  declined : <FaCircleXmark className='text-red-500 text-xl'/>,
}



export default function ProjectEdits() {
  return (
    <section className='p-3 rounded-xl w-96 border space-y-3'> 
        <p className='text-secondary-300 font-semibold flex gap-x-2 items-center'><IoTicketOutline className='text-2xl'/>Edits and requests</p>
        <div className='h-[33.6rem] mt-3 p-2 border border-inherit rounded-xl text-secondary-400 bg-primary-100 space-y-2 overflow-x-scroll'>
          <EditReq icon={editStatus.approved}/>
          <EditReq icon={editStatus.approved}/>
          <EditReq icon={editStatus.declined}/>
          <EditReq icon={editStatus.waiting}/>
          <EditReq icon={editStatus.waiting}/>
        </div>
        <button className='p-3 text-lg font-semibold rounded-lg w-full flex justify-between items-center bg-gradient-to-br from-slate-700 to-slate-500 dark:bg-gradient-to-tl dark:from-slate-800 dark:to-slate-700 text-white shadow-lg'>Suggest Edit <BiEditAlt className='text-2xl'/></button>
    </section>
  )
}


const EditReq = ({icon}) => {
  return (
    <div className='p-2 bg-white rounded-xl border border-primary-300 dark:bg-primary-200 hover:shadow-xl cursor-pointer shadow-secondary-100'>
      <span className='flex justify-between items-center -mb-2 font-semibold'>
        <p className='text-secondary-200'>Edit title</p>
        {icon}
     </span>
     <span className='w-full inline-block border-t border-primary-300'></span>
      <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit autem officia vero, voluptate labore dolor</p>
    </div>
  )
}