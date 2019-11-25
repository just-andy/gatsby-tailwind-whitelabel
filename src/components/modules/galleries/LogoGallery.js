import React from 'react'

const LogoGallery = () => {

    var logos = ['Jake', 'Jon', 'Thruster', 'jack', 'bob', "andy"];

    return (
        <section className="p-4">
            <h2 className="text-center mb-6 font-heading"> Brands We Use</h2>
            <div className="flex flex-wrap -mx-8">
                {logos.map((logo, index) => {
                    return (
                        <div key={index} className="w-1/3 md:w-1/6 px-8 mb-4 md:mb-0">
                            {logo}
                        </div>
                    )

                })}
            </div>
        </section>
    )
}

export default LogoGallery