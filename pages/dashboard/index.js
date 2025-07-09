import ClientInfo from '@/components/client-dashboard/clientInfo'
import ProjectInfo from '@/components/client-dashboard/projectInfo'
import ProjectTimer from '@/components/client-dashboard/projectTimer'
import Head from 'next/head'
import React from 'react'
import ProjectSteps from '@/components/client-dashboard/projectSteps'
import ProjectPreview from '@/components/client-dashboard/projectPreview'
import ProjectEdits from '@/components/client-dashboard/projectEdits'
import ProjectContract from '@/components/client-dashboard/projectContract'
import ProjectProgress from '@/components/client-dashboard/projectProgress'
import ProjectLinks from '@/components/client-dashboard/projectLinks'

export default function ClientDashboard() {
  return (
    <>
    <Head>
      <title>Client dashboard</title>
      <meta name="description" content="Client dashboard"/>
    </Head>
    <main className='
    2xl:max-w-screen-2xl max-w-screen-xl mx-auto
    mt-28 max-xl:px-4 gap-3 h-[50rem]
    *:bg-white *:dark:bg-secondary-800 *:dark:border-zinc-600 *:shadow-lg *:dark:shadow-zinc-800
    xl:flex xl:flex-col xl:flex-wrap xl:max-h-[42rem]
    grid grid-cols-repeat(16, minmax(0, 1fr)) grid-rows-[repeat(16, minmax(0, 1fr))] col-start-1 col-end-3 row-start-1 row-end
    '>
        <ClientInfo resCss=""/>
        <ProjectInfo resCss=""/>
        <ProjectTimer resCss=""/>
        <ProjectContract resCss=""/>
        <ProjectSteps resCss=""/>
        <ProjectLinks resCss=""/>
        <ProjectEdits resCss=""/>
        <ProjectPreview resCss=""/>
        <ProjectProgress resCss=""/>
    </main>
    </>
  )
}