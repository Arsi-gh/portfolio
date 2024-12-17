import React from 'react'
import { BiCoffeeTogo } from "react-icons/bi";
import { TbLogout2 } from "react-icons/tb";
import { TbReceipt } from "react-icons/tb";

export default function ProjectLinks() {
  return (
    <>
        <button className='font-semibold text-secondary-200 border p-3 rounded-lg flex justify-between items-center'>Project receipt <TbReceipt className='text-2xl'/></button>
        <button className='font-semibold text-secondary-200 border p-3 rounded-lg -mt-1 flex justify-between items-center'>Buy me a coffee <BiCoffeeTogo className='text-2xl'/></button>
    </>
  )
}