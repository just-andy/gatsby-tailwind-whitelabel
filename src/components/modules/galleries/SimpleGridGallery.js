import React from 'react'
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const GridGallery = styled.div`
    ${tw`w-full md:w-1/2 lg:w-1/3 p-2`};
`


const SimpleGridGallery = () => {


    return (
    <div className="flex flex-wrap">
       
        <GridGallery>
           <img className="thumbnail" alt="Placeholder"  src="https://via.placeholder.com/540x540.png?text=GalleryImage" />
        </GridGallery>
        <GridGallery>
           <img className="thumbnail" alt="Placeholder"   src="https://via.placeholder.com/540x540.png?text=GalleryImage" />
        </GridGallery>
        <GridGallery>
           <img className="thumbnail" alt="Placeholder"   src="https://via.placeholder.com/540x540.png?text=GalleryImage" />
        </GridGallery>
        <GridGallery>
           <img className="thumbnail" alt="Placeholder"   src="https://via.placeholder.com/540x540.png?text=GalleryImage" />
        </GridGallery>
        <GridGallery>
           <img className="thumbnail" alt="Placeholder"   src="https://via.placeholder.com/540x540.png?text=GalleryImage" />
        </GridGallery>
        <GridGallery>
           <img className="thumbnail" alt="Placeholder"   src="https://via.placeholder.com/540x540.png?text=GalleryImage" />
        </GridGallery>
        <GridGallery>
           <img className="thumbnail" alt="Placeholder"   src="https://via.placeholder.com/540x540.png?text=GalleryImage" />
        </GridGallery>
        <GridGallery>
           <img className="thumbnail" alt="Placeholder"   src="https://via.placeholder.com/540x540.png?text=GalleryImage" />
        </GridGallery>

    </div>
    )
}

export default SimpleGridGallery