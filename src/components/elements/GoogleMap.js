import React from 'react';

import GoogleMapReact from 'google-map-react';

const Marker = () => (
    <>
        <div className="pin" />
        <div className="pulse" />
    </>
);

const MarkerComponent = ({ text }) => <div className=" px-4 py-6 inline-flex text-center items-center justify-center rounded-full bg-secondary-500 text-primary-500 font-bold">{text}</div>;

const GoogleMaps = () => {

    const  googleMapsKey = process.env.GATSBY_GOOGLE_MAPS_API_KEY
    
    const mapConfig = {
        center: {
            lat: 55.979267, lng: -3.183732
        },
        zoom: 17,
    };

    return (
        <div id="google-map-section" style={{ height: '60vh', width: '100%' }}>
           
            <GoogleMapReact
                bootstrapURLKeys={{ key: googleMapsKey }}
                defaultCenter={mapConfig.center}
                defaultZoom={mapConfig.zoom}
            >
                  <MarkerComponent
            lat={mapConfig.center.lat}
            lng={mapConfig.center.lng}
            text="Just Salons"
          />
            </GoogleMapReact>
        </div>
    );
};

export default GoogleMaps;