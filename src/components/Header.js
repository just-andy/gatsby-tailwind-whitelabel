import React from "react"
import { Link } from "gatsby"

import Navigation from "../components/modules/Navigation"

const Header = () => {
  return (
    <div className="container mx-auto px-2 py-4">
      <div className="flex flex-wrap items-center justify-between">
        <div>
          <Link to="/"><span className="text-3xl font-bold">Just Salons</span></Link>
        </div>
        <div className="">
         <Navigation />
        </div>
      </div>
    </div>
  )
}

export default Header
