import { projectsData } from '@/data/projects'
import { useRouter } from 'next/router'
import React, { createContext, useContext, useEffect, useState } from 'react'

const ProjectContext = createContext()

const ProjectsProvider = ({children}) => {

    const router = useRouter();

    const [projects , setProjects] = useState(projectsData)

    useEffect(() => {

        const {category , techs , isDescending} = router.query

        category && categoryQuery(category)

    } , [router.query])
    
    
    const categoryQuery = (category) => {
        setProjects([...projectsData].filter(item => item.types.includes(category)))
    }

    return (
        <ProjectContext.Provider value={{projects , setProjects}}>
            {children}
        </ProjectContext.Provider>
    )
}

export default ProjectsProvider

export const useProjects = () => {
    return useContext(ProjectContext)
}