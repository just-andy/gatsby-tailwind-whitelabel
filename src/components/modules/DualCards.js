import React from "react"
import {TiStarburstOutline } from "react-icons/ti"
import {Link} from "gatsby"


export const DualCardsContent = ({children}) => {
  return (
 
    <div className="flex flex-wrap text-center">
        {children}
    </div>

  )
}


export const DualCardItem = props => {
  return(
    <div className="w-full md:w-1/2 py-10 md:py-20 md:px-10 mb-4 md:mb-0">
      <div className="mx-auto text-center w-12 h-12 mb-3 text-5xl fill-current">
        <TiStarburstOutline />
      </div>
      <h3 className="text-2xl mb-3 font-heading">{props.title}</h3>
      <div className="mb-3 text-primary">
      {props.content}
      </div>
      <Link to={props.link} className="btn btn-hollow">{props.linkText}</Link>
  </div>
  )
}
