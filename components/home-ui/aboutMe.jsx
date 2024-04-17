import React, { forwardRef, useRef } from 'react'
import SkillChart from './skillChart/skillChart'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useRefs } from '@/context/refsProvider';
import Title from '../global/title';
import Link from 'next/link';

export default function AboutMe() {

  const aboutRef = useRefs().aboutRef

  return (
    <>
    <Title text="About me" ref={aboutRef}/>
    <section className='2xl:max-w-screen-2xl max-w-screen-xl px-12 mx-auto flex items-center justify-between gap-x-4 text-neutral-800 max-md:flex-col max-md:mt-12 max-md:px-4'>
        <div className='w-1/2 max-md:w-full'>
            <p className='font-semibold text-5xl drop-shadow-lg max-md:text-center max-lg:text-4xl max-md:text-xl max-sm:tex'>Sometimes it's not about how much hard or smart you work , it's about how special you are.</p>
            <Link href="/contact" className='w-fit mt-8 p-4 bg-gradient-to-b from-neutral-800 to-neutral-700 text-white rounded-xl shadow-xl font-semibold flex gap-2 items-center max-md:mx-auto max-md:text-sm'>Let's start a project<HiOutlineArrowNarrowRight className='text-xl'/></Link>
        </div>
        <SkillChart/>
    </section>
    </>
  )
}