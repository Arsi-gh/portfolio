import React, { useState } from 'react'
import TechElem from '../../global/TechElement';
import { SiExpress, SiMui, SiNestjs, SiReact, SiReactquery, SiTailwindcss } from 'react-icons/si';
import { TbApi, TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs, TbBrandNodejs, TbBrandTypescript } from 'react-icons/tb';
import { BiLogoMongodb } from 'react-icons/bi';


export default function AboutSkills() {
    
    const sections = [<FrontSec/> ,<BackSec/>]
    const [sectionIndex , setSectionIndex] = useState(0)

    return (
        <div className='w-[32rem] h-56 rounded-xl rounded-tl-none max-sm:rounded-t-none  bg-primary-50 relative shadow-xl px-5 py-7 flex items-start place-content-start gap-x-3 flex-wrap max-md:mt-24 max-md:w-full max-md:h-fit'>
          <span className='rounded-t-xl p-3 absolute font-semibold -top-16  -left-[1px] bg-primary-50 *:rounded-lg *:p-2 *:px-4 max-sm:w-full *:max-sm:w-1/3'>
            <button onClick={() => setSectionIndex(0)} className={sectionIndex == 0 && 'text-secondary-900 bg-primary-700 shadow-md'}>Frontend</button>
            <button onClick={() => setSectionIndex(1)} className={sectionIndex == 1 && 'text-secondary-900 bg-primary-700 shadow-md'}>Backend</button>
            {/* <button onClick={() => setSectionIndex(2)} className={sectionIndex == 2 && 'text-secondary-900 bg-primary-700 shadow-md'}>Ui Ux</button> */}
          </span>
          {sections[sectionIndex]}
        </div>
      )
}

const FrontSec = () => {
    return (
        <>
            <TechElem customClass="text-sm" text="Tailwind css"><SiTailwindcss className='text-lg'/></TechElem>
            <TechElem customClass="text-sm" text="Next js"><TbBrandNextjs className='text-lg'/></TechElem>
            <TechElem customClass="text-sm" text="React query"><SiReactquery className='text-lg'/></TechElem>
            <TechElem customClass="text-sm" text="React"><SiReact className='text-lg'/></TechElem>
            <TechElem customClass="text-sm" text="JS"><TbBrandJavascript className='text-lg'/></TechElem>
            <TechElem customClass="text-sm" text="HTML"><TbBrandHtml5 className='text-lg'/></TechElem>
            <TechElem customClass="text-sm" text="CSS"><TbBrandCss3 className='text-lg'/></TechElem>
            <TechElem customClass="text-sm" text="Typescript"><TbBrandTypescript className='text-lg'/></TechElem>
            <TechElem customClass="text-sm" text="Mui"><SiMui className='text-lg'/></TechElem>
        </>
    )
}

const BackSec = () => {
    return (
        <>
            <TechElem customClass="text-sm" text="Node js"><TbBrandNodejs className='text-lg'/></TechElem>
            <TechElem customClass="text-sm" text="Mongo DB"><BiLogoMongodb className='text-lg'/></TechElem>
            <TechElem customClass="text-sm" text="Restful API"><TbApi className='text-lg'/></TechElem>
            <TechElem customClass="text-sm" text="Express js"><SiExpress className='text-lg'/></TechElem>
            <TechElem customClass="text-sm" text="Nest js"><SiNestjs className='text-lg'/></TechElem>
        </>
    )
}

// const UiSec = () => {
//     return (
//         <>
//             <TechElem customClass="text-sm" text="Node js"><TbBrandNodejs className='text-lg'/></TechElem>
//             <TechElem customClass="text-sm" text="Mongo DB"><BiLogoMongodb className='text-lg'/></TechElem>
//             <TechElem customClass="text-sm" text="Restful API"><TbApi className='text-lg'/></TechElem>
//             <TechElem customClass="text-sm" text="Express js"><SiExpress className='text-lg'/></TechElem>
//             <TechElem customClass="text-sm" text="Nest js"><SiNestjs className='text-lg'/></TechElem>
//         </>
//     )
// }