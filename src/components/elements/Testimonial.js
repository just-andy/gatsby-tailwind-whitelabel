import React from 'react'

const Testimonial = props => {
    return (
    <section className="py-16 bg-secondary-500">
        <div className="text-center w-9/12 lg:w-1/2 mx-auto">
            <div className="text-xl lg:text-3xl mb-4 text-white"> {props.quote}</div>
            <cite className="text-secondary-100">{props.cite}</cite>
        </div>
    </section>
    )
}

export default Testimonial