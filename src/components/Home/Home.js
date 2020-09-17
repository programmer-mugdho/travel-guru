import React, { useContext } from 'react';
import './Home.css'
import { DestinationContext } from '../../App'
import datas from '../../resourses/fakeData'
import { useHistory } from 'react-router-dom';
import coxsbazar from '../../resourses/Group 1332coxUnselected.png'
import sreemangal from '../../resourses/Group 1331sreemangal.png'
import sundarban from '../../resourses/Group 1331sundarban.png'
import selectedCoxsbazar from '../../resourses/coxsbazar.png'
import selectedSreemangal from '../../resourses/Group 1331sreeSelected.png'
import selectedSundarban from '../../resourses/Group 1331sundSelected.png'
import Navbar from '../Navbar/Navbar';
import SlideImage from '../SlideImage/SlideImage';

const Home = () => {
    const [destination, setDestination] = useContext(DestinationContext)
    const place = datas.find(data => data.name === destination)
    const history = useHistory()
    return (
        <div className='home__container'>
            <div className="container">
                <Navbar />
                <div className="row home__row">
                    <div className="col-md-5">
                        <div className='home__detail-container'>
                            <h1 className='home__title'>{place.name}</h1>
                            <p className='home__detail'>{place.shortDetail}</p>
                            <button onClick={() => history.push("/booking")} className='home__booking-btn'>
                                Booking
                                <svg width="24px" height="24px" viewBox="0 0 16 16" class="bi bi-arrow-right ml-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-7 home__image-container">
                        <SlideImage image={destination == "Cox's Bazar" ? selectedCoxsbazar : coxsbazar} placeName="Cox's Bazar" key={coxsbazar} />
                        <SlideImage image={destination == "Sreemangal" ? selectedSreemangal : sreemangal} placeName="Sreemangal" key={sreemangal} />
                        <SlideImage image={destination == "Sundarbans" ? selectedSundarban : sundarban} placeName="Sundarbans" key={sundarban} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;