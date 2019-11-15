import React from "react"
import "../utils/global.css"

import Footer from "../components/Footer"

export const Layout = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
