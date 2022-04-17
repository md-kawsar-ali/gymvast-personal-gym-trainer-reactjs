import React, { useState, useEffect } from 'react';
import './Booking.css';
import { useParams } from 'react-router-dom';
import useServices from './../../hooks/useServices';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';

const Booking = () => {
    const [result] = useServices();
    const [service, setService] = useState();
    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState(false);
    const { serviceId } = useParams();

    useEffect(() => {
        const selected = result?.find(service => service.id === serviceId);
        setService(selected);
    }, [result, serviceId]);

    // Handle Name
    const retriveName = (e) => {
        if (e.target.value) {
            setName(e.target.value);
            setNameErr(false);
        } else {
            setNameErr(true);
        }
    }

    // Handle Booking
    const handleBooking = (e) => {
        e.preventDefault();
        if (name && service.title && service.price) {
            toast.success(`Thanks ${name}, for the Booking!`, {
                id: 'BookingSuccess',
                duration: 4000
            });
            e.target.reset();
        }
    }

    return (
        <section className='booking'>
            <div className="container">
                <div className="row justify-content-evenly align-items-center gy-5">
                    <div className="col-lg-5 text-center">
                        <img src={service?.image} className='img-fluid' alt={service} />
                    </div>

                    <div className="col-lg-5">
                        {
                            service &&
                            <>
                                <h2 className='mb-2'>Book {service?.title}</h2>
                                <Form onSubmit={handleBooking}>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control type="text" onChange={retriveName} placeholder='Enter Your Name' required />
                                        {
                                            nameErr && <span className='text-danger'>Please, Enter your name!</span>
                                        }
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