import React from "react"
import Layout from "../components/Layout"

import Hero from "../components/modules/HeroBanner"
import SEO from "../components/SEO"

import Testimonial from "../components/elements/Testimonial"
import {HalfImageContent, HalfContent, HalfImage } from "../components/modules/HalfImageContent"


export default () => (

  <Layout>
    <SEO title="About Just Salons" description="About us pages is a great page to give some background to you, your team and salon." />
    <Hero alt="group in hair salon" filename="salon" title="Book an appointment with one team today" label="Book Now" link="/contact" />

    <section className="container md:w-9/12 lg:w-8/12">
      <h1>About</h1>
      <p className="lead">
        There are many salons, beauticians and hairdressers in most local areas, but that doesn't mean you can't stand out. Even as the new kid on the block you can show off some in here what makes you stand out. It could be something as simple as being available later or willing to go that little further.
    </p>

      <blockquote>
        If you do a good job then clients will say even more good things about you and you can put them around the site.
        <cite>Jane, Glasgow</cite>
      </blockquote>


      <p> Just like the pricelist this page can use different things from testimonials, images, banners and a few call out sections to really draw potential customers eyes to the key facts. If you have specific awards, qualifications or brands you work with we can add logos to the site too, lets face it no one is on here to read a book.
    </p>


      <h2>Introduce your team</h2>
      <p>
        If you have a wider team this is a good location to introduce your wider team, from reception staff through to senior stylists and therapists.
    </p>
      <p>This can be laid out in various ways; from galleries to mini profiles. What really stands out is some great headshots and testimonials, so think about the content first.</p>


     <HalfImageContent>
          <HalfImage filename="makeupkit" alt="Artist toolbag" order="order-last" />
          <HalfContent order="order-first">
          <h2>What makes us special</h2>
            <p>These are just some things that make our services unique</p>
            <ul >
              <li>Qualified people that have trained to do things properly</li>
              <li>Our place is really clean and tidy</li>
            </ul>
          </HalfContent>
      </HalfImageContent>
      
      <HalfImageContent>
          <HalfImage filename="hairdryer" alt="Artist toolbag" order="order-first" />
          <HalfContent order="order-last">
          <h2>What makes us special</h2>
            <p>These are just some things that make our services unique</p>
            <ul >
              <li>Qualified people that have trained to do things properly</li>
              <li>Our place is really clean and tidy</li>
            </ul>
          </HalfContent>
      </HalfImageContent>

    </section>

    <Testimonial quote="This salon is really good and made me look a million $$$, definately be back." cite="Amy, Stirling" />


  </Layout>
)