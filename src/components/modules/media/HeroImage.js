import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const HeroWrapper = styled.div`
  ${tw`text-center bg-gray md:flex my-4`};
  height: 240px;
`
const Responsive = styled.div`
  width: 100%;
  height: auto;
`

const HeroImage = () => {
  return (
    <HeroWrapper>
      <div className=" display-block bg-center">
        <Responsive>
          <img
            className="z-0 position-absolute"
            src={`../../banner.jpg`}
            alt="Banner Images"
          />
        </Responsive>
        <div className="px-4 bg-black text-white z-10 position-relative">
          <h2>Hero Title</h2>
          <p>This is a summery of the page</p>
        </div>
      </div>
    </HeroWrapper>
  )
}

export default HeroImage
