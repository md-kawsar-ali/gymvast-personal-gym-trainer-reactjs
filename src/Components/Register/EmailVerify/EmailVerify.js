import React from 'react';
import './EmailVerify.css';
import { useSendEmailVerification, useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import Loader from './../../Loader/Loader';
import { toast } from 'react-hot-toast';

const EmailVerify = () => {
    const [user] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(
        auth
    );

    if (sending) {
        return <Loader />;
    }

    return (
        <section className='verify-email'>
            <div className="container">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8">
                        <h2>Please, verify your email address</h2>
                        <p>Please, check your inbox and click the link in the email we've just sent to {user?.email}. If you didn't receive an email, check your spam folder or click the button below to resend.</p>

                        <button className="theme-btn" onClick={async () => {
                            await sendEmailVerification();
                            toast.success('Email Verification Sent!', { id: 'verify' });
                        }}>Resend Email</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EmailVerify;