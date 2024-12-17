import '@/styles/globals.css'
import "/components/home-ui/skillChart/chart.css"
import "/components/home-ui/tech/tech.css"
import "/components/home-ui/story/story.css"
import "/components/home-ui/projects/project.css"
import "/components/home-ui/comments/comments.css"
import NextNProgress from 'nextjs-progressbar';

import Header from '@/components/global/header'
import Footer from '@/components/global/footer'

import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import RefsProvider from '@/context/refsProvider'
import ProjectsProvider from '@/context/projectsProvider'
import Head from 'next/head'
import { DarkModeProvier } from '@/context/darkModaProvider'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="meta"/>
        <link rel="shortcut icon" href="" />
    </Head>
    <DarkModeProvier>
      <RefsProvider>
        <ProjectsProvider>
          <NextNProgress color="#404040"/>
          <Header/>
          <Component {...pageProps} />
          <Footer/>
        </ProjectsProvider>
      </RefsProvider>
    </DarkModeProvier>
    </>
  )
}
