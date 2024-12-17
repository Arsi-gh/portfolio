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
    <main className='sm:mt-28 max-h-[42rem] mt-20 2xl:max-w-screen-2xl max-w-screen-xl mx-auto max-xl:px-4 flex flex-col flex-wrap  gap-3 *:bg-white *:dark:bg-secondary-800 *:dark:border-zinc-600 *:shadow-lg *:dark:shadow-zinc-800'>
        <ClientInfo/>
        <ProjectInfo/>
        <ProjectTimer/>
        <ProjectContract/>
        <ProjectSteps/>
        <ProjectLinks/>
        <ProjectEdits/>
        <ProjectPreview/>
        <ProjectProgress/>
    </main>
    </>
  )
}