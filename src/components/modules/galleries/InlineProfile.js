import React from "react"


const InlineProfile = props => {
    return (
        <div className="my-8 lg:mx-auto lg:flex lg:w-9/12 lg:justify-between">
            <figure className="mb-10  lg:w-240 lg:mr-8">
                <img alt="Profile headshot" src="https://via.placeholder.com/320" />
            </figure>
            <div className="lg:w-6/9">
                <div className="text-xl text-primary-500">{props.name}</div>
                <div className="text-gray-700">{props.blurb}</div>
            </div>
        </div>
    )
}

export default InlineProfile