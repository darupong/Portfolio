import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'
import ResumeSection from '../components/ResumeSection'
import ExperianceSection from '../components/ExperianceSection'


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <div className=" bg-[#F8F9FA] py-[10px]">
      <ResumeSection />
      </div>
      <ExperianceSection />
    </div>
  )
}
