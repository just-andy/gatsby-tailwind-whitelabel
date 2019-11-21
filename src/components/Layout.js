import React from "react"
import "../utils/global.css"

import Header from "../components/Header"
import Footer from "../components/Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-2">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
