import React, {useState} from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"



const SimpleGridGallery = ({data}) => {


  const [lightbox, setLightbox] = useState({
    lightboxVisible: false,
    selectedImage: ""
  });

  const handleClick = (index) => setLightbox(
    { lightboxVisible: true , selectedImage: index }, console.log(index)
  )
  
const toggleLightbox = () => setLightbox(
  {lightboxVisible: false,
  selectedImage: ""}
)

  const response = useStaticQuery(galleryQuery);
  const items = response.allFile.edges


    return (
    <>
    <section className="my-8 flex flex-wrap ">
         {items.map(({node:item}, index) => (
           <div>
           <a href="toggleLightbox" key={index} className="w-full md:w-1/2 lg:w-1/3 p-1">
               <Img className="thumbnail" fluid={item.childImageSharp.fluid} alt="Project Thumbnail" />
            </a>
            <button className="btn btn-primary" onClick={() => {handleClick(index)}}>
              Button {index}
            </button>
          </div>
          ))
         }
    </section>

    <div className={lightbox.lightboxVisible ? `opacity-100 flex bg-overlay fixed top-0 left-0 bottom-0 right-0 bottom-0 h-full justify-center align-middle z-50` : `opacity-0 hidden`}>
      <div className="bg-white max-w-screen-md dialog relative text-black p-4 ">
        <button onClick={toggleLightbox}>
          Close
        </button>

        {lightbox.selectedImage}
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
            ...GatsbyImageSharpFluid
          }
          id
          sizes {
            src
          }
        }
      }
    }
  }
}`