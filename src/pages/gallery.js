import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

import SimpleGallery from "../components/modules/galleries/SimpleGridGallery"

export default () => (
  <Layout>
      <SEO title="Portfolio of work" description="Browse a gallery of our work and treatments." />
      <section className="container">
    <h1>Gallery</h1>
    <p className="lead">
      Showcase your cuts, nails, tan, product range or basically whatever you want in here.
    </p>
    <p>To make it easy we have used the same sizes as Instagram, so filter away and then add them toy our gallery.</p>

    <SimpleGallery />
    </section>
  </Layout>
)
