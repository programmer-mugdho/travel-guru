import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { DestinationContext } from '../../App';

const SlideImage = ({ image, placeName }) => {
    const [destination, setDestination] = useContext(DestinationContext)
    const history = useHistory()

    return (
        <img
            onClick={() => {
                setDestination(placeName)
                history.push('/booking')
            }}
            src={image}
            alt="Image"
        />
    );
};

export default SlideImage;