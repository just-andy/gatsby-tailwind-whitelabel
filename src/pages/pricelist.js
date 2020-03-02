import React from "react"
import Hero from "../components/modules/media/HeroBannerBck"
import Layout from "../components/Layout"
import Pricelist from "../components/modules/SimplePricelist"
import SEO from "../components/SEO"

export default () => (
  <Layout>
    <SEO title="Pricelist" description="Just salon offers a range of pricelist templates to suit your business" />
    
    <Hero alt="Male Barber" filename="banner-curly-barber" title="Get an appointment to suit you with out online system" label="Book Now" link="/contact"/>
    <section className="container">
      <h1>Pricelist</h1>
      <p className="lead">
      Pricelist are the most commonly visited pages on any beauty site. New customers want to see how you compare to the competition and regular customers may just fancy trying something different.
      </p>

      <p>The table below is the most simple example but any format can be created. Whether you want different sections or multiple pricelists we can create a format to suit you. </p>

  <p> This is also a great page to add offer banners and call to actions to make an appointment online, think of it as the enterance to your salon.</p>

      <Pricelist />
    </section>
  </Layout>
)
