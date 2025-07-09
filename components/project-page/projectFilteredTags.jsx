import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { HiOutlineTrash } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";

export default function ProjectFilteredTags() {

  const [displayTags , setDisplayTags] = useState(false)

  const router = useRouter();

  useEffect(() => {
    if (!Object.entries(router.query).length){
      setDisplayTags(false)
      return
    }
    setDisplayTags(true)
  } , [router])

  if (displayTags) return (
    <nav className='max-md:flex max-md:items-center max-md:flex-row-reverse'>
      <div className="p-2 flex gap-2 items-center md:flex-wrap max-md:flex-1 overflow-auto">
          {Object.entries(router.query).map((que) => <TagItem key={que[0]} param={que}/>)}
      </div>
      <button onClick={() => router.replace('/projects')} className='
        text-red-500 font-semibold bg-secondary-800/70 border-t border-secondary-700 flex justify-between gap-x-1 items-center hover:bg-primary-100
        md:border-t md:w-full md:p-3 
        max-md:flex-row-reverse max-md:rounded-full max-md:text-sm max-md:py-2 max-md:px-3 max-md:border
      '>
        Remove tags<HiOutlineTrash className='md:text-2xl text-lg'/>
      </button>
    </nav>
  )
}

const TagItem = ({param}) => {

  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const key = param[0]
  const value = param[1]  

  if (key === "techs") return

  const removeParam = () => {
    const nextSearchParams = new URLSearchParams(searchParams.toString())
    nextSearchParams.delete(key)
    router.replace(`${pathname}?${nextSearchParams}`)
  }

  return (
    <span className="
    p-1 px-2 rounded-full bg-secondary-800/70 text-primary-700 border border-secondary-700 flex items-center font-semibold uppercase text-sm gap-x-1
    max-md:p-2
    ">
      {value === "true" ? 'descending' : value}
      <button onClick={() => removeParam()}>
        <HiOutlineXMark className='cursor-pointer text-xl text-zinc-600'/>
      </button>
    </span>
  )
}