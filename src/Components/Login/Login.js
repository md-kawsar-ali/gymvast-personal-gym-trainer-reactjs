import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import './Login.css';
import auth from './../../firebase.init';
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle
} from 'react-firebase-hooks/auth';
import Loader from './../Loader/Loader';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import GoogleIcon from '../../images/google-icon.png';

const Login = () => {
    const [signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle,
        googleUser,
        googleLoading
    ] = useSignInWithGoogle(auth);

    const [validated, setValidated] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // If user Created Show Success Message and Navigate to Home Page
    useEffect(() => {
        if (user?.user?.email || googleUser?.user?.email) {
            toast.success('Logged In!', {
                duration: 4000,
                id: 'login'
            });

            setTimeout(() => {
                navigate(from, { replace: true });
                return;
            }, 1000);
        }
    }, [user, navigate, from, googleUser]);

    // Handle Login
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

    if (loading || googleLoading) {
        return <Loader />;
    }

    return (
        <section className='login'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8 px-4">
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
                                <div className='d-flex align-items-center justify-content-between w-100'>
                                    <Form.Label>Password</Form.Label>
                                    <Link style={{ fontSize: '15px' }} className='form-label' to='/reset-password'>Forgot Password?</Link>
                                </div>
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
                            <Link to="/register">Don't have account? <span>Register</span></Link>
                            {error && <strong className='text-danger d-block text-center mt-1'>
                                {
                                    error?.message.includes('already') ? 'Email Already Exist!' : 'Something Went Wrong!'
                                }
                            </strong>}

                            <div className="divider">
                                <span></span>
                                <p>Or</p>
                                <span></span>
                            </div>

                            <button type='button' onClick={() => signInWithGoogle()} className='social-login-btn'>
                                <img src={GoogleIcon} alt="Sign In With Google" />
                                Continue With Google
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;