import React from "react"
import Layout from "../components/Layout"
import Form from "../components/modules/forms/ContactForm"
import Map from "../components/modules/general/MapInfo"
import SEO from "../components/SEO"

export default () => (
  <Layout>
    <SEO title="Contact Just Salons" description="How to contact Just salons" />

    <h1>Contact</h1>
    <p>Please complete this form</p>

    <section className="md:flex">
      <div className="w-full md:w-1/2 md:mr-4">
        <Form />
      </div>
      <div className="w-full md:w-1/2 md:ml-4"><Map /></div>
    </section>
  </Layout>
)
