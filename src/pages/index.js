import React from "react"
import Layout from "../components/Layout"
import DualCards from "../components/modules/DualCards"

import SEO from "../components/SEO"

export default () => (
  <Layout>
    <SEO title="Welcome to Just Salons" description="Just Salons demo site" />
    <h1>Heading 1</h1>
    <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
    </p>
    <DualCards />
    <ul>
      <li>List Item</li>
      <li>List Item</li>
      <li>List Item</li>
    </ul>

    <h2>Heading 2</h2>

    <p>
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
      for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
      Bonorum et Malorum" by Cicero are also reproduced in their exact original
      form, accompanied by English versions from the 1914 translation by H.
      Rackham.
    </p>
  </Layout>
)
