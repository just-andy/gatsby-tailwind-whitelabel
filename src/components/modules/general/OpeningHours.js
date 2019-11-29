import React from "react"
import hours from "../../../data/openinghours.js"

const OpeningHours = () => {
    return (
        <>
        {hours.map((item,index) => {
            return(
            <li key={index}>
            {item.day} - {item.hours}
            </li>
            )
        })}
        </>
    )
}

export default OpeningHours