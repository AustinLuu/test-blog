import Head from 'next/head'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Projects from '../components/Projects'
import Timeline from '../components/Timeline'
import Footer from '../components/Footer'
import Script from 'next/script'

const title = 'Portfolio – Austin Luu';

export default function Home() {
  return (
    
    <div className='App'>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Austin Luu - Portfolio" />
        <link rel="icon" href="static/images/logo.png" />
      </Head>
      <div id="root"></div><canvas id="canvas"></canvas>
      <Navbar/>
      <Header/>
      <About/>
      <Projects/>
      <Timeline/>
      <Footer/>
    <Script src="../static/script.js" />
    </div>
  )
}