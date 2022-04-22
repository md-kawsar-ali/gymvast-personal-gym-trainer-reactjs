import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './Register.css';
import auth from './../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loader from './../Loader/Loader';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();

    // If user Created Show Success Message and Navigate to Home Page
    useEffect(() => {
        if (user?.user?.email) {
            toast.success('Email Verification Sent!', {
                duration: 4000,
                id: 'verification'
            }
            );

            setTimeout(() => {
                navigate('/', { replace: true });
                return;
            }, 1000);
        }
    }, [user, navigate]);

    // Handle Registration
    const handleRegistration = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        // Check Validity
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        //Retrive Input Value
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Create Account
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        // Reset Form
        setValidated(false);
    };

    if (loading || updating) {
        return <Loader />;
    }

    return (
        <section className='registration'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 px-4">
                        <Form className="theme-form" noValidate validated={validated} onSubmit={handleRegistration}>
                            <h2 className="title">Register</h2>
                            <Form.Group className="mb-3" controlId="validationName">
                                <Form.Label>Your name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Please, Enter your name!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="validationEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    autoComplete="username"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Please, Enter valid Email Address!</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="validationPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters.
                                </Form.Control.Feedback>
                            </Form.Group>

                            <button className='theme-btn w-100 mb-3' type="submit">Register</button>
                            <Link to="/Login">Already registered? <span>Login</span></Link>
                            {error && <strong className='text-danger d-block text-center mt-1'>
                                {
                                    error?.message.includes('already') ? 'Email Already Exist!' : 'Something Went Wrong!'
                                }
                            </strong>}
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;