import React from "react"
import { Link } from "gatsby"

import Navigation from "../components/modules/Navigation"

const Header = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between py-8">
      <div className="flex flex-shrink-0 mr-6">
        <Link to="/">Just Salons</Link>
      </div>
      <Navigation />
    </nav>
  )
}

export default Header
