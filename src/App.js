import React from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './components/home/home'

export default function App() {
  return (
    <div>
      <Header />
          <div className="container">
          <Home/>
          </div>
      <Footer />
    </div>
  )
}

