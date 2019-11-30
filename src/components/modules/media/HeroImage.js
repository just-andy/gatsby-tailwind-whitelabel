import React from "react"
import {Link} from "gatsby"

const HeroImage = () => {

  return (
    <section className="text-center">
      <div className="relative flex items-center py-32">
          <div className="absolute inset-0  bg-gray-300 ">
            <div className="z-10 max-w-2xl mx-auto">
                <h2 className="text-4xl leading-tight lg:text-5xl lg:mb-8 "> Book an appointment with one of our stylists online</h2>
                <Link className="w-auto btn btn-primary lg:text-2xl">Book Online</Link>
            </div>
          </div>
      </div>
    </section>
  )
}

export default HeroImage
