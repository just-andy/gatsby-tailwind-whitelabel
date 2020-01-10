import React from "react"
import { Link } from "gatsby"

import Pages from "../../../data/navigation"

const Navigation = () => {
  return (
    <ul className="md:flex md:flex-grow md:items-center w-full md:w-auto">
      {Pages.map((page, index) => {
        return (
          <li key={index} className="py-1">
            <Link
              to={page.url}
              activeClassName="active"
              className="block md:inline-block mt-4 md:mt-0 mr-6"
            >
              {page.name}
            </Link>
          </li>
        )
      })}
      <li>
        <Link
          to="/book-now"
          className="btn btn-primary"
          activeClassName="btn-primary-active"
        >
          Book Now
        </Link>
      </li>
    </ul>
  )
}

export default Navigation
