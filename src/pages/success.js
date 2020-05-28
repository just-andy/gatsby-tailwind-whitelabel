import React from "react"
import Layout from "../components/Layout"
import SocialIconList from "../components/modules/SocialIconList"
import {Link} from "gatsby"

export default () => (
  <Layout>
      <section className="container mx-auto text-center w-8/12">
          <h1 className="text-6xl mb-8">We got your mail...</h1>
          <p className="text-2xl">We aim to get back to you as soon as we can.</p>
          <p className="text-gray-700 mb-8">In the meantime you can use the navigation to return to the site or follow us on one of our social media profiles.</p>
          <SocialIconList className="mb-8" />
          <Link to="/" className="btn btn-primary my-8">Back to homepage</Link>
      </section>
  </Layout>
)