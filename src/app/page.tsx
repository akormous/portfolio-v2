import { Hero } from '@/components/Hero'
import { Navbar } from '@/components/Navbar'
import { Projects } from '@/components/Projects'
import { Contact } from '@/components/Contact'
import Image from 'next/image'
import projects from '../data/projects.json'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Projects projectList={projects}/>
    <Contact />
    <Footer />
    </>
  )
}
