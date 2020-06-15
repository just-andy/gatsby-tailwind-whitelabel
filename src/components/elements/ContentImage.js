import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'

const ContentImage = props => {

    const imagesResponse = useStaticQuery(ContentImageQuery)
    const images = imagesResponse.allFile.edges

    
    const getImagePath = (edges, imageName) => {
    
        const imagePath = edges.find(edge => {
            return edge.node.name === imageName
        })
            return imagePath.node.childImageSharp.fluid
        }

    return (
        <>
        <Img fluid={getImagePath(images, props.filename)} alt={props.alt} /> 
        </>
    )
}

export default ContentImage

const ContentImageQuery = graphql`
query ContentImages {
    allFile(filter: {relativeDirectory: {eq: "content"}}) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 500, quality: 95) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`