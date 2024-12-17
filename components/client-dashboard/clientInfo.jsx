import React from 'react'
import { HiUser } from "react-icons/hi2";
import { TbLogout } from "react-icons/tb";

export default function ClientInfo() {
  return (
    <div className='p-3 border rounded-2xl w-96 flex gap-x-3 items-center'>
        <span className='size-20 rounded-full bg-primary-100 border border-primary-300 grid place-content-center'><HiUser className='text-4xl text-secondary-200'/></span>
        <span className='space-y-1'>
            <h4 className='text-lg font-semibold text-secondary-300'>Client name</h4>
            <p className='text-secondary-300'>Client@gmail.com</p>
        </span>
        <span className='flex-1'></span>
        <TbLogout className='cursor-pointer text-3xl text-red-500 mr-1'/>
    </div>
  )
}
