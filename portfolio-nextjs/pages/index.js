import Head from 'next/head'
import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Caleb - Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Main />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
