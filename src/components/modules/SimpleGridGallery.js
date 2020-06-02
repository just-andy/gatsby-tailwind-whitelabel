import React, {useState} from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"


const SimpleGridGallery = ({data}) => {

  const[showLightbox, setLightbox] = useState(false);

  const toggleLightbox = () => {
    setLightbox(showLightbox => !showLightbox)

    console.log(showLightbox)
  }

  const response = useStaticQuery(galleryQuery);
  const items = response.allFile.edges


    return (
      <>
    <section className="my-8 flex flex-wrap ">

         {items.map(({node:item}) => (
           <div onClick={toggleLightbox} className="w-full md:w-1/2 lg:w-1/3 p-1">
               <Img className="thumbnail" fluid={item.childImageSharp.fluid} alt="Project Thumbnail" />
            </div>
         ))}
    </section>

    <div className={showLightbox ? `opacity-0 hidden` : `opacity-75 visible bg-overlay fixed top-0 left-0 bottom-0 right-0 bottom-0 h-full flex justify-center align-middle z-50`}>
      <div className="bg-white  relative text-black p-4 h-40 w-40">
        Content
        <button type="button" onClick={toggleLightbox}>
          Close
        </button>
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
        }
      }
    }
  }
}`