import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Img from 'gatsby-image'


const CardItem = props => {

const response = useStaticQuery(CardItemQuery)
const cardItems = response.allFile.edges

console.log(cardItems)

const getImagePath = (edges, imageName) => {

    const imagePath = edges.find(edge => {
        return edge.node.name === imageName
    })
        return imagePath.node.childImageSharp.fluid
    }

const gutter = (i) => {
    return (i % 2) ? "w-full mb-8 md:w-1/2 " : "w-full  mb-8 md:pr-4  md:w-1/2";
}

    return (
    <div className={gutter(props.key)}>
        <Img className="my-4" fluid={getImagePath(cardItems, props.filename)} alt={props.alt} />
        <h2>{props.name}</h2>
        <p>{props.text}</p>
    </div>
    )
}

export default CardItem

export const CardItemQuery = graphql`
query CardItems {
  allFile(filter: {relativeDirectory: {eq: "services"}}) {
    edges {
      node {
        name
        childImageSharp {
          fluid(maxWidth: 640, quality: 95) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}`