import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-between">
        <li>
          <Link to="">Home</Link>
        </li>
        <li>
          <Link to="">About</Link>
        </li>
        <li>
          <Link to="">Prices</Link>
        </li>
        <li>
          <Link to="">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
