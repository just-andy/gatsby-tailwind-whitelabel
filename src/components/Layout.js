import React from "react"
import "../utils/global.css"

import Header from "../components/Header"
import Footer from "../components/Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container mx-auto">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
