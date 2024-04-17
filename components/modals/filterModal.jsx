import React from 'react'
import ModalWrapper from './modalWrapper'
import { ProjectTechs, ProjectTypes } from '../project-page/projectFilter'

export default function FilterModal({display , displayHandler}) {
  return (
    <ModalWrapper display={display} displayHandler={displayHandler} text="Filter">
        <ProjectTypes/>
        <ProjectTechs/>
    </ModalWrapper>
  )
}