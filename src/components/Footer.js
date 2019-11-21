import React from "react"
import SocialLinks from "../components/modules/SocialIconList"

const Footer = () => {
  return (
    <footer className="container mx-auto py-6 px-2 flex justify-between">
      <div className="leading-loose">&copy;2019 Social Icons</div>
      <SocialLinks />
    </footer>
  )
}

export default Footer
