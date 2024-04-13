import ProjectFilter from '@/components/project-page/projectFilter'
import ProjectsContainer from '@/components/project-page/projectsContainer'
import React from 'react'

export default function Projects() {
  return (
    <main className='mt-6 2xl:max-w-screen-2xl max-w-screen-xl mx-auto max-xl:px-4 flex gap-3'>
        <ProjectFilter/>
        <ProjectsContainer/>
    </main>
  )
}
