import React from "react"
import "../utils/global.css"

export const Layout = ({ children }) => {
  return <div className="container mx-auto px-4">{children}</div>
}

export default Layout
