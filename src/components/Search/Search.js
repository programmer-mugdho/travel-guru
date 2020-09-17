import React, { useContext } from 'react';
import './Search.css'
import Map from '../Map/Map'
import datas from '../../resourses/fakeData'
import Navbar from '../Navbar/Navbar';
import { DestinationContext } from '../../App';
import star from '../../resourses/Icon/star_1_.png'

export const Search = (props) => {
    const [destination, setDestination] = useContext(DestinationContext)
    const place = datas.find(data => data.name === destination)

    return (
        <div className="container search__container">
            <Navbar dark />
            <hr />
            <p style={{paddingTop:'15px'}}>252 stays Apr 13-17 3 guests</p>
            <h6 style={{paddingBottom:'25px'}}>Stay in {destination}</h6>
            <div className="row">
                <div className="col-md-6 hotel-container">
                    { place.hotels.map(hotel=>
                        <div className="hotel row">
                            <div className="col-md-6">
                                <img width="100%" src={hotel.image} alt="" />
                            </div>
                            <div className="col-md-6">
                                <p className="hotel-name-title">{hotel.name}</p>
                                <p style={{ marginBottom: '11px' }}>4 guests   2 bedrooms   2 beds   2 baths</p>
                                <p style={{ marginBottom: '11px' }}>With Air conditioning Kitchen</p>
                                <p>Cancellation fexibility availiable</p>
                                <div className="hotel-star-cost">
                                    <img src={star} width='15px' alt="" />
                                    <p className="rating">4.9(20)</p>
                                    <p className="cost"><span>$34/</span>night</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="col-md-6 col-6">
                    <div id="googleMap">
                        <Map />
                    </div>
                </div>
            </div>
        </div>
    );
};

