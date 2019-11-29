import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

const DualCardsWrapper = styled.div`
  ${tw`flex flex-wrap text-center`};
`

const DualCardLeft = styled.div`
  ${tw`md:w-1/2 py-4 md:px-10 mb-4 md:mb-0`};
`

const DualCardRight = styled.div`
  ${tw`md:w-1/2 py-4 md:px-10 mb-4 md:mb-0 md:border-l`};
`

const DualCardsTitle = styled.h3`
  ${tw`text-2xl mb-3 font-heading`};
`

const DualCards = () => {
  return (
 
    <DualCardsWrapper>
      <DualCardLeft>
        <DualCardsTitle>No Bull$h*t</DualCardsTitle>
        <p>
          I've been helping hair and beauty therapists for over ten years
          promote their business online.
        </p>
      </DualCardLeft>
      <DualCardRight>
        <DualCardsTitle>Straight Answers</DualCardsTitle>
        <p>
          Multi-functional paper for various office needs. Snow-white sheets
          will shine bright like diamond for many years.
        </p>
      </DualCardRight>
    </DualCardsWrapper>

  )
}

export default DualCards
