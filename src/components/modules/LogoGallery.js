import React from 'react'
import { graphql, useStaticQuery } from "gatsby"


const LogoGallery = ({data}) => {

    const response = useStaticQuery(logoQuery)
    const logos = response.allFile.edges

    let formatName = (x) => {
      return x.slice(0, -4).replace("-", " ").replace("logos/", "")
    } 
    

    return (
    <section className="section-spacer">
        <h2 className="text-center font-heading"> Brands We Use</h2>
        <div className="flex flex-wrap">

            {logos.map(({node:item}) => (
                
                    <div key={item.id} className="w-1/2 md:w-1/6 mb-4 md:mb-0">
                        <img className="p-4" src={item.publicURL} alt={formatName(item.relativePath)+" logo"}/>
                    </div>
            ))}

        </div>
    </section>
    )
}

export default LogoGallery


export const logoQuery = graphql`
query logos {
    allFile(filter: {absolutePath: {regex: "/images/logos/"}}) {
      edges {
        node {
          id
          publicURL
          relativePath
        }
      }
    }
  }
`