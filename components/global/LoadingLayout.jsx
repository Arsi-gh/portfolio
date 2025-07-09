import React, { useEffect } from 'react'
import { RiLoader4Fill } from "react-icons/ri";

export default function LoadingLayout() {

  useEffect(() => {
        window.addEventListener("load", function() {
            document.querySelector(".loading-wrapper").classList.add("hidden")
        }, false);
  } , [])

  return (
    <section className="loading-wrapper h-screen w-full bg-white z-50 fixed top-0 left-0 grid place-content-center">
        <RiLoader4Fill className='text-2xl animate-spin'/>
    </section>
  )
}