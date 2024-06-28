import React, { useState } from 'react'
import FilterModal from '../modals/filterModal'
import { GoSortDesc } from "react-icons/go";
import { IoOptions } from "react-icons/io5";
import SortModal from '../modals/sortModal';

export default function ResponsiveFilter() {

  const [displayFilter , setDisplayFilter]  = useState(false)
  
  const [displaySort , setDisplaySort] = useState(false)

  return (
    <>
    <div className='md:hidden flex gap-1 text-neutral-800 font-semibold mt-2'>
        <button onClick={() => setDisplayFilter(true)} className='flex-1 p-2 rounded-lg bg-white bg-opacity-70 dark:bg-opacity-0 text-primary-800 dark:border-2 dark:border-zinc-400 shadow-md border flex gap-2 items-center justify-between'>Filter<IoOptions className='text-2xl'/></button>
        <button onClick={() => setDisplaySort(true)} className='flex-1 p-2 rounded-lg bg-white bg-opacity-70 dark:bg-opacity-0 text-primary-800 dark:border-2 dark:border-zinc-400 shadow-md border flex gap-2 items-center justify-between'>Sort<GoSortDesc className='text-2xl'/></button>
    </div>
    <FilterModal display={displayFilter} displayHandler={setDisplayFilter}/>
    <SortModal display={displaySort} displayHandler={setDisplaySort}/>
    </>
  )
}

