import React from "react"
import Layout from "../components/Layout"

import SimpleGallery from "../components/modules/galleries/SimpleGridGallery"

export default () => (
  <Layout>
      
    <h1>Gallery</h1>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney.
    </p>

    <SimpleGallery />
  </Layout>
)
