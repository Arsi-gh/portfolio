import React from 'react'
import { LiaFileContractSolid } from "react-icons/lia";

export default function ProjectContract() {
  return (
    <button className='w-96 p-6 rounded-xl border relative overflow-hidden text-secondary-300'>
        <p className='text-3xl font-semibold text-left'>Contract</p>
        <p className='text-left text-sm text-secondary-400 mt-1'>Download project contract</p>
        <LiaFileContractSolid className='text-8xl absolute right-3 -bottom-4'/>
    </button>
  )
}
