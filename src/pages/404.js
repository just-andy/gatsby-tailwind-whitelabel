import React from "react"
import Layout from "../components/Layout"
import {Link} from "gatsby"

export default () => (
  <Layout>
      <section className="container mx-auto text-center w-8/12">
          <h1 className="text-6xl">Oops...</h1>
          <p className="text-2xl">Something went wrong, the page no longer exist or it could just be the wrong link.</p>
          <p className="text-gray-700">Don't worry you can use the navigation or return to the homepage and try again.</p>
          <Link to="/" className="btn btn-primary my-4">Back to homepage</Link>
      </section>
  </Layout>
)