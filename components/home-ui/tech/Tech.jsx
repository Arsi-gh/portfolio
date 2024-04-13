import React from 'react'
import { SiJest, SiMui, SiReact, SiReactquery, SiTailwindcss, SiThreedotjs } from "react-icons/si";
import { TbApi , TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs , TbBrandRedux, TbBrandSass, TbBrandTypescript, TbRegex } from "react-icons/tb";
import { FiFigma } from "react-icons/fi";
import { BiLogoGit, BiLogoMongodb } from "react-icons/bi";
import { CgFormatLeft } from "react-icons/cg";
import { FaAws } from "react-icons/fa";
import TechElem from '@/components/global/TechElement';

export default function Tech() {
  return (
    <div className='flex-1 h-96 grid place-content-center'>
        <div className='max-w-[50rem] flex overflow-hidden tech-container'>
            <TechWrapper/>
            <TechWrapper/>
            <TechWrapper/>  
        </div>
    </div>
  )
}

const TechWrapper = () => {
    return (
        <div className='2xl:min-w-[29.5rem] 2xl:max-w-[29.5rem] min-w-[30.1rem] h-full flex gap-x-2 justify-center content-start flex-wrap tech-animation'>
            <TechElem text="Tailwind css"><SiTailwindcss className='text-2xl'/></TechElem>
            <TechElem text="Next js"><TbBrandNextjs className='text-2xl'/></TechElem>
            <TechElem text="React query"><SiReactquery className='text-2xl'/></TechElem>
            <TechElem text="React js"><SiReact className='text-2xl'/></TechElem>
            <TechElem text="Javascript es13"><TbBrandJavascript className='text-2xl'/></TechElem>
            <TechElem text="HTML 5"><TbBrandHtml5 className='text-2xl'/></TechElem>
            <TechElem text="CSS 3"><TbBrandCss3 className='text-2xl'/></TechElem>
            <TechElem text="Regular Expression"><TbRegex className='text-2xl'/></TechElem>
            <TechElem text="Figma"><FiFigma className='text-2xl'/></TechElem>
            <TechElem text="Typescript"><TbBrandTypescript className='text-2xl'/></TechElem>
            <TechElem text="Sass"><TbBrandSass className='text-2xl'/></TechElem>
            <TechElem text="Mui"><SiMui className='text-2xl'/></TechElem>
            <TechElem text="Git"><BiLogoGit className='text-2xl'/></TechElem>
            <TechElem text="Mongo DB"><BiLogoMongodb className='text-2xl'/></TechElem>
            <TechElem text="Restful API"><TbApi className='text-2xl'/></TechElem>
            <TechElem text="Three . js"><SiThreedotjs className='text-2xl'/></TechElem>
            <TechElem text="Redux"><TbBrandRedux className='text-2xl'/></TechElem>
            <TechElem text="Jest"><SiJest className='text-2xl'/></TechElem>
            <TechElem text="Formik"><CgFormatLeft className='text-2xl'/></TechElem>
            <TechElem text="Aws"><FaAws className='text-2xl'/></TechElem>
        </div>
    )
}