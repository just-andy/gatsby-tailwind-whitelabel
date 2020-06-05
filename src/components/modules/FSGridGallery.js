import React, {useState} from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Lightbox from "fslightbox-react"


const FSGridGallery = ({data}) => {

  const [lightbox, setLightbox] = useState({
    lightboxVisible: false,
    selectedImage: ""
  });


  const handleClick = (e, image) => {
    e.preventDefault()
    setLightbox({ lightboxVisible: true , selectedImage: image})
  }

  const resetLightbox = () => {
    setLightbox({ lightboxVisible: false  })
    console.log(lightbox.lightboxVisible)
  }

  const response = useStaticQuery(fsgalleryQuery);
  const items = response.allFile.edges
  
  let imageUrls = items.map(({node:image}) => image.childImageSharp.fluid.src )
 
    return (
    <>

<Lightbox toggler={lightbox.lightboxVisible} slide={lightbox.selectedImage} sources={imageUrls} onClose={resetLightbox} />
  
      
      <section className="my-8 flex flex-wrap ">
          {items.map(({node:item}, index) => (
              <a className="w-full md:w-1/2 lg:w-1/3 p-1" href={item.childImageSharp.fluid.src}  onClick={(e) => {handleClick(e, index)}}  >
                <Img  key={index} className="thumbnail" fluid={item.childImageSharp.fluid} alt="Project Thumbnail" />
            </a>
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