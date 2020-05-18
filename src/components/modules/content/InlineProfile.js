import React from "react"


const InlineProfile = props => {
    return (
        <div className="lg:flex lg:justify-between">
            <figure className="lg:w-3/12 lg:mr-8">
                <img className="thumbnail mx-auto" alt="Profile headshot" src={'/content/profile-avatar.jpg'} />
            </figure>
            <div className="lg:w-9/12">
                <h3>{props.name}</h3>
                <div className="text-gray-700">{props.blurb}</div>
            </div>
        </div>
    )
}

export default InlineProfile