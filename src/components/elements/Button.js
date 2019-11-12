import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Link } from "gatsby"

const ButtonShape = styled.div`
  ${tw`bg-primary`};
  ${tw`text-yellow`};
  ${tw`p-3`};
  ${tw`my-2`};
  display: block;

  &:hover {
    ${tw`bg-secondary`};
  }
`

const Button = props => {
  return (
    <ButtonShape>
      <Link to={props.link}>{props.label}</Link>
    </ButtonShape>
  )
}

export default Button
