import React, {useState} from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Lightbox from "fslightbox-react"


const FSGridGallery = ({data}) => {


  const [lightbox, setLightbox] = useState({
    toggler: false,
    selectedImage: 0
  });

  const handleClick = (image) => {
    setLightbox({ toggler: !lightbox.toggler , selectedImage: image})
  }


  const response = useStaticQuery(fsgalleryQuery);
  const items = response.allFile.edges
  
  let imageUrls = items.map(({node:image}) => image.childImageSharp.fluid.src )
 
    return (
    <>

<Lightbox toggler={lightbox.toggler} slide={lightbox.selectedImage} sources={imageUrls} />
  
      
      <section className="my-8 flex flex-wrap ">
          {items.map(({node:item}, index) => (
              <button className="w-full md:w-1/2 lg:w-1/3 p-1" onClick={() => {handleClick(index)}}  >
                <Img  key={index} className="thumbnail" fluid={item.childImageSharp.fluid} alt="Project Thumbnail" />
            </button>
            ))
          }
      </section>

    </>
    )
}

export default FSGridGallery


export const fsgalleryQuery = graphql`
query fsgallery {
  allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
    edges {
      node {
        childImageSharp {
         fluid(maxWidth: 1080) {
          originalName
          src
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}`