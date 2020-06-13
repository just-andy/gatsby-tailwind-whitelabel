import React from "react"
import { Link } from "gatsby"

import Pages from "../../data/navigation"

const Navigation = () => {
  return (
    <ul className="md:flex md:flex-grow md:items-center w-full md:w-auto py-1">
      {Pages.map((page, index) => {
        return (
          <li key={index}>
            <Link
              to={page.url}
              activeClassName="active"
              className="block md:mr-4 md:mt-0  md:inline-block lg:mr-6"
            >
              {page.name}
            </Link>
          </li>
        )
      })}
      <li>
        <Link
          to="/book-now"
          className="btn btn-primary mt-0"
          activeClassName="btn-primary-active"
        >
          Book
        </Link>
      </li>
    </ul>
  )
}

export default Navigation
