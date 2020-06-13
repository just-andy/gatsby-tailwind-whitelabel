import React from "react"
import SocialLinks from "./modules/SocialIconList"
import {graphql, useStaticQuery} from 'gatsby'

const Footer = ({data}) => {

  const response = useStaticQuery(SiteData)
  const info = response.site.siteMetadata

  return (
    <div className="bg-primary-100 w-full mt-12 lg:mt-12">
    <section className="container mx-auto section-spacer">
      <footer className="flex flex-wrap items-center justify-between text-gray-700">
        <div className="w-full text-center lg:w-auto lg:mr-6 mb-4 lg:mb-0">&copy;2019 {info.title} • Tel: {info.telephone}</div>
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