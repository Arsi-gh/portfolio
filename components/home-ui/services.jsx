import { useRefs } from '@/context/refsProvider'
import React , { useRef, useState } from 'react'
import Title from '../global/title';

export default function Services() {
  
  const {servicesRef} = useRefs()

  const slideRef = useRef()

  const [toggleDisplay , setToggleDisplay ] = useState(false)

  return (
    <section className='lg:w-fit w-full mb-36 mt-16 mx-auto relative max-lg:px-4'>
      <Title text="Services" customClass="mb-12" ref={servicesRef}/>
      <article ref={slideRef} className='lg:w-[60rem] sm:h-[30rem] h-[15rem] max-lg:w- rounded-xl shadow-neutral-300 shadow-2xl dark:shadow-xl bg-white relative overflow-hidden'>
        <ServiceWrapper display={toggleDisplay}/>
      </article>
      <div className='flex max-sm:flex-col rounded-lg overflow-hidden bg-white text-neutral-700 shadow-2xl shadow-neutral-500 dark:shadow-sm transition-all absolute -bottom-8 max-sm:-bottom-9 left-1/2 -translate-x-1/2'>
        <button onClick={() => setToggleDisplay(false)} className={`p-4 text-lg z-10 max-sm:text-sm max-sm:p-2 ${!toggleDisplay && 'bg-neutral-700 text-white'}`}>Development</button>
        <button onClick={() => setToggleDisplay(true)} className={`p-4 text-lg z-10 max-sm:text-sm max-sm:p-2 ${toggleDisplay && 'bg-neutral-700 text-white'}`}>Ui Ux design</button>
      </div>
    </section>
  )
}

const ServiceWrapper = ({display}) => {
  return (
    <>
      <figure className="w-full h-full relative group transition-all duration-150">
        <img loading='lazy' className='w-full h-full top-0 left-0 absolute object-cover' src="/images/services/develop.jpg" alt="" />  
        <figcaption className='w-full h-full absolute top-0 left-0 bg-black bg-opacity-70 p-5 px-12 text-white transition-all group-hover:bg-opacity-80 flex flex-col max-sm:py-0 '>
            <strong className='text-6xl sm:mt-12 mt-4 max-sm:text-xl'>Development</strong>
            <ul className='text-2xl mt-14 space-y-3 list-disc max-sm:text-sm max-sm:space-y-1 max-sm:mt-4'>
              <li>Mobile development</li>
              <li>PWA application</li>
              <li>Web refactoring</li>
              <li>System redesign</li>
              <li>Performance improvement</li>
            </ul>
        </figcaption>
      </figure>
      <figure className={`w-full h-full absolute top-0 ${display ? 'left-0' : 'left-[60rem]'} group`}>
        <img loading='lazy' className='bg-neutral-800 w-full h-full top-0 left-0 absolute object-cover' src="/images/services/uiux.jpg" alt="" />  
        <figcaption className='w-full h-full absolute top-0 left-0 bg-black bg-opacity-70 p-5 px-12 text-white transition-all group-hover:bg-opacity-80 flex flex-col max-sm:py-0 '>
            <strong className='text-6xl sm:mt-12 mt-4 max-sm:text-xl'>Ui Ux design</strong>
            <ul className='text-2xl mt-14 space-y-3 list-disc max-sm:text-sm max-sm:space-y-1 max-sm:mt-4'>
              <li>Visual design</li>
              <li>Motion desgin</li>
              <li>Brand architecture</li>
              <li>Exhibition Design</li>
              <li>Product Concept</li>
            </ul>
        </figcaption>
      </figure>
    </>
  )
}

