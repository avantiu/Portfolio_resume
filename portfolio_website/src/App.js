import React from 'react'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skill/Skills'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Contact />
    </>
  )
}

export default App