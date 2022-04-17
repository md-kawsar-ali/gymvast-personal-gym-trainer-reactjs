import React, { useState, useEffect } from 'react';
import './Booking.css';
import { useParams } from 'react-router-dom';
import useServices from './../../hooks/useServices';
import Form from 'react-bootstrap/Form';

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
                <div className="row justify-content-evenly align-items-center gy-4">
                    <div className="col-lg-5">
                        <img src={service?.image} className='img-fluid' alt={service} />
                    </div>

                    <div className="col-lg-5">
                        {
                            service &&
                            <>
                                <h2 className='mb-2'>Book {service?.title}</h2>
                                <Form onSubmit={(e) => e.preventDefault()}>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" placeholder='Enter Your Name' />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" value={'jhon@example.com'} readOnly />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formProgram">
                                        <Form.Label>Selected Program</Form.Label>
                                        <Form.Control type="text" value={service?.title} readOnly />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formPrice">
                                        <Form.Label>Total Price</Form.Label>
                                        <Form.Control type="text" value={`$${service?.price}`} readOnly />
                                    </Form.Group>

                                    <button className='theme-btn' type="submit">
                                        Make Payment
                                    </button>
                                </Form>
                            </>
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Booking;