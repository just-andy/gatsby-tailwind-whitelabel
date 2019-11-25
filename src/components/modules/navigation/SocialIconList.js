import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"

import socialIcons from "../../../data/socialicons"

const InlineList = styled.ul`
  ${tw`my-2`};
  ${tw`text-3xl`};
  ${tw`flex justify-center`};
`

const SocialIconList = () => {
  return (
    <InlineList>
      {socialIcons.map((item, index) => {
        return (
          <li className="pr-3">
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
