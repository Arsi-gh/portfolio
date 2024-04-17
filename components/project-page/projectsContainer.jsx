import React from 'react'
import ProjectCard from './projectCard'
import { useProjects } from '@/context/projectsProvider'

export default function ProjectsContainer() {

  const { projects , isDescending } = useProjects()

  if (!projects || !projects.length) return <div className='font-semibold text-2xl flex-1  grid place-content-center'>Nothing found</div>

  return (
    <section className='flex-1 place-content-start grid grid-cols-2 gap-3 max-lg:grid-cols-1'>
      {
        isDescending ? projects.sort((a , b) => b.id - a.id).map(project => <ProjectCard key={project.id} {...project}/>) : projects.sort((a , b) => a.id - b.id).map(project => <ProjectCard key={project.id} {...project}/>)
      }
    </section>
  )
}