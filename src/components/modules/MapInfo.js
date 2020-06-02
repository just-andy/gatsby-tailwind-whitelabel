import React from 'react'
import StaticMap from "../elements/StaticMap"


const MapInfo = () => {
    return (
        <>
        <div id="map">
            <StaticMap />
        </div>
       
       <div>
            <div itemscope itemtype="http://schema.org/Organization">
            <h3 itemprop="name">Just Salons</h3>
            
            <address className="py-2 not-italic" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">

                <span itemprop="streetAddress">12 Acme Street,</span>
                <span itemprop="postalCode">EH11 1AB, </span>
                <span itemprop="addressLocality">Edinburgh, Scotland</span>

            </address>
           <span itemprop="telephone">0131 123 4567 </span>&nbsp;&middot;&nbsp;<span itemprop="email">demo(at)just-salons.co.uk</span>
            </div>
        </div>
        </>
    )
}


export default MapInfo