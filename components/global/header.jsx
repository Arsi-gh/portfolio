import Link from 'next/link'
import React, { useState } from 'react'
import { FaChevronDown, FaGithub } from "react-icons/fa";
import { EngFlag, FaFlag } from './flags';
import { useRefs } from '@/context/refsProvider';
import { useRouter } from 'next/router';
import { HiOutlineMenu } from "react-icons/hi";
import LngSelection from './lngSelection';
import { useDarkMode } from '@/context/darkModaProvider';
import { MdOutlineLightMode } from "react-icons/md";
import { FaRegMoon } from "react-icons/fa";
import { RiMoonClearLine } from "react-icons/ri";



export default function Header() {

  const [displayLang , setDisplayLang] = useState(false)

  const [displaySide , setDisplaySide] = useState(false)

  const router = useRouter()

  const { isDarkMode , toggleDarkMode } = useDarkMode()

  return (
    <div className='w-full bg-primary-100 max-md:p-1 fixed top-0 z-50 mb-24'>
    <header className={`2xl:max-w-screen-2xl max-w-screen-xl max-xl:px-3 md:h-20 mx-auto text-primary-700  flex items-center gap-x-4 text-lg font-semibold transition-all duration-300  max-md:flex-wrap max-md:p-2 `}>
        <button id='sidebar-btn' aria-label='sidebar-btn' onClick={() => setDisplaySide(!displaySide)} className='md:hidden'><HiOutlineMenu className='text-3xl'/></button>
        <p className='md:hidden font-semibold flex-1 text-xl capitalize'>{router.asPath == '/' ? 'Home' : router.asPath.substring(1).slice(0 , 8)}</p>
        <Links/>
        <span className='flex-1'></span>
        <button onClick={() => toggleDarkMode()}>{isDarkMode ? <MdOutlineLightMode className='text-2xl'/> : <RiMoonClearLine className='text-2xl'/> }</button>
        <div className='flex text-base relative'>
          {/* <button id='lng-btn' aria-label='lng-btn' onClick={() => setDisplayLang(!displayLang)} className='p-3 px-4 rounded-xl flex gap-x-3 items-center border-2 md:shadow-md transition-all max-sm:py-2'><EngFlag/><p className='max-sm:hidden'>Eng</p><FaChevronDown className={`transition-all ${displayLang ? 'rotate-180' : 'rotate-0'}`}/></button> */}
          <a aria-label='github-profile' target="_blank" href='https://github.com/Arsi-gh' rel="noopener noreferrer" className='p-2 px-3 flex gap-2 items-center bg-gradient-to-bl from-neutral-800 to-neutral-700 dark:from-neutral-700 dark:to-neutral-600 md:shadow-md text-white rounded-xl'><p className='max-sm:hidden'>Github</p><FaGithub className='text-3xl max-sm:text-2xl'/></a>
          {displayLang && <LngSelection displayHandler={setDisplayLang}/>}
        </div>
        <SidebarLinks display={displaySide}/>
    </header>
    </div>
  )
}

const Links = () => {

  const { aboutRef } = useRefs()
  
  const router = useRouter()

  const handleRoute = async (ref) => {
    if (router.asPath != '/') {
      await router.push('/')
    } 
    window.scrollTo({top : ref.current.offsetTop - 50})
  }

  return (
    <ul className='flex gap-x-10 items-center max-md:hidden'>
      <li><Link href="/" className='text-2xl'>Arsi</Link></li>
      <li><Link href="/projects" className='cursor-pointer'>Projects</Link></li>
      <li className='cursor-pointer' onClick={() => handleRoute(aboutRef)}>About me</li>
      <li><Link href='/contact'>Contact me</Link></li>
    </ul>
  )
}

const SidebarLinks = ({display}) => {

  const { aboutRef } = useRefs()
  
  const router = useRouter()

  const handleRoute = async (ref) => {
    if (router.asPath != '/') {
      await router.push('/')
    } 
    window.scrollTo({top : ref.current.offsetTop - 50})
  }

  return (
    <div className={`w-full md:hidden transition-all duration-300 ${display ? 'max-h-64 mt-3' : 'max-h-0 -mt-8'}`}>
      <ul className={`flex flex-col ml-1 text-base transition-all duration-300  ${display ? 'opacity-100 delay-75' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <li className='*:flex-1 py-3 cursor-pointer'><Link href="/">Home</Link></li>
        <li className='*:flex-1 py-3 cursor-pointer'><Link href="/projects">Projects</Link></li>
        <li className='*:flex-1 py-3 cursor-pointer' onClick={() => handleRoute(aboutRef)}>About me</li>
        <li className='*:flex-1 py-3 cursor-pointer'><Link href='/contact'>Contact me</Link></li>
      </ul>
    </div>
  )
}