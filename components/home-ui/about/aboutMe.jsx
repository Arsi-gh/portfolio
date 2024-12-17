import React from 'react'
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useRefs } from '@/context/refsProvider';
import Title from '../../global/title';
import Link from 'next/link';
import AboutSkills from './aboutSkills';

export default function AboutMe() {

  const aboutRef = useRefs().aboutRef

  return (
    <>
    <Title text="About me" ref={aboutRef}/>
    <section className='my-28 2xl:max-w-screen-2xl max-w-screen-xl px-12 mx-auto flex items-center justify-between gap-x-4 text-primary-800 max-md:flex-col max-md:mt-3 max-md:px-4'>
        <div className='w-1/2 max-md:w-full'>
            <p className='font-semibold text-4xl drop-shadow-lg max-md:text-center max-lg:text-4xl max-md:text-xl'>I'm currently working as a freelance front end developer , Creating apps , helping businesses to optimize their projects and any other requests . And I'd like to have a part in your projects </p>
            <Link href="/contact" className='w-fit mt-8 sm:p-4 p-3 bg-gradient-to-b from-primary-800 to-primary-700 text-secondary-900 rounded-xl shadow-xl font-semibold flex gap-2 items-center max-md:mx-auto max-md:text-sm'>Let's have a talk<HiOutlineArrowNarrowRight className='text-xl'/></Link>
        </div>
        <AboutSkills/>
    </section>
    </>
  )
}

