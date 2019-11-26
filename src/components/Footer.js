import React from "react"
import SocialLinks from "./modules/navigation/SocialIconList"

const Footer = () => {
  return (
    <section className="container mx-auto section-spacer">
      <footer className="flex flex-wrap items-center justify-between">
        <div className="w-full text-center lg:w-auto lg:mr-6 mb-4 lg:mb-0">&copy;2019 Social Icons</div>
        <SocialLinks />
      </footer>
    </section>
  )
}

export default Footer
