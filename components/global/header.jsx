import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className='relative w-full bg-white border-b border-zinc-200'>
        <header className='z-10 2xl:max-w-screen-2xl h-20 max-w-screen-xl mx-auto text-neutral-700  flex items-center px-24 text-lg justify-between  font-semibold'>
            <p className='text-2xl'>Arsi</p>
            <ul className='flex gap-x-12'>
                <li><Link href=''>Home</Link></li>
                <li><Link href=''>Resume</Link></li>
                <li><Link href=''>Projects</Link></li>
                <li><Link href=''>About me</Link></li>
                <li><Link href=''>Contact me</Link></li>
                <li><Link href=''>Blog</Link></li>
            </ul>
        </header>
    </div>
  )
}
