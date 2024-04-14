import React from 'react'
import { projects } from '@/data/projects'
import ProjectCard from './projectCard'

export default function ProjectsContainer() {

  return (
    <section className='flex-1 place-content-start grid grid-cols-2 gap-3'>
      {projects.map(project => <ProjectCard key={project.id} {...project}/>)}
    </section>
  )
}