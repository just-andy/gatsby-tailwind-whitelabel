import React from "react"
import "../utils/global.css"

import Header from "../components/Header"
import Footer from "../components/Footer"

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-2">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
