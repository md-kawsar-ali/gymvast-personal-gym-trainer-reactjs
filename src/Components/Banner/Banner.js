import React from 'react';
import BannerImg from '../../images/default-banner.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <section className='banner' style={{ backgroundImage: `url(${BannerImg})` }}>
            <div className="container">
                <h1>World's Best <span>Gym Trainer!</span></h1>
            </div>
        </section>
    );
};

export default Banner;