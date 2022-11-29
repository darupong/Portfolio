import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutMe />
    </div>
  )
}
