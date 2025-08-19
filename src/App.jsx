import React from 'react'
import Navber from './components/Navber'
import Header from './components/Header'
import IntroSection from './components/IntroSection'
import IntroSection2 from './components/IntroSection2'
// import Carousel from './components/Carousel '
import Footer from './components/Footer'
import Demo from './components/Demo'


const App = () => {
  return (
    <>
    <Navber />
    <Header />
    <IntroSection/>
    <IntroSection2/>
    {/* <Carousel/> */}
    <Demo/>
    <Footer/>
    </>
  )
}

export default App