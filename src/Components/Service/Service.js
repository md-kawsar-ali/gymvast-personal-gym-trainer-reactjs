import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, image, title, description, price } = props.data;

    const navigate = useNavigate();

    const getStarted = () => {
        navigate(`/booking/${id}`);
    }

    return (
        <div className="col-lg-3 col-md-6">
            <div className="service">
                <img src={image} className='img-fluid' alt={title} />

                <span className='price'>Only ${price}</span>
                <div className="detail">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <button onClick={getStarted}>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Service;