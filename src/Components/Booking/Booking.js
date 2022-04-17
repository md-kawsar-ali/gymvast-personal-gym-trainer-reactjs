import React, { useState, useEffect } from 'react';
import './Booking.css';
import { useParams } from 'react-router-dom';
import useServices from './../../hooks/useServices';

const Booking = () => {
    const [result] = useServices();
    const [service, setService] = useState();
    const { serviceId } = useParams();

    useEffect(() => {
        const selected = result?.find(service => service.id === serviceId);
        setService(selected);
    }, [result, serviceId]);

    return (
        <section className='booking'>
            <div className="container">
                <div className="row justify-content-center g-5">
                    <div className="col-lg-5">
                        <img src={service?.image} className='img-fluid' alt={service} />
                    </div>

                    <div className="col-lg-5">
                        <h2>Booking {service.title}</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;