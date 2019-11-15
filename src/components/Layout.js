import React from "react"
import "../utils/global.css"

import Header from "../components/Header"
import Hero from "../components/modules/HeroImage"
import Footer from "../components/Footer"

export const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <Hero />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
