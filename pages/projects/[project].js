import TechElem from '@/components/global/TechElement'
import ImageGallary from '@/components/project-page/imageGallary'
import { useParams } from 'next/navigation'
import React from 'react'
import { CgFormatLeft } from 'react-icons/cg'
import { SiMui, SiReact, SiTailwindcss } from 'react-icons/si'
import { TbBrandNextjs, TbBrandTypescript } from 'react-icons/tb'

export default function ProjectPage() {

  const params = useParams()

  return (
    <main className='mt-6 2xl:max-w-screen-2xl max-w-screen-xl mx-auto max-xl:px-4'>
        <ImageGallary/>
        <section className='mt-4 text-neutral-700'>
            <div className='p-5 rounded-xl bg-white shadow-sm space-y-4'>
                <ProjectMainInfo/>
                <hr />
                <TechStack/>
                <hr />
            </div>
        </section>
    </main>
  )
}

const ProjectMainInfo = () => {
    return (
        <>
            <h4 className='text-3xl font-semibold'>Description :</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur fugit aspernatur quo accusamus labore mollitia voluptatum asperiores! Odit modi quam alias dolor fugit sint ipsum dolores ea nam consectetur? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui libero, similique nemo, magni ipsum laudantium minima aperiam beatae porro a labore voluptatibus ipsam quas perferendis culpa magnam cupiditate dolor illo! </p>
        </>
    )
}

const TechStack = () => {
    return (
        <>
        <h4 className='text-xl font-semibold'>Technologies : </h4>
        <div className='flex flex-wrap mt-4 gap-x-2'>
            <TechElem text="Tailwind css"><SiTailwindcss className='text-2xl'/></TechElem>
            <TechElem text="Next js"><TbBrandNextjs className='text-2xl'/></TechElem>
            <TechElem text="React js"><SiReact className='text-2xl'/></TechElem>
            <TechElem text="Typescript"><TbBrandTypescript className='text-2xl'/></TechElem>
            <TechElem text="Mui"><SiMui className='text-2xl'/></TechElem>
            <TechElem text="Formik"><CgFormatLeft className='text-2xl'/></TechElem>
        </div>
        </>
    )
}