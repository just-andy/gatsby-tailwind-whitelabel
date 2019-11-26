import React from "react"
import "../utils/global.css"

import Header from "../components/Header"
import Hero from "../components/modules/media/HeroImage"
import Footer from "../components/Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Hero />
      <main className="container mx-auto">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
