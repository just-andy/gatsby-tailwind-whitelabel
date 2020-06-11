import React, {useState} from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"



const SimpleGridGallery = ({data}) => {


  const [lightbox, setLightbox] = useState({
    lightboxVisible: false,
    selectedImage: {}
  });

  const handleClick = (e, image) => {
    e.preventDefault()
    setLightbox({ lightboxVisible: true , selectedImage: image, })
  }
  
const toggleLightbox = () => setLightbox(
  {lightboxVisible: false,
  selectedImage: {}
}
)

  const response = useStaticQuery(galleryQuery);
  const items = response.allFile.edges


    return (
    <>
    <section className="my-8 flex flex-wrap ">
         {items.map(({node:item}, index) => (
           
     
           <a href={item.childImageSharp.id} onClick={(e) => {handleClick(e, item.childImageSharp.fluid, item.childImageSharp.sizes.src)}} key={index} className="w-full md:w-1/2 lg:w-1/3 p-1">
               <Img className="thumbnail" fluid={item.childImageSharp.fluid} alt="Project Thumbnail" />
            </a>
    
          ))
         }
    </section>

    <div className={lightbox.lightboxVisible ? `opacity-100 fixed bg-overlay fixed top-0 left-0 bottom-0 right-0 bottom-0 h-full` : `opacity-0 hidden`}>
      <div className="bg-white">
          <div className="flex h-6 my-6 justify-between max-w-md">
            <div>{lightbox.selectedImage.originalName}</div>
            <button onClick={toggleLightbox}>
              Close
            </button>
            </div>
       
          <Img className="w-1/2" fluid={lightbox.selectedImage} alt="selected" />
      </div>
    </div>
    </>
    )
}

export default SimpleGridGallery


export const galleryQuery = graphql`
query gallery {
  allFile(filter: {sourceInstanceName: {eq: "gallery"}}) {
    edges {
      node {
        childImageSharp {
         fluid(maxWidth: 1080) {
          originalName
            ...GatsbyImageSharpFluid
          }
          sizes {
            src
          }
        }
      }
    }
  }
}`