import React from "react"
import Layout from "../components/Layout"

import Hero from "../components/modules/media/HeroBanner"
import SEO from "../components/SEO"
import Testimonial from "../components/modules/content/Testimonial"
import InlineProfile from "../components/modules/content/InlineProfile"


export default () => (

  <Layout>
    <SEO title="About Just Salons" description="About us pages is a great page to give some background to you, your team and salon." />
    <Hero alt="group in hair salon" filename="salon.jpg" title="Book an appointment with one team today" label="Book Now" link="/contact"/>

    <section className="container md:w-9/12 lg:w-8/12">
    <h1>About</h1>
    <p className="lead">
      There are many salons, beauticians and hairdressers in most local areas, but that doesn't mean you can't stand out. Even as the new kid on the block you can show off some in here what makes you stand out. It could be something as simple as being available later or willing to go that little further.
    </p>
    <div className="w-9/12 my-8 mx-auto">
      <Testimonial quote="Quotes can be dropped into page to give context or supporting content to why you and your salon is so great" cite="Andy, West Lothian" />
    </div>
      <p> Just like the pricelist this page can use different things from testimonials, images, banners and a few call out sections to really draw potential customers eyes to the key facts. If you have specific awards, qualifications or brands you work with we can add logos to the site too, lets face it no one is on here to read a book.
    </p> 

<InlineProfile name="Joanne Bloggs" blurb="Joanne is an experience beautician with over 10 years in the game. Having worked in a number of salons in three major cities working her way up to senior therapist. Branching out on her own she set up Just Salons in 2018 and was a shortlist for the New Salon of the Year 2018 award." />
  
    <h2>Introduce your team</h2>
    <p>
  If you have a wider team this is a good location to introduce your wider team, from reception staff through to senior stylists and therapists.
    </p>
    <p>This can be laid out in various ways; from galleries to mini profiles. What really stands out is some great headshots and testimonials, so think about the content first.</p>
    </section>
  </Layout>
)