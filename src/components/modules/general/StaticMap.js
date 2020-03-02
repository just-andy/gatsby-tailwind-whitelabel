import React from 'react'
import {graphql, useStaticQuery} from "gatsby"
import Img from "gatsby-image"

const StaticMap = () => {
  
const data = useStaticQuery(graphql`
query StaticMapQuery {
    staticMap {
        childFile {
            childImageSharp {
                fluid(maxWidth: 1080) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
}`)
return (
  <Img fluid={data.staticMap.childFile.childImageSharp.fluid} />
)

}

export default StaticMap