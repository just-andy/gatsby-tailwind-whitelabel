import React from 'react'

const LogoGallery = () => {

    var logos = ['redken', 'tresemme', 'Thruster', 'jack', 'bob', "andy"];

    return (
    <section className="section-spacer">
        <h2 className="text-center mb-6 font-heading"> Brands We Use</h2>
        <div className="flex flex-wrap -mx-8">
            {logos.map((logo, index) => {
                return (
                    <div key={index} className="w-1/3 md:w-1/6 px-8 mb-4 md:mb-0">
                        <img src={"images/placeholders/" + logo + ".svg"} alt={logo + " Logo"} />
                    </div>
                )
            })}
        </div>
    </section>
    )
}

export default LogoGallery