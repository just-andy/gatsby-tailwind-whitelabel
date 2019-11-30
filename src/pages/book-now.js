import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {Link} from "gatsby"



export default () => (

  <Layout>
      <SEO title="Book An Appointment" description="Book an appointment online at anytime using our secure booking system" />
    <h1>Book An Appointment</h1>
    <p className="lead">Use our online booking system to view availability and book an appointment at anytime. For any questions you can give us a get in touch during opening hours using our <Link to="/contact">contact details</Link>. </p>

    <section className="section-spacer">
        <div className="bg-gray-500 text-black w-full h-screen flex justify-center items-center">
            <div className="w-200 h-300 text-2xl p-8 text-center">
                Drop in any booking system that can embed into a webpage.
            </div>
        </div>
    </section>

  </Layout>
)