import React from "react"
import SocialLinks from "./modules/SocialIconList"


const Footer = ({data}) => {



  return (
    <div className="bg-primary-100 w-full">
    <section className="container mx-auto section-spacer">
      <footer className="flex flex-wrap items-center justify-between text-gray-700">
        <div className="w-full text-center lg:w-auto lg:mr-6 mb-4 lg:mb-0">&copy;2019 Whitelabel • Tel: 012312</div>
        <SocialLinks />
      </footer>
    </section>
    </div>
  )
}

export default Footer

const SiteData = graphql`
query siteMeta {
  site {
    siteMetadata {
      title
      telephone
    }
  }
}
`;