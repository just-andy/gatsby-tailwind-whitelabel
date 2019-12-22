import React from 'react'
import {Link, graphql } from "gatsby"
import Image from "gatsby-image"


const Hero2 = () => {
    return (
    
        <div className="relative lg:overflow-hidden  h-48 lg:h-64 w-full">
            <div className="absolute top-0 ml-0 w-full">
                <img src={'/banner.jpg'} alt="This is a banner" />
            </div>
            <div className="absolute w-full ">
                <div className=" text-center mx-auto   w-9/12  ">
                <h2 className="text-2xl text-white mb-2 md:text-3xl lg:text-4xl lg:mb-8"> Book an appointment with one of our stylists online</h2>
                <Link to='book-now' className="btn btn-primary lg:text-2xl ">Book Online</Link>
                </div>
            </div>
        </div>

    )
}

export default Hero2