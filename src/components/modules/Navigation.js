import React from "react"
import { Link } from "gatsby"

import Pages from "../../data/navigation"

const Navigation = () => {
  return (
    <nav>
      <ul className="flex justify-between">
        {Pages.map((page, index) => {
          return (
            <li key={index}>
              <Link to={page.url} activeClassName="active">
                {page.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navigation
