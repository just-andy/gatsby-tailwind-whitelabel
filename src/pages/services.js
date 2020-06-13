import React from 'react'
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from '../components/modules/HeroBanner'
import CardList from '../components/modules/CardList'



const Services = () => {
    return (
        <Layout>
        <SEO title="Our Services" description="Here are services that this salon provides" />
        <Hero alt="group in hair salon" filename="salon" title="Book an appointment with one team today" label="Book Now" link="/contact"/>

        <section className="container">
        <h1>Our Services</h1>
        <CardList />
        </section>
        </Layout>
    )
}

export default Services