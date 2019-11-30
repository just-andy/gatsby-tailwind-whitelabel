import React from "react"
import SocialLinks from "./modules/navigation/SocialIconList"

const Footer = () => {
  return (
    <section className="container mx-auto section-spacer mt-6">
      <footer className="flex flex-wrap items-center justify-between text-gray-700">
        <div className="w-full text-center lg:w-auto lg:mr-6 mb-4 lg:mb-0">&copy;2019 Just Salons • Tel: (+44)131 123 4567</div>
        <SocialLinks />
      </footer>
    </section>
  )
}

export default Footer
