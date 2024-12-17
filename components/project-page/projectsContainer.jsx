import React, { useEffect } from 'react'
import ProjectCard from './projectCard'
import { useProjects } from '@/context/projectsProvider'
import { useRouter } from 'next/router'

export default function ProjectsContainer() {

  const { projects } = useProjects()

  const router = useRouter()

  const {isDescending} = router.query

  if (!projects || !projects.length) return <div className='p-3 font-semibold text-2xl flex-1  grid place-content-center max-sm:mt-4 text-primary-800'>Nothing found</div>

  return (
    <section className='flex-1 place-content-start grid grid-cols-2 gap-3 max-lg:grid-cols-1'>
      {
        isDescending ? projects.sort((a , b) => b.id - a.id).map(project => <ProjectCard key={project.id} {...project}/>) : projects.sort((a , b) => a.id - b.id).map(project => <ProjectCard key={project.id} {...project}/>)
      }
    </section>
  )
}