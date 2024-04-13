import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function NotFound() {

  const router = useRouter()  

  return (
    <section className='text-neutral-800 mx-auto w-fit flex flex-col items-center'>
        <p className='text-[20rem] font-bold mx-auto'>404</p>
        <p className='text-4xl font-semibold'>Page not found</p>
        <div className='flex gap-2 items-center mt-12'>
            <button onClick={() => router.back()} className='p-4 rounded-xl text-xl bg-white border shadow-xl'>Go back</button>
            <Link className='p-4 rounded-xl text-xl gradiant shadow-xl' href='/'>Go back to main page</Link>
        </div>
    </section>
  )
}