import React from 'react'
import ProjectItem from './projectItem'

export default function ProjectsContainer() {
  return (
    <section className='flex-1 overflow-auto place-content-start h-[50rem] grid grid-cols-2 gap-3'>
      <ProjectItem/>
      <ProjectItem/>
      <ProjectItem/>
    </section>
  )
}
