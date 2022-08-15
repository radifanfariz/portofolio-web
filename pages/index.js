import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Work from '../components/Work'
import Script from 'next/script'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contacts from '../components/Contacts'

export default function Home() {
  return (
    <div className="w-max xl:w-auto">
      <Head>
        <title>Radifan Fariz</title>
        <meta name="description" content="This is My Portofolio Web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <About></About>
      <Work></Work>
      <Skills></Skills>
      <Projects></Projects>
      <Contacts></Contacts>
    </div>
  )
}
