import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const HeroWrapper = styled.div`
  ${tw`text-center bg-gray flex my-4`};
  height: 240px;
`

const HeroImage = () => {
  return (
    <HeroWrapper>
      <div className="bg-gray-400 width-1/4 text-white text-left p-2">
        <div className="container mx-auto px-4">
          <h2>Hero Title</h2>
          <p>This is a summery of the page</p>
        </div>
      </div>
    </HeroWrapper>
  )
}

export default HeroImage
