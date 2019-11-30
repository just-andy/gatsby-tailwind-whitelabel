import React from 'react'
import Testimonial from "../content/Testimonial"

const ContentTestimonial = () => {

    const myQuote = "This is where you can let customers know what great things other clients have said about you."
    const myCitation = "Andy, Edinburgh"

    return (
    <section className="section-spacer">
        <div className="flex flex-wrap items-center -mx-2">
            <div className="lg:w-2/5 px-2 lg:pr-16 mb-6 lg:mb-0">
                <h3>Welcome to Just Salons</h3>
                <p>This is a demo site of a fantasy salon to show how the site would work and how it could look with your content in here.</p>
                <p>This is just one example of how the page can look. We are working on a range of templates to pick on for each page type.</p>
            </div>
            <div className="lg:w-3/5 px-2 mb-6">
                <div className="w-9/12 mx-auto lg:w-full">
                <Testimonial quote={myQuote} cite={myCitation} />
                </div>
            </div>
        </div>
    </section>
    )
}

export default ContentTestimonial