import React, { useEffect, useState } from "react";
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
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

export default function ProjectFilter() {
  return (
    <div className="gap-2 rounded-lg border border-secondary-700 overflow-hidden h-fit w-64 bg-secondary-800 bg-opacity-90 text-primary-700 sticky top-4 shadow-lg max-md:hidden">
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
        <div className="w-full transition-all border-t border-secondary-700">
          <button onClick={() => setIsOpen(!isOpen)} className="font-semibold p-3 w-full flex justify-between items-center">{name}<GoChevronDown className={`text-2xl transition-all ${isOpen && 'rotate-180' }`}/></button>
          <ul className={`border-l ml-3 my-2 transition-all duration-300 overflow-auto ${isOpen ? 'max-h-48' : '-mb-2 max-h-0 overflow-hidden' }`}>
            {children}
          </ul>
        </div>
    )
}

export const ProjectTypes = () => {  

  const router = useRouter();

  const searchParams = useSearchParams()

  const params = new URLSearchParams(searchParams);
  
  const paramHandler = (param) => {
    router.query.category = param
    router.push(router)
  }

  return (
    <FilterWrapper name="Type">
        <li onClick={() => paramHandler("commerce")} className="filter-li">E-commerce<RiShoppingCart2Line className="text-xl"/></li>
        <li onClick={() => paramHandler("pwa")} className="filter-li">PWA<IoLogoPwa className="text-xl"/></li>
        <li onClick={() => paramHandler("web")} className="filter-li">Web app<MdOutlineWeb className="text-xl"/></li>
        <li onClick={() => paramHandler("cms")} className="filter-li">CMS<RiDashboard2Line className="text-xl"/></li>
        <li onClick={() => paramHandler("menu")} className="filter-li">Digital menu<BiFoodMenu className="text-xl"/></li>
        <li onClick={() => paramHandler("personal")} className="filter-li">Personal<RiUserLine className="text-xl"/></li>
    </FilterWrapper>
  );
};

export const ProjectTechs = () => {

  const router = useRouter();

  const [techs , setTechs] = useState([])

  useEffect(() => {
    if (techs.length) {
      router.query.techs = JSON.stringify(techs).toString()
      router.push(router)
    }
  } , [techs])
  
  const paramHandler = async (param) => {
      const isInBefore = techs.find(tech => tech == param)
      !isInBefore && setTechs(prev => [...prev , param])
  }

  return (
    <FilterWrapper name="Technologies">
      <li onClick={() => paramHandler("react")} className="filter-li">React<SiReact className="text-xl"/></li>
      <li onClick={() => paramHandler("next")} className="filter-li">Next<TbBrandNextjs className="text-xl"/></li>
      <li onClick={() => paramHandler("typescript")} className="filter-li">Typescript<TbBrandTypescript className="text-xl"/></li>
      <li onClick={() => paramHandler("node")} className="filter-li">Node js<FaNodeJs className="text-xl"/></li>
      <li onClick={() => paramHandler("tailwind")} className="filter-li">Tailwind<SiTailwindcss className="text-xl"/></li>
      <li onClick={() => paramHandler("bootstrap")} className="filter-li">Bootstrap<FaBootstrap className="text-xl"/></li>
      <li onClick={() => paramHandler("mui")} className="filter-li">Mui<SiMui className="text-xl"/></li>
      <li onClick={() => paramHandler("redux")} className="filter-li">Redux<TbBrandRedux className="text-xl"/></li>
      <li onClick={() => paramHandler("figma")} className="filter-li">Figma<FiFigma className="text-xl"/></li>
      <li onClick={() => paramHandler("three-js")} className="filter-li">Three js<SiThreedotjs className="text-xl"/></li>
      <li onClick={() => paramHandler("sass")} className="filter-li">Sass<TbBrandSass className="text-xl"/></li>
      <li onClick={() => paramHandler("react-query")} className="filter-li">React query<SiReactquery className="text-xl"/></li>
      <li onClick={() => paramHandler("jest")} className="filter-li">Jest<SiJest className="text-xl"/></li>
      <li onClick={() => paramHandler("regex")} className="filter-li">Regex<TbRegex className="text-xl"/></li>
    </FilterWrapper>
  )
}

export const ProjectSort = () => {
  
  const router = useRouter();

  const {isDescending} = router.query
  
  const paramHandler = (param) => {
    router.query.isDescending = param
    router.push(router)
  }

  return (
    <FilterWrapper name="Sort">
      <li onClick={() => paramHandler(false)} className={`filter-li ${!isDescending && 'bg-neutral-700 text-white'}`}>Ascending<PiSortAscending className="text-xl"/></li>
      <li onClick={() => paramHandler(true)} className={`filter-li ${isDescending && 'bg-neutral-700 text-white'}`}>Descending<PiSortDescending className="text-xl"/></li>
    </FilterWrapper>
  )
}