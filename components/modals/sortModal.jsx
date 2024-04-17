import React from 'react'
import ModalWrapper from './modalWrapper'
import { ProjectSort } from '../project-page/projectFilter'

export default function SortModal({display , displayHandler}) {
  return (
    <ModalWrapper display={display} displayHandler={displayHandler} text="Sort">
        <ProjectSort/>
    </ModalWrapper>
  )
}