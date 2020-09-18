import { makeStyles } from '@material-ui/core';
import './Booking.css'
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { DestinationContext } from '../../App';
import datas from '../../resourses/fakeData'
import Navbar from '../Navbar/Navbar';

const Booking = () => {
    const history = useHistory()
    const [destination, setDestination] = useContext(DestinationContext)
    const place = datas.find(data => data.name === destination)
    const [input, setInput] = useState("Dhaka")

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className='home__container'>
            <div className="container">
                <Navbar />
                <div className="row home__row">
                    <div className="col-md-6">
                        <div className="booking__detail-container">
                            <h1 className="home__title">{place.name}</h1>
                            <p className="home__detail">{place.largeDetail}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="booking__form-container" style={{ marginBottom: '30px' }}>
                            <form className="booking__form">
                                <p style={{ marginTop: '0', paddingTop: '27px' }}>Origin</p>
                                <input type="text" onChange={handleChange} value={input} id="" />
                                <p>Destination</p>
                                <input value={place.name} type="text" name="" id="" />
                                <br />
                                <div className="from-to row">
                                    <div className="col-md-6 col-6">
                                        <p>Form</p>
                                        <input type="date" defaultValue='2020-09-01' name="" id="" />
                                    </div>
                                    <div className="col-md-6 col-6 to">
                                        <p>To</p>
                                        <input type="date" defaultValue='2020-09-12' name="" id="" />
                                    </div>
                                </div>
                                <input onClick={() => history.push("/search")} type="submit" value="Start Booking" name="" id="start-booking" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;