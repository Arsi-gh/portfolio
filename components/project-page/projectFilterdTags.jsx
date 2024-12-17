import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { HiOutlineTrash } from "react-icons/hi2";
import { HiOutlineXMark } from "react-icons/hi2";

export default function ProjectFilterdTags() {

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
    <>
    <div className="p-2 flex flex-wrap gap-2 items-center">
        {Object.entries(router.query).map((que) => <TagItem key={que[0]} param={que}/>)}
    </div>
    <button onClick={() => router.replace('/projects')} className='p-3 w-full text-red-500 font-semibold flex justify-between items-center border-t hover:bg-zinc-50'>Remove tags<HiOutlineTrash className='text-2xl'/></button>
    </>
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
    <span className="p-1 px-2 rounded-full bg-zinc-100 border flex items-center font-semibold uppercase text-sm gap-x-1">
      {value === "true" ? 'descending' : value}
      <button onClick={() => removeParam()}>
        <HiOutlineXMark className='cursor-pointer text-xl text-zinc-600'/>
      </button>
    </span>
  )
}