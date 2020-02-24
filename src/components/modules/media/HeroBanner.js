import React from 'react'
import {Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const HeroBanner = props => {

  const response = useStaticQuery(bannerQuery);
  const banners = response.allFile.edges

  const getImagePath = (edges, imageName) => {
    const imagePath = edges.find(edge => {
      return edge.node.name = imageName
    })

    return imagePath.node.childImageSharp.fluid
  }


    return (
      <div className="relative lg:overflow-hidden  h-48 lg:h-64 w-full">
        <div className="absolute bg-cover bg-center top-0 ml-0 w-full">
        <Img fluid={getImagePath(banners, props.filename)} alt={props.alt} />
        </div>
        <div className="absolute w-full ">
            <div className=" text-center mx-auto w-10/12 lg:w-6/12  ">
            <h2 className="text-2xl text-white mb-2 md:text-3xl lg:text-4xl lg:mb-8">{props.title}</h2>
            <Link to={props.link} className="btn btn-primary lg:text-2xl ">{props.filename}</Link>
            </div>
        </div>
      </div>
    )
}

export default HeroBanner

export const bannerQuery = graphql`
query HeroBanners {
  allFile(filter: {relativeDirectory: {eq: "hero-banners"}}) {
    edges {
      node {
        name
        childImageSharp {
          fluid(maxWidth: 1080) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}`