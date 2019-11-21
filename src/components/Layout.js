import React from "react"
import "../utils/global.css"

import Header from "../components/Header"
import Footer from "../components/Footer"

export const Layout = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <div className="my-10">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
