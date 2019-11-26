import React from 'react'

const ContentTestimonial = () => {
    return (
    <section className="py-8 px-4">
        <div className="flex flex-wrap items-center -mx-2">
            <div className="lg:w-2/5 px-2 lg:pr-16 mb-6 lg:mb-0">
                <h3>Welcome to Just Salons</h3>
                <p>This is a demo site of a fantasy salon to show how the site would work and how it could look with your content in here.</p>
                <p>This is just one example of how the page can look. We are working on a range of templates to pick on for each page type.</p>
            </div>
            <div className="lg:w-3/5 px-2 mb-6">
                <p className="text-3xl mb-4 text-gray-700"> This is where you would display a client testimonial showing how great you and your salon is.</p>
                <span href="#" className="text-secondary-700">Client Name, Location</span>
            </div>
        </div>
    </section>
    )
}

export default ContentTestimonial