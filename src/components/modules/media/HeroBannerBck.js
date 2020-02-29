import React from 'react'
import {Link, graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image-es5'


const HeroBannerBck = props => {

  const response = useStaticQuery(bannerBckQuery);
  const banners = response.allFile.edges

  const getImagePath = (edges, imageName) => {

    const imagePath = edges.find(edge => {
      return edge.node.name === imageName
    })

 

    return imagePath.node.childImageSharp.fluid
  }


    return (
      <div className="block">
        <BackgroundImage
          Tag="section"
          fluid={getImagePath(banners, props.filename)}
          backgroundColor={`#040e18`}
          className="w-full lg:h-80"
        >
          
          <div className="">
            <div className=" mx-auto text-center w-10/12 lg:w-6/12 ">
              <h2 className="text-xl text-white mb-2 md:text-3xl lg:text-4xl lg:mb-8">{props.title}</h2>
              <Link to={props.link} className="btn btn-primary lg:text-2xl ">{props.label}</Link>
            </div> 
          </div>
        </BackgroundImage>
      </div>
    )
}

export default HeroBannerBck

export const bannerBckQuery = graphql`
query HeroBannersBck {
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