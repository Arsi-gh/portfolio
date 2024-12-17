import ProjectFilter from '@/components/project-page/projectFilter'
import ProjectsContainer from '@/components/project-page/projectsContainer'
import ResponsiveFilter from '@/components/project-page/responsiveFilter'
import Head from 'next/head'
import React from 'react'

export default function Projects() {
  return (
    <>
    <Head>
      <title>Projects page</title>
      <meta name="description" content="Projects page"/>
    </Head>
    <main className='sm:mt-28 mt-20 2xl:max-w-screen-2xl max-w-screen-xl mx-auto max-xl:px-4 flex gap-3 max-sm:px-2 max-md:flex-col'>
        <ProjectFilter/>
        <ResponsiveFilter/>
        <ProjectsContainer/>
    </main>
    </>
  )
}
