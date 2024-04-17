import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import ProjectFilterdTags from "./projectFilterdTags";
import { PiSortAscending } from "react-icons/pi";
import { PiSortDescending } from "react-icons/pi";
import { SiJest, SiMui, SiReact, SiReactquery, SiTailwindcss, SiThreedotjs } from "react-icons/si";
import { TbBrandNextjs, TbBrandRedux, TbBrandSass, TbBrandTypescript, TbRegex } from "react-icons/tb";
import { FaBootstrap, FaNodeJs } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { useProjects } from "@/context/projectsProvider";
import { MdOutlineWeb } from "react-icons/md";
import { IoLogoPwa } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { RiUserLine } from "react-icons/ri";
import { RiDashboard2Line } from "react-icons/ri";
import { projectsData } from "@/data/projects";
import { GrAppsRounded } from "react-icons/gr";

export default function ProjectFilter() {
  return (
    <div className="gap-2 rounded-lg border overflow-hidden h-fit w-64 bg-white bg-opacity-70 sticky top-4 shadow-lg max-md:hidden">
        <p className="p-3 text-lg font-semibold w-full">Filters</p>
        {/* <ProjectFilterdTags/> */}
        <ProjectSort/>
        <ProjectTypes/>
        <ProjectTechs/>
    </div>
  );
}

const FilterWrapper = ({name , children}) => {

    const [isOpen , setIsOpen] = useState(false)

    return (
        <div className="w-full transition-all border-t">
          <button onClick={() => setIsOpen(!isOpen)} className="font-semibold p-3 w-full flex justify-between items-center">{name}<GoChevronDown className={`text-2xl transition-all ${isOpen && 'rotate-180' }`}/></button>
          <ul className={`border-l ml-3 my-2 transition-all duration-300 overflow-auto ${isOpen ? 'max-h-72' : '-mb-2 max-h-0 overflow-hidden' }`}>
            {children}
          </ul>
        </div>
    )
}

export const ProjectTypes = () => {  

  const { setProjects } = useProjects()

  return (
    <FilterWrapper name="Type">
        <li onClick={() => setProjects(projectsData)} className="filter-li">All<GrAppsRounded className="text-xl"/></li>
        <li onClick={() => setProjects([...projectsData].filter(item => item.types.includes(0)))} className="filter-li">E-commerce<RiShoppingCart2Line className="text-xl"/></li>
        <li onClick={() => setProjects([...projectsData].filter(item => item.types.includes(1)))} className="filter-li">PWA<IoLogoPwa className="text-xl"/></li>
        <li onClick={() => setProjects([...projectsData].filter(item => item.types.includes(2)))} className="filter-li">Web app<MdOutlineWeb className="text-xl"/></li>
        <li onClick={() => setProjects([...projectsData].filter(item => item.types.includes(3)))} className="filter-li">CMS<RiDashboard2Line className="text-xl"/></li>
        <li onClick={() => setProjects([...projectsData].filter(item => item.types.includes(4)))} className="filter-li">Digital menu<BiFoodMenu className="text-xl"/></li>
        <li onClick={() => setProjects([...projectsData].filter(item => item.types.includes(5)))} className="filter-li">Personal<RiUserLine className="text-xl"/></li>
    </FilterWrapper>
  );
};

export const ProjectTechs = () => {
  return (
    <FilterWrapper name="Technologies">
      <li className="filter-li">React<SiReact className="text-xl"/></li>
      <li className="filter-li">Next<TbBrandNextjs className="text-xl"/></li>
      <li className="filter-li">Typescript<TbBrandTypescript className="text-xl"/></li>
      <li className="filter-li">Node js<FaNodeJs className="text-xl"/></li>
      <li className="filter-li">Tailwind<SiTailwindcss className="text-xl"/></li>
      <li className="filter-li">Bootstrap<FaBootstrap className="text-xl"/></li>
      <li className="filter-li">Mui<SiMui className="text-xl"/></li>
      <li className="filter-li">Redux<TbBrandRedux className="text-xl"/></li>
      <li className="filter-li">Figma<FiFigma className="text-xl"/></li>
      <li className="filter-li">Three js<SiThreedotjs className="text-xl"/></li>
      <li className="filter-li">Sass<TbBrandSass className="text-xl"/></li>
      <li className="filter-li">React query<SiReactquery className="text-xl"/></li>
      <li className="filter-li">Jest<SiJest className="text-xl"/></li>
      <li className="filter-li">Regex<TbRegex className="text-xl"/></li>
    </FilterWrapper>
  )
}

export const ProjectSort = () => {

  const {setIsDescending : changeSort} = useProjects()

  const [isDescending , setIsDescending] = useState(false)

  const handler = (flag) => {
    setIsDescending(flag)
    changeSort(flag)
  }

  return (
    <FilterWrapper name="Sort">
      <li onClick={() => handler(false)} className={`filter-li ${!isDescending && 'bg-neutral-700 text-white'}`}>Ascending<PiSortAscending className="text-xl"/></li>
      <li onClick={() => handler(true)} className={`filter-li ${isDescending && 'bg-neutral-700 text-white'}`}>Descending<PiSortDescending className="text-xl"/></li>
    </FilterWrapper>
  )
}