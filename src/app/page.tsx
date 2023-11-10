import { Fragment } from 'react'
import Navbar from '../components/home/Navbar'
import Hero from '../components/home/Hero'
import About from '../components/home/About'
import Skills from '../components/home/Skills'
import Projects from '../components/home/Projects'
import Experiences from '../components/home/Experiences'
import Educations from '../components/home/Educations'
import Contact from '../components/home/Contact.jsx'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Musavi Ardabilly',
}

export default function Home() {
  return (
    <Fragment>
      <div className='relative'>
        <Navbar />
        <div className='content-container mx-auto'>
          <Hero />
          <About />
          <Experiences />
          <Skills />
          <Projects/>
          <Educations />
          <Contact />
        </div>
      </div>
    </Fragment>
  )
}
