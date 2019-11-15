import React from "react"
import { Link } from "gatsby"

import Navigation from "../components/modules/Navigation"

const Header = () => {
  return (
    <div className="container mx-auto">
      <div class="flex">
        <div className="w-1/2">
          <Link to="/">Logo</Link>
        </div>
        <div className="w-1/2">
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default Header
