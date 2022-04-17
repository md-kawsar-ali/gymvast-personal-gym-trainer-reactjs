import React from 'react';
import './About.css';
import AboutImg from '../../images/about-img.png';

const About = () => {
    return (
        <section className='about'>
            <div className="container">
                <div className="row justify-content-evenly align-items-center gy-4">
                    <div className="col-lg-4">
                        <img src={AboutImg} className="img-fluid" alt="MD KAWSAR ALI" />
                    </div>

                    <div className="col-lg-6">
                        <h3>MD KAWSAR ALI</h3>
                        <p>Hi there, I am a Freelance Frontend Developer and Personal Gym Trainer! I have been hardworking to become a Professional Full Stack Developer. I know, A dream does not become reality through magic; it takes sweat, determination, and hard work.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;