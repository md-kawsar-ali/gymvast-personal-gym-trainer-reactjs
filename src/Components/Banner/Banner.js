import React from 'react';
import BannerImg from '../../images/default-banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <header className='banner' style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className="container">
                <h1>World's Best <span>Gym Trainer!</span></h1>
            </div>
        </header>
    );
};

export default Banner;