import React from 'react';
import Service from '../Service/Service';
import './Services.css';
import useServices from './../../hooks/useServices';

const Services = () => {
    const [result] = useServices();

    return (
        <section className='services'>
            <div className="container">
                <h2 className='section-title'>Choose the program</h2>

                <div className="row gy-4">
                    {
                        result?.map(data => <Service key={data.id} data={data}></Service>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;