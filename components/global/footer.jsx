import Link from 'next/link'
import React from 'react'
import { LuMoveRight } from "react-icons/lu";

export default function Footer() {
  return (
    <div className='w-full p-4'>
      <footer className='2xl:max-w-screen-2xl max-w-screen-xl p-10 md:mt-24 mt-12 xl:mb-6  mx-auto text-primary-800 bg-secondary-800 border border-secondary-800 shadow-2xl rounded-3xl flex gap-x-12 gap-y-6 flex-wrap justify-between max-lg:w-full max-sm:px-4'>
        <div className='flex gap-x-20 max-md:flex-col max-md:gap-y-12'>
          <Offers/>
          <Links/>
          <Socials/>
        </div>
        <EmailForm/>
        <span className='w-full h-[1px] bg-zinc-200'></span>
        <p>© 2024 copyright. all rights reserved</p>
      </footer>
    </div>
  )
}

const Socials = () => {
  return (
    <ul className='flex flex-col gap-y-1 text-primary-600'>
      <li className='text-xl font-semibold mb-2 text-primary-700'>Socials</li>
      <li className='text-lg'>Instagram</li>
      <li className='text-lg'>Telegram</li>
      <li className='text-lg'>Linkedin</li>
    </ul>
  )
}

const Links = () => {
  return (
    <ul className='flex flex-col gap-y-1 text-primary-600'>
      <li className='text-xl font-semibold mb-2 text-primary-700'>Links</li>
      <li><Link href=''>Services</Link></li>
      <li><Link href=''>Projects</Link></li>
      <li><Link href=''>About me</Link></li>
      <li><Link href=''>Contact me</Link></li>
    </ul>
  )
}

const Offers = () => {
  return (
    <ul className='flex flex-col gap-y-1 text-primary-600'>
      <li className='text-xl font-semibold mb-2 text-primary-700'>Services</li>
      <li className='text-lg'>Ui Ux design</li>
      <li className='text-lg'>Web development</li>
      <li className='text-lg'>Problem solving</li>
      <li className='text-lg'>Refactor & resdesigning</li>
      <li className='text-lg'>Progressive web applications</li>
      <li className='text-lg'>Increasing web performance</li>
    </ul>
  )
}

const EmailForm = () => {
  return (
    <form className='md:w-96 flex flex-col gap-y-3'>
      <p className='font-semibold text-primary-700'>Keep in touch </p>
      <div className='relative '>
        <input className='w-96 p-3 border border-zinc-300 dark:bg-primary-100 rounded-full max-md:w-full' type="email" placeholder='Email'/>
        <button id='send-email' aria-label='send-email-btn' className='rounded-full p-[9px] top-1 right-1 px-4 absolute bg-primary-700 text-secondary-700 flex gap-2 items-center max-sm:px-3'><p className='max-sm:hidden'>Send</p><LuMoveRight className='text-2xl'/></button>
      </div>
      <p className='text-primary-600'>You will recieve every news related about new upcoming features and offers</p>
    </form>
  )
}