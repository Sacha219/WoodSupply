import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Materials from './components/Materials'
import HowWeWork from './components/HowWeWork'
import Portfolio from './components/Portfolio'
import SerialProduction from './components/SerialProduction'
import Partners from './components/Partners'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import { portfolio } from './data/portfolio'

function App() {
  useEffect(() => {
    document.title = 'WoodSupply — мебель и изделия из дерева на заказ'
  }, [])

  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Materials />
      <HowWeWork />
      <Portfolio items={portfolio} />
      <SerialProduction />
      <Partners />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App