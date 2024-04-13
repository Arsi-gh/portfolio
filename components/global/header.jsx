import Link from 'next/link'
import React, { useState } from 'react'
import { FaChevronDown, FaGithub } from "react-icons/fa";
import { EngFlag, FaFlag } from './flags';
import { useRefs } from '@/context/refsProvider';
import { useRouter } from 'next/router';
import { HiOutlineMenu } from "react-icons/hi";


export default function Header() {

  const [displayLang , setDisplayLang] = useState(false)

  return (
    <div className='w-full bg-zinc-50 py-3 max-md:p-1'>
    <header className='2xl:max-w-screen-2xl max-w-screen-xl h-20 mx-auto text-neutral-700  flex items-center px-4 md:pl-8 text-lg justify-between font-semibold max-sm:px-2'>
        <button className='md:hidden'>
          <HiOutlineMenu className='text-3xl'/>
        </button>
        <Links/>
        <div className='flex text-base relative'>
          <button onClick={() => setDisplayLang(!displayLang)} className='p-3 px-4 rounded-xl flex gap-x-3 items-center border-2 shadow-lg transition-all'><EngFlag/><p className='max-sm:hidden'>Eng</p><FaChevronDown className={`transition-all ${displayLang ? 'rotate-180' : 'rotate-0'}`}/></button>
          <a target="_blank" href='https://github.com/Arsi-gh' rel="noopener noreferrer" className='p-3 px-4 flex gap-2 items-center ml-2 bg-gradient-to-bl from-neutral-800 to-neutral-700 shadow-lg text-white rounded-xl'><p className='max-sm:hidden'>Github</p><FaGithub className='text-3xl'/></a>
          {displayLang && <LangSelection displayHandler={setDisplayLang}/>}
        </div>
    </header>
    </div>
  )
}

const Links = () => {

  const { servicesRef , aboutRef } = useRefs()
  
  const router = useRouter()

  const handleClick = async (ref) => {
    if (router.asPath != '/') {
      await router.push('/')
    } 
    window.scrollTo({top : ref.current.offsetTop - 50})
  }

  return (
    <ul className='flex gap-x-10 items-center max-md:hidden'>
      <Link href="/" className='text-2xl'>Arsi</Link>
      <li className='cursor-pointer' onClick={() => handleClick(servicesRef)}>Services</li>
      <Link href="/projects" className='cursor-pointer'>Projects</Link>
      <li className='cursor-pointer' onClick={() => handleClick(aboutRef)}>About me</li>
      <li><Link href='/contact'>Contact me</Link></li>
    </ul>
  )
}

const LangSelection = ({displayHandler}) => {
  return (
    <>
    <div onClick={() => displayHandler(false)} className='z-10 fixed top-0 left-0 w-screen h-screen'></div>
    <div className='bg-zinc-50 rounded-lg flex flex-col z-10 border-2 border-zinc-200 shadow-xl absolute top-16'>
      <p className='cursor-pointer p-4 flex gap-2 items-center hover:bg-zinc-100'><EngFlag/>English</p>
      <p className='cursor-pointer p-4 flex gap-2 items-center hover:bg-zinc-100'><FaFlag/>Persian</p>
    </div>
    </>
  )
}