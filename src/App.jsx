import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Activities from './components/Activities'
import About from './components/About'
import Programs from './components/Programs'
import FAQ from './components/FAQ'
import Teachers from './components/Teachers'
import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className='w-full  flex flex-col items-center justify-center'>
      <Navbar />
      <div className='w-full flex justify-center items-center' id="hero"><Hero /></div>
      <div className='w-full pt-70  flex justify-center items-center' id="activities"><Activities /></div>
      <div className='w-full pt-70  flex justify-center items-center' id="about"><About /></div>
      <div className='w-full pt-70  flex justify-center items-center' id="programs"><Programs /></div>
      <div className='w-full pt-70  flex justify-center items-center' id="faq"><FAQ /></div>
      <div className='w-full pt-70  flex relative justify-center items-center' id="teachers"><Teachers /></div>
      <div className='w-full pt-70  flex justify-center items-center' id="contact"><Contact /></div>
      <Footer />
    </div>

  )
}

export default App