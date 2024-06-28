import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function NotFound() {

  const router = useRouter()  

  return (
    <>
    <Head>
      <title>404</title>
      <meta name="description" content="Page not found"/>
    </Head>
    <section className='text-neutral-800 mx-auto w-fit flex flex-col items-center'>
        <p className='text-[20rem] font-bold mx-auto max-sm:text-[10rem] max-[400px]:text-8xl max-sm:mt-12 text-neutral-700'>404</p>
        <p className='text-4xl font-semibold max-sm:mt-6 max-sm:text-3xl'>Page not found</p>
        <div className='flex gap-2 items-center mt-12 sm:text-xl max-sm:flex-col-reverse font-semibold max-sm:px-8'>
            <button onClick={() => router.back()} className='p-4 rounded-xl  bg-white border shadow-xl max-sm:w-full max-sm:p-3'>Go back</button>
            <Link className='p-4 rounded-xl  gradiant shadow-xl max-sm:w-full max-sm:p-3' href='/'>Go back to main page</Link>
        </div>
    </section>
    </>
  )
}