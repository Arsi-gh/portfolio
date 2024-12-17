import React from 'react'
import { CgSearch } from 'react-icons/cg';
import { IoIosCalendar } from "react-icons/io";
import { LuCode2 } from "react-icons/lu";
import { BsStars } from "react-icons/bs";

const steps = [
  {id : 1 , title : "Search" , image : "/images/progress/search.jpg" , icon : <CgSearch/> , text : "At the outset of our contract, utilizing the information you’ve provided, we will conduct thorough research to gain a deeper understanding of your business and brand identity."},
  {id : 2 , title : "Planning" , image : "/images/progress/plan.jpg" , icon : <IoIosCalendar/> , text : "Before we begin, in the first two or three days, a comprehensive roadmap of the project will be designed and sent to you. The project will proceed step by step, following the established plan."},
  {id : 3 , title : "Develop" , image : "/images/progress/develop.jpg" , icon : <LuCode2/> , text : "During the project’s development, you will receive regular updates on its progress."},
  {id : 4 , title : "Final" , image : "/images/progress/final.jpg" , icon : <BsStars/> , text : "Once the project is complete, if you have any new ideas or changes, we will review them in accordance with the terms of the contract."},
]

export default function WorkSteps() {
  return (
    <>
    <h3 className='title'>How job gets done </h3>
    <section className='2xl:w-[1536px] xl:w-[1280px] sm:px-12 max-lg:max-w-screen-lg mx-auto my-12 mb-24 flex gap-4 max-lg:grid max-lg:grid-cols-2 max-sm:px-4 max-sm:grid-cols-1'>
      {steps.map(step => <Step key={step.id} name={step.title} img={step.image} text={step.text} icon={step.icon}/>)}
    </section>
    </>
  )
}

const Step = ({img , name , text , icon}) => {
  return (
    <figure className='lg:w-1/4 lg:hover:w-1/2 rounded-2xl 2xl:h-72 h-60 max-md:h-72 relative overflow-hidden transition-all duration-500  group max-sm:h-56'>
      <img loading='lazy' src={img} alt={name} className='w-full h-full absolute top-0 left-0 object-cover'  />
      <figcaption className='w-full h-full absolute left-0 top-0 p-8 z-10 bg-neutral-800 bg-opacity-70 text-white transition-all group-hover:bg-opacity-90 group-hover:backdrop-blur-sm max-sm:p-4'>
        <span className='flex items-center gap-x-3 text-3xl sm:min-w-[2rem] max-sm:text-xl'>
          {icon}
          <p className='text-3xl font-semibold max-sm:text-xl'>{name}</p>
        </span>
        <p className='text-lg mt-3 max-sm:text-base line-clamp-5 max-xl:line-clamp-4 max-md:line-clamp-6'>{text}</p>
      </figcaption>
    </figure>
  )
}