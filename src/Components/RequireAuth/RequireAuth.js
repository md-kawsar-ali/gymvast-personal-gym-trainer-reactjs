import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Loader/Loader';
import auth from './../../firebase.init';
import EmailVerify from './../Register/EmailVerify/EmailVerify';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <Loader />;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <EmailVerify />;
    }

    return children;
};

export default RequireAuth;