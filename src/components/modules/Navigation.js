import React from "react"
import { Link } from "gatsby"

import Pages from "../../data/navigation"

const Navigation = () => {
  return (
    <ul className="lg:flex lg:flex-grow lg:items-center w-full lg:w-auto">
      {Pages.map((page, index) => {
        return (
          <li key={index}>
            <Link
              to={page.url}
              activeClassName="active"
              className="block lg:inline-block mt-4 lg:mt-0 mr-10 text-blue-900 hover:text-black"
            >
              {page.name}
            </Link>
          </li>
        )
      })}
      <li>
        <Link
          to="/"
          className="inline-block py-3 px-6 mt-4 lg:mt-0 leading-none text-white bg-primary hover:bg-secondary rounded shadow"
        >
          Book Now
        </Link>
      </li>
    </ul>
  )
}

export default Navigation
