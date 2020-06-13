import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import StaticMap from "../elements/StaticMap"



const MapInfo = ({data}) => {

    const response = useStaticQuery(SiteMapData)
    const info = response.site.siteMetadata
  
    const stripEmail = (email) => {
        return email.replace("@", "{at}")
    }

    return (
        <>
        <div id="map">
            <StaticMap />
        </div>
       
       <div>
            <div itemscope itemtype="http://schema.org/Organization">
            <h3 itemprop="name">Just Salons</h3>
            
            <address className="py-2 not-italic" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">

               {info.address}

            </address>
           <span itemprop="telephone">{info.telephone} </span>&nbsp;&middot;&nbsp;<span itemprop="email">{stripEmail(info.email)}</span>
            </div>
        </div>
        </>
    )
}


export default MapInfo

const SiteMapData = graphql`
query siteMapMeta {
  site {
    siteMetadata {
      title
      telephone
      address
    }
  }
}
`;