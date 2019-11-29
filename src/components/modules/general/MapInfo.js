import React from 'react'
import OpeningHours from './OpeningHours'

const MapInfo = () => {
    return (
        <>
        <div id="map">
            <img alt="Map" className="thumbnail" src="https://via.placeholder.com/540x320.png?text=Google+Map" />
        </div>
       
       <div>
          
            <div itemscope itemtype="http://schema.org/Organization">
            <h4 itemprop="name">Just Salons</h4>
            
            <address className="py-2" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">

                <span itemprop="streetAddress">12 Acme Street</span>
                <span itemprop="postalCode">EH11 1AB</span>
                <span itemprop="addressLocality">Edinburgh, Scotland</span>

            </address>
            Tel:<span itemprop="telephone">0131 123 4567 </span>&nbsp;&middot;&nbsp;<span itemprop="email">demo(at)just-salons.co.uk</span>
            </div>
            <h3>Opening Hours</h3>
            <ul className="flex flex-col justify-between">
                <OpeningHours />
            </ul>
        </div>
        </>
    )
}


export default MapInfo