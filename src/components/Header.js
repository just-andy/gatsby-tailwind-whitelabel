import React, { useState } from "react"
import { Link } from "gatsby"

import Navigation from "./modules/navigation/Navigation"

const Header = () => {
  const [isOpen, setNav] = useState(false)
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  console.log(isOpen)

  return (
    <div className="container mx-auto py-4">
      <div className="md:flex md:justify-between">
        <div className="flex justify-between">
          <Link to="/">
            <span className="text-3xl font-bold">Just Salons</span>
          </Link>
          <button
            type="button"
            className="btn btn-primary my-1 md:hidden"
            onClick={toggleNav}
          >
            Menu
          </button>
        </div>

        <div
          className={isOpen ? `block md:block transition` : `hidden md:block`}
        >
          <Navigation />
        </div>
      </div>
    </div>
  )
}

export default Header
