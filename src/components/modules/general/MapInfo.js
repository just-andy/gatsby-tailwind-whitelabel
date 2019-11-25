import React from 'react'

const MapInfo = () => {
    return (
        <>
        <div id="map">
            <img alt="Map" className="thumbnail" src="https://via.placeholder.com/540x320.png?text=GalleryImage" />
        </div>
       
       <div>
            <h3>Company Name</h3>
          
            <div itemscope itemtype="http://schema.org/Organization">
            <span itemprop="name">Google.org (GOOG)</span>
            
            <address className="py-2" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">

                <span itemprop="streetAddress">38 avenue de l'Opera</span>
                <span itemprop="postalCode">F-75002</span>
                <span itemprop="addressLocality">Paris, France</span>

            </address>
            Tel:<span itemprop="telephone">( 33 1) 42 68 53 00 </span> &middot; 
            <span itemprop="email">secretariat(at)google.org</span>
            </div>
        </div>
        </>
    )
}


export default MapInfo