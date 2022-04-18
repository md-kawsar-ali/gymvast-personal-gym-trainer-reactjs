import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import '../Login.css';
import auth from './../../../firebase.init';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Login = () => {
    const [sendPasswordResetEmail,
        sending,
        error
    ] = useSendPasswordResetEmail(auth);

    const [validated, setValidated] = useState(false);

    // Handle Reset Password
    const handleResetPassword = async (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        // Check Validity
        if (form.checkValidity() === false) {
            event.stopPropagation();
            setValidated(true);
            return;
        }

        //Retrive Input Value
        const email = event.target.email.value;

        // Create Account
        await sendPasswordResetEmail(email);

        toast.loading('Sending Email!', {
            duration: 1500,
            id: 'sendingMsg'
        });

        // Reset Form
        setValidated(false);
        event.target.reset();
    };

    if (error && !sending) {
        return (
            <div className="container d-flex align-items-center justify-content-center" style={{ height: 'calc(100vh - 170px)' }}>
                <div className="text-center">
                    <h2 className='fw-bold text-theme d-block mb-4'>
                        {
                            error?.message.includes('not-found') ? 'Account Not Found! Email does not exist!' : 'Something Went Wrong! Refresh Page..'
                        }
                    </h2>

                    <Link className="theme-btn" to="/">Back to Home</Link>
                </div>
            </div>
        )
    }

    return (
        <section className='login'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 px-4 py-4">
                        <Form className="theme-form" noValidate validated={validated} onSubmit={handleResetPassword}>
                            <h2 className="title text-capitalize">Reset Password</h2>
                            <Form.Group className="mb-3" controlId="validationEmail">
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    autoComplete="username"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">Please, Enter valid Email Address!</Form.Control.Feedback>
                            </Form.Group>

                            <button className='theme-btn w-100 mb-3' type="submit">Reset Password</button>
                            <Link to="/login">Back to <span>Login Page</span></Link>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;