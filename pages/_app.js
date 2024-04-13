import '@/styles/globals.css'
import "/components/home-ui/skillChart/skillChart.css"
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

export default function App({ Component, pageProps }) {
  return (
    <RefsProvider>
      <NextNProgress color="#404040"/>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </RefsProvider>
  )
}
