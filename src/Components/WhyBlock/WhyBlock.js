import React from 'react';
import { Link } from 'react-router-dom';
import './WhyBlock.css';
import WhyImg from '../../images/why-img.jpg';

const WhyBlock = () => {
    return (
        <section className='why-block'>
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6">
                        <h2 className='text-white'>WHY GYMING IS GOOD <br /><span className='text-theme'>FOR HEALTH?</span></h2>
                        <p>World is committed to making participation in the event harass ment free on experience for everyone, regardless of leve of expenc gender by identity and expression oriention disability for personal.</p>
                        <Link className='theme-btn' style={{ padding: '12px 30px' }} to='register'>Get Started!</Link>
                    </div>

                    <div className="col-lg-6">
                        <img src={WhyImg} className="w-100" alt="" />
                    </div>
                </div>

                <strong className='bg-shadow'>Gymvast</strong>
            </div>
        </section>
    );
};

export default WhyBlock;