import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';
import auth from './../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loader from './../Loader/Loader';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // If user Created Show Success Message and Navigate to Home Page
    useEffect(() => {
        if (user?.user?.email) {
            toast.success('Logged In!', {
                duration: 4000,
                id: 'login'
            }
            );

            setTimeout(() => {
                navigate(from, { replace: true });
                return;
            }, 1000);
        }
    }, [user, navigate, from]);

    // Handle Registration
    const handleLogin = async (event) => {
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
        const password = event.target.password.value;

        // Create Account
        await signInWithEmailAndPassword(email, password);

        // Reset Form
        setValidated(false);
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <section className='registration'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <Form className="theme-form" noValidate validated={validated} onSubmit={handleLogin}>
                            <h2 className="title">Login</h2>
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
                                    pattern=".{8,}"
                                    placeholder="Password"
                                    autoComplete="current-password"
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please, Enter your Password!
                                </Form.Control.Feedback>
                            </Form.Group>

                            <button className='theme-btn w-100 mb-3' type="submit">Login</button>
                            <Link to="/register">New User? <span>Register</span></Link>
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

export default Login;