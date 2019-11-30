import React from "react"
import Layout from "../components/Layout"
import DualCards from "../components/modules/general/DualCards"
import LogoGallery from "../components/modules/galleries/LogoGallery"
import Testimonial from "../components/modules/content/Testimonial"

import SEO from "../components/SEO"

export default () => (
  <Layout>
    <SEO title="Welcome to Just Salons" description="Just Salons demo site" />

    <section className="section-spacer">
        <div className="flex flex-wrap items-center -mx-2">
            <div className="lg:w-2/5 px-2 lg:pr-16 mb-6 lg:mb-0">
                <h3>Welcome to Just Salons</h3>
                <p>This is a demo site of a fantasy salon to show how the site would work and how it could look with your content in here.</p>
                <p>This is just one example of how the page can look. We are working on a range of templates to pick on for each page type.</p>
            </div>
            <div className="lg:w-3/5 px-2 mb-6">
                <div className="w-9/12 mx-auto lg:w-full">
                <Testimonial quote="This is where you can let customers know what great things other clients have said about you." cite="Andy, Edinburgh" />
                </div>
            </div>
        </div>
    </section>


    <div className="bg-gray-100 w-full">
      <DualCards />
    </div>




    <section className="section-spacer">
      <h2>Heading 2</h2>
      <p>
        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
        for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
        Bonorum et Malorum" by Cicero are also reproduced in their exact original
        form, accompanied by English versions from the 1914 translation by H.
        Rackham.
      </p>
    </section>
    <LogoGallery />

  </Layout>
)
