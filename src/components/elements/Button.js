import React from "react"
import styled from "@emotion/styled"
import tw from "tailwind.macro"
import { Link } from "gatsby"

const ButtonShape = styled.a`
  ${tw`bg-primary`};
  ${tw`text-secondary`};
  ${tw`p-2`};
  ${tw`my-2`};
  display: block;
`

const Button = props => {
  return (
    <Link to={props.link}>
      <ButtonShape>{props.label}</ButtonShape>
    </Link>
  )
}

export default Button
