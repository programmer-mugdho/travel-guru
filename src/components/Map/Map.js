import React, { Component, useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import { LocationOn } from '@material-ui/icons';
import { DestinationContext } from '../../App';
import datas from '../../resourses/fakeData'

const Map = () => {
    const [destination, setDestination] = useContext(DestinationContext)
    const place = datas.find(data => data.name === destination)
    console.log(place)

    const defaultProps = {
        center: {
            lat: place.lat,
            lng: place.long
        },
        zoom: 16
    };
    
    if (place.name == "Sreemangal") {
        defaultProps.zoom = 12
    }
    else if (place.name == "Sundarbans") {
        defaultProps.zoom = 12
    }

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDvougtduZXz8idIkpeSvPufVIzF9-xF2o" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                {
                    place.hotels.map(hotel =>
                        <LocationOn
                            lat={hotel.lat}
                            lng={hotel.long}
                            style={{ color: 'red', fontSize: '40px' }}
                        />
                    )
                }
            </GoogleMapReact>
        </div>
    );
}

export default Map;