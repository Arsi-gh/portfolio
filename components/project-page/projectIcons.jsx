import { SiJest, SiMui, SiReact, SiReactquery, SiTailwindcss, SiThreedotjs } from "react-icons/si";
import TechElem from "../global/TechElement";
import { TbApi, TbBrandCss3, TbBrandHtml5, TbBrandJavascript, TbBrandNextjs, TbBrandRedux, TbBrandSass, TbBrandTypescript, TbRegex } from "react-icons/tb";
import { CgFormatLeft } from "react-icons/cg";
import { FaAws } from "react-icons/fa";
import { BiLogoGit, BiLogoMongodb } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import { LuFileJson } from "react-icons/lu";

import { IoLogoPwa } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BiFoodMenu } from "react-icons/bi";
import { RiUserLine } from "react-icons/ri";
import { RiDashboard2Line } from "react-icons/ri";
import { MdOutlineWeb } from "react-icons/md";


export const icons = [
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Tailwind css"><SiTailwindcss className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Next js"><TbBrandNextjs className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="React js"><SiReact className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Typescript"><TbBrandTypescript className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Mui"><SiMui className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Formik"><CgFormatLeft className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="React query"><SiReactquery className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Javascript es13"><TbBrandJavascript className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="HTML 5"><TbBrandHtml5 className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="CSS 3"><TbBrandCss3 className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Regex"><TbRegex className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Figma"><FiFigma className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Sass"><TbBrandSass className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Git"><BiLogoGit className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Mongo DB"><BiLogoMongodb className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Restful API"><TbApi className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Three.js"><SiThreedotjs className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Redux"><TbBrandRedux className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Jest"><SiJest className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Aws"><FaAws className='text-2xl max-sm:text-lg'/></TechElem>,
    <TechElem customClass="max-sm:text-sm max-sm:p-2" text="Json server"><LuFileJson className='text-2xl max-sm:text-lg'/></TechElem>,
]

export const typeIcons = [
    <RiShoppingCart2Line className="text-xl"/>,
    <IoLogoPwa className="text-xl"/>,
    <MdOutlineWeb className="text-xl"/>,
    <RiDashboard2Line className="text-xl"/>,
    <BiFoodMenu className="text-xl"/>,
    <RiUserLine className="text-xl"/>,
]

// 0 => Tailwind
// 1 => Next
// 2 => React
// 3 => Typescript
// 4 => Mui
// 5 => Formik
// 6 => React query
// 7 => Javascript
// 8 => HTML
// 9 => CSS
// 10 => Regex
// 11 => Figma
// 12 => Sass
// 13 => Git
// 14 => Mongo
// 15 => Restful
// 16 => Three
// 17 => Redux
// 18 => Jest
// 19 => Aws
// 20 => json server
