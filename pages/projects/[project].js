import ImageGallary from '@/components/project-page/imageGallary'
import React from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { icons } from '@/components/project-page/projectIcons';
import { projectsData } from '@/data/projects';
import Head from 'next/head';

export default function  ProjectPage({project}){

    if (project) {

      const {title , desc , types , images , client , clientDesc , clientImg , techs , link } = project  
      
      return (
        <>
            <Head>
                <title>Project page</title>
                <meta name="description" content="Project page"/>
            </Head>
            <main className='md:mt-28 mt-24  2xl:max-w-screen-2xl max-w-screen-xl mx-auto max-xl:px-4 flex gap-5 max-lg:flex-col-reverse'>
                <section className='flex-1 text-primary-600'>
                    <div className='p-5 rounded-xl bg-secondary-900 dark:bg-secondary-800 shadow-sm space-y-4'>
                        <ProjectMainInfo title={title} desc={desc}/>
                        <hr />
                        <TechStack techs={techs}/>
                        <Client client={client} clientDesc={clientDesc} clientImg={clientImg}/>
                    </div>
                </section>
                <div>
                    <ImageGallary images={images}/>
                    <a target='_blank' href={link} className='p-3 bg-gradient-to-bl from-primary-800 to-primary-600 text-secondary-900 font-semibold w-full mt-3 rounded-xl shadow-xl border flex justify-center items-center gap-x-2'>Click to see online<MdOutlineRemoveRedEye className='text-2xl'/></a>
                </div>
            </main>
        </>
        )
    }  
}

const ProjectMainInfo = ({title , desc }) => {
    return (
        <>
            <h2 className='text-3xl font-bold max-sm:text-2xl'>{title}</h2>
            <h4 className='text-2xl font-semibold max-sm:text-xl'>Description :</h4>
            <p className='max-sm:text-sm'>{desc}</p>
        </>
    )
}

const TechStack = ({techs}) => {
    return (
        <>
        <h4 className='text-xl font-semibold'>Technologies : </h4>
        <div className='flex flex-wrap mt-4 gap-x-2'>
            {techs && techs.map(tech => icons[tech])}
        </div>
        </>
    )
}

const Client = ({client , clientImg , clientDesc}) => {
    if (client) return (
        <>
        <hr />
        <div className='flex gap-3 items-center'>
            {clientImg && <img loading='lazy' className='size-20 rounded-full object-cover' src={clientImg} alt="client-logo" />}
            <span className='space-y-2'>
                <p className='font-semibold'>{client}</p>
                <p>{clientDesc}</p>
            </span>
        </div>
        </>
    )
}

export async function getStaticProps (context) {

    let data = projectsData.find(project => project.id == context.params.Project)

    return {
      props : {
        project : data
      }
    }  
}


export async function getStaticPaths () {
    return {
      paths : [
        {params  : {Project : "1"}},
        {params  : {Project : "2"}},
        {params  : {Project : "3"}},
        {params  : {Project : "4"}},
        {params  : {Project : "5"}},
        {params  : {Project : "6"}},
      ],
      fallback : true,
    }
}
  