import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

export default function Faq() {

  const [currentIndex , setCurrentIndex] = useState()  

  return (
    <>
    <h3 className='title'>FAQ</h3>
    <section className='2xl:max-w-screen-2xl max-w-screen-xl mx-auto flex flex-col gap-4 md:my-12 my-6 items-center text-primary-700 max-md:px-4'>
        <Accordion id={1} current={currentIndex} setIndex={setCurrentIndex} title="Lorem ipsum dolor sit amet consectetur adipisicin ?" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ducimus ad esse unde consequatur modi sed quidem. Quis, voluptas. Architecto excepturi explicabo eligendi veniam alias soluta quam tempora? Ut, culpa."/>
        <Accordion id={2} current={currentIndex} setIndex={setCurrentIndex} title="Lorem ipsum dolor sit amet consectetur adipisicin ?" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ducimus ad esse unde consequatur modi sed quidem. Quis, voluptas. Architecto excepturi explicabo eligendi veniam alias soluta quam tempora? Ut, culpa."/>
        <Accordion id={3} current={currentIndex} setIndex={setCurrentIndex} title="Lorem ipsum dolor sit amet consectetur adipisicin ?" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ducimus ad esse unde consequatur modi sed quidem. Quis, voluptas. Architecto excepturi explicabo eligendi veniam alias soluta quam tempora? Ut, culpa."/>
    </section>
    </>
  )
}

const Accordion = ({id , title , text , current , setIndex}) => {

    const displayHandler = (accId) => {
        if (accId == current) {
            console.log('dsad')
            setIndex(0)
            return
        }
        setIndex(id)
    }

    return (
        <div onClick={() => displayHandler(id)} className='rounded-2xl cursor-pointer bg-secondary-800 w-[45rem] flex flex-col h-fit gap-y-2 p-5 border-2 border-primary-200 shadow-xl transition-all max-md:w-full'>
            <span className='flex justify-between items-center'>
                <p className='font-semibold text-lg max-sm:text-base'>{title}</p>
                <FiChevronDown className={`text-3xl transition-all ${id == current ? 'rotate-180' : 'rotate-0'}`}/>
            </span>
            <span className={`transition-all max-sm:text-sm duration-300  ${id == current ?  'max-h-32' : 'max-h-0 overflow-hidden -mt-3'}`}>
                <span className={`transition-all mt-2 delay-300 space-y-2 ${id == current ? 'opacity-100' : 'opacity-0'}`}>
                    <hr/>
                    <p>{text}</p>
                </span>
            </span>
        </div>
    )
}