import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import socialIcons from "../../../data/socialicons"

const InlineList = styled.ul`
  ${tw`my-2 text-3xl flex justify-center text-center mx-auto lg:text-right lg:mx-0`};
`

const SocialIconList = () => {
  return (
    <InlineList>
      {socialIcons.map((item, index) => {
        return (
          <li key={index} className="pr-3">
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          </li>
        )
      })}
    </InlineList>
  )
}

export default SocialIconList
