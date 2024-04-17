import { projectsData } from '@/data/projects'
import React, { createContext, useContext, useEffect, useState } from 'react'

const ProjectContext = createContext()

const ProjectsProvider = ({children}) => {

    const [projects , setProjects] = useState(projectsData)

    const [isDescending , setIsDescending] = useState(false)

    return (
        <ProjectContext.Provider value={{projects , setProjects , isDescending , setIsDescending}}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectsProvider

export const useProjects = () => {
    return useContext(ProjectContext)
}