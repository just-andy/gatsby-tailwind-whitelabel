import React from "react"
import {TiStarburstOutline, TiScissorsOutline} from "react-icons/ti"
import {Link} from "gatsby"
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
        <TiStarburstOutline className="mx-auto mb-3 text-5xl fill-current text-primary" />
        <DualCardsTitle>Special Offers</DualCardsTitle>
        <p>
          It's a great idea to call out special offers or promotions on your homepage. Whether people find the site organically or directed of social media, it is a great shop window.
        </p>
        <Link to="book-now" className="btn btn-hollow">View Offers</Link>

      </DualCardLeft>
      <DualCardRight>
        <TiScissorsOutline className="mx-auto mb-3 text-5xl fill-current text-secondary" />
        <DualCardsTitle>Key Services</DualCardsTitle>
        <p>
          Call out your key services or a page you want to direct people to in this section. Icons and images can be added on top to draw the users eye.
        </p>
        <Link to="/about" className="btn btn-hollow">More Info</Link>
      </DualCardRight>
    </DualCardsWrapper>

  )
}

export default DualCards
