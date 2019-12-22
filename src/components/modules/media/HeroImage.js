import React from "react"
import {Link } from "gatsby"



const HeroImage = props => {

  const banner = props.banner
  const bannerUrl = '/hero-banners/'+banner+'.jpg'


  return (
  
    <section className="text-center mb-6 lg:mb-12">
      <div className="bg-gray-300 bg-scroll bg-cover bg-center py-8 lg:py-10" style ={ { backgroundImage: "url("+bannerUrl+")" } }>
          
            <div className="w-10/12 mx-auto text-white lg:w-6/12">
                <h2 className="text-2xl mb-2 md:text-3xl lg:text-4xl lg:mb-8"> Book an appointment with one of our stylists online</h2>
                <Link to='book-now' className="btn btn-primary lg:text-2xl ">Book Online</Link>
            </div>
            
      </div>
    </section>
  )
}

export default HeroImage
