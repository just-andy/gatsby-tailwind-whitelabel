import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'


export const HalfImageContent = ({children}) => {
    return (
      <div className="py-8 md:flex">
        {children}
      </div>
    )
}

export const HalfContent = (props) => {
  return (
    <div class="flex items-center justify-center h-auto">
      <div class="md:p-8">
        {props.children}
      </div>
    </div>
  )
}

export const HalfImage = props => {

    const imagesResponse = useStaticQuery(ImageQuery)
    const images = imagesResponse.allFile.edges

   
    
    const getImagePath = (edges, imageName) => {
    
        const imagePath = edges.find(edge => {
            return edge.node.name === imageName
        })
            return imagePath.node.childImageSharp.fluid
        }

    return (
      <div className={`w-full md:w-1/2 md:${props.order}`}>
        <Img fluid={getImagePath(images, props.filename)} alt={props.alt} /> 
        </div>
    )
}


const ImageQuery = graphql`
query Images {
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