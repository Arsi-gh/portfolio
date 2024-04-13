import { useRefs } from '@/context/refsProvider'
import React , {useEffect, useRef, useState} from 'react'
import Title from '../global/title';

export default function Services() {
  
  const {servicesRef} = useRefs()

  const slideRef = useRef()

  const [toggleDisplay , setToggleDisplay ] = useState(false)

  useEffect(() => {
    if (toggleDisplay) {
      slideRef.current.scrollBy(1000 , 0)
      return
    }
    slideRef.current.scrollBy(-1000 , 0)
  } , [toggleDisplay])

  return (
    <section className='w-fit mb-36 mt-16 mx-auto relative'>
      <Title text="Services" customClass="mb-12" ref={servicesRef}/>
      <article ref={slideRef} className='w-[60rem] h-[30rem] rounded-xl shadow-neutral-300 shadow-2xl bg-white relative overflow-hidden scroll-smooth'>
        <ServiceWrapper/>
      </article>
      <div className='flex rounded-lg overflow-hidden bg-white shadow-2xl shadow-neutral-500 transition-all absolute -bottom-8 left-1/2 -translate-x-1/2'>
        <span className={`w-1/2 h-full bg-gradient-to-b from-neutral-800 to-neutral-700 absolute transition-all duration-300 left-0 ${toggleDisplay && 'left-[8.5rem]'}`}></span>
        <button onClick={() => setToggleDisplay(false)} className={`p-4 text-lg z-10 ${!toggleDisplay && 'text-white'}`}>Development</button>
        <button onClick={() => setToggleDisplay(true)} className={`p-4 text-lg z-10 ${toggleDisplay && 'text-white'}`}>Ui Ux design</button>
      </div>
    </section>
  )
}

const ServiceWrapper = () => {
  return (
    <div className='flex'>
      <figure className='min-w-[60rem] h-[30rem] relative group'>
        <img className='w-full h-full top-0 left-0 absolute object-cover' src="/images/services/develop.jpg" alt="" />  
        <figcaption className='w-full h-full absolute top-0 left-0 bg-black bg-opacity-70 p-5 px-12 text-white transition-all group-hover:bg-opacity-80 flex flex-col'>
            <strong className='text-6xl mt-12'>Development</strong>
            <ul className='text-2xl mt-14 space-y-3 list-disc'>
              <li>Mobile development</li>
              <li>PWA application</li>
              <li>Web refactoring</li>
              <li>System redesign</li>
              <li>Performance improvement</li>
            </ul>
        </figcaption>
      </figure>
      <figure className='min-w-[60rem] h-[30rem] relative group'>
        <img className='w-full h-full top-0 left-0 absolute object-cover' src="/images/services/uiux.jpg" alt="" />  
        <figcaption className='w-full h-full absolute top-0 left-0 bg-black bg-opacity-70 p-5 px-12 text-white transition-all group-hover:bg-opacity-80 flex flex-col'>
            <strong className='text-6xl mt-12'>Ui Ux design</strong>
            <ul className='text-2xl mt-14 space-y-3 list-disc'>
              <li>Visual design</li>
              <li>Motion desgin</li>
              <li>Brand architecture</li>
              <li>Exhibition Design</li>
              <li>Product Concept</li>
            </ul>
        </figcaption>
      </figure>
    </div>
  )
}

