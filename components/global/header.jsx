import Link from 'next/link'
import React, { useState } from 'react'
import { FaChevronDown, FaGithub } from "react-icons/fa";
import { EngFlag, FaFlag } from './flags';
import { useRefs } from '@/context/refsProvider';
import { useRouter } from 'next/router';
import { HiOutlineMenu } from "react-icons/hi";
import LngSelection from './lngSelection';


export default function Header() {

  const [displayLang , setDisplayLang] = useState(false)

  const [displaySide , setDisplaySide] = useState(false)

  return (
    <div className='w-full bg-zinc-50 py-3 max-md:p-1'>
    <header className={`2xl:max-w-screen-2xl max-w-screen-xl md:h-20 mx-auto text-neutral-700  flex items-center px-4 md:pl-8 text-lg justify-between font-semibold transition-all duration-300  max-md:flex-wrap max-md:p-2 `}>
        <button onClick={() => setDisplaySide(!displaySide)} className='md:hidden'><HiOutlineMenu className='text-3xl'/></button>
        <Links/>
        <div className='flex text-base relative'>
          <button onClick={() => setDisplayLang(!displayLang)} className='p-3 px-4 rounded-xl flex gap-x-3 items-center border-2 md:shadow-md transition-all max-sm:py-2'><EngFlag/><p className='max-sm:hidden'>Eng</p><FaChevronDown className={`transition-all ${displayLang ? 'rotate-180' : 'rotate-0'}`}/></button>
          <a target="_blank" href='https://github.com/Arsi-gh' rel="noopener noreferrer" className='p-3 px-4 flex gap-2 items-center ml-2 bg-gradient-to-bl from-neutral-800 to-neutral-700 md:shadow-md text-white rounded-xl'><p className='max-sm:hidden'>Github</p><FaGithub className='text-3xl max-sm:text-2xl'/></a>
          {displayLang && <LngSelection displayHandler={setDisplayLang}/>}
        </div>
        <SidebarLinks display={displaySide}/>
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
      <li><Link href="/" className='text-2xl'>Arsi</Link></li>
      <li><Link href="/projects" className='cursor-pointer'>Projects</Link></li>
      <li className='cursor-pointer' onClick={() => handleClick(aboutRef)}>About me</li>
      <li><Link href='/contact'>Contact me</Link></li>
    </ul>
  )
}

const SidebarLinks = ({display}) => {
  return (
    <ul className={`w-full flex flex-col ml-1 mt-3 gap-y-4 text-base md:hidden overflow-hidden transition-all duration-300 ${display ? 'max-h-64' : 'max-h-0'}`}>
      <Link href="/">Home</Link>
      <li>Services</li>
      <Link href="/projects">Projects</Link>
      <li>About me</li>
      <Link href='/contact'>Contact me</Link>
    </ul>
  )
}