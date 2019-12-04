import React from "react"
import {Link} from "gatsby"

const HeroImage = () => {

  return (
    <section className="text-center">
      <div className="bg-gray-300 py-8 lg:py-10">
          
            <div className="w-10/12 mx-auto lg:w-6/12">
                <h2 className="text-2xl mb-2 md:text-3xl lg:text-4xl lg:mb-8"> Book an appointment with one of our stylists online</h2>
                <Link to='book-now' className="btn btn-primary lg:text-2xl ">Book Online</Link>
            </div>
            
      </div>
    </section>
  )
}

export default HeroImage
