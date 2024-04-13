import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import ProjectWrapper from "../home-ui/projects/projectWrapper";

export default function ProjectFilter() {
  return (
    <div className="gap-2 rounded-lg border overflow-hidden h-fit w-64 bg-white bg-opacity-70 sticky top-4">
        <div className="p-3 flex flex-wrap gap-2 items-center">
          <p className="text-lg font-semibold w-full mb-2">Filters</p>
          <span className="p-1 px-4 rounded-full bg-zinc-100 border">Gsap</span>
          <span className="p-1 px-4 rounded-full bg-zinc-100 border">Tailwind</span>
          <span className="p-1 px-4 rounded-full bg-zinc-100 border">React</span>
          <span className="p-1 px-4 rounded-full bg-zinc-100 border">Next</span>
          <span className="p-1 px-4 rounded-full bg-zinc-100 border">React</span>
          <span className="p-1 px-4 rounded-full bg-zinc-100 border">Bootstrap</span>
          <span className="p-1 px-4 rounded-full bg-zinc-100 border">Js</span>
        </div>
        <ProjectSort/>
        <ProjectTypes/>
        <ProjectTags/>
    </div>
  );
}

const FilterWrapper = ({name , children}) => {

    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="w-full transition-all even:border-y">
          <button onClick={() => setIsOpen(!isOpen)} className="p-3 w-full flex justify-between items-center">{name}<GoChevronDown className={`text-2xl transition-all ${isOpen && 'rotate-180' }`}/></button>
          <ul className={`border-l ml-3 my-2 transition-all ${!isOpen && 'hidden' }`}>
            {children}
          </ul>
        </div>
    )
}

const ProjectTypes = () => {  
  return (
    <FilterWrapper name="Type">
        <li className="filter-li">E-commerce</li>
        <li className="filter-li">PWA</li>
        <li className="filter-li">ERP</li>
        <li className="filter-li">CMS</li>
        <li className="filter-li">Digital menu</li>
        <li className="filter-li">Personal</li>
    </FilterWrapper>
  );
};

const ProjectTags = () => {
  return (
    <FilterWrapper name="Tags">
      <li className="filter-li">React</li>
      <li className="filter-li">Next</li>
      <li className="filter-li">Solid</li>
      <li className="filter-li">Three js</li>
      <li className="filter-li">Tailwind</li>
      <li className="filter-li">Sass</li>
      <li className="filter-li">Node js</li>
    </FilterWrapper>
  )
}

const ProjectSort = () => {
  return (
    <FilterWrapper name="Sort">
      <li className="filter-li">Newest</li>
      <li className="filter-li">Oldest</li>
    </FilterWrapper>
  )
}