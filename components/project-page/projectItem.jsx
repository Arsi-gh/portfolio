import Link from 'next/link'
import React from 'react'

export default function ProjectItem() {
  return (
    <Link href="/projects/1" className='bg-white border rounded-lg h-80 overflow-hidden cursor-pointer transition-all hover:shadow-lg'>
        <img className='bg-neutral-700 h-60' src="" alt="" />
        <div className='p-3'>
            <p>Project name :</p>
            <span className='mt-2 flex gap-3'>
                <p>Tages : </p>
            </span>
        </div>
    </Link>
  )
}
