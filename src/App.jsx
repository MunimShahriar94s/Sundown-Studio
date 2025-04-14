import ScrollThumb from './Components/ScrollThumb/ScrollThumb'
import Hero from './Components/Hero/Hero'
import SecondSec from './Components/SecondSec/SecondSec'
import ThirdSec from './Components/ThirdSec/ThirdSec'
import FourthSec from './Components/FourthSec/FourthSec'
import FifthSec from './Components/FifthSec/FifthSec'
import Swiper from "./Components/Swiper/Swiper"
import './App.css'
import Lenis from 'lenis'
import { useEffect} from 'react'

  

function App() {
  useEffect(() => {
     const lenis = new Lenis();
     function raf(time){
      lenis.raf(time)
      requestAnimationFrame(raf)
     }
     requestAnimationFrame(raf)

  }, [])
  

  return (
    <>
      <Hero />
      <SecondSec />
      <ThirdSec />
      <FourthSec />
      <FifthSec />
      <Swiper></Swiper>
      <ScrollThumb />
    </>
  )
}

export default App
