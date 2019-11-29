import React from "react"

const HeroImage = () => {
  return (
    <section className="text-center mb-8">
      <div className="relative flex items-center py-32">
          <div className="absolute inset-0  bg-gray-300 ">
            <div className="z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl lg:text-5xl mb-4 leading-tight font-heading"> Book an appointment with one of our stylists online</h2>
                <a href="#" className="w-auto btn btn-primary">Book Online</a>
            </div>
          </div>
      </div>
    </section>
  )
}

export default HeroImage
