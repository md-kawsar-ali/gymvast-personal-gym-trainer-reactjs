import React from 'react';
import NotFoundImg from "../../images/not-found.png";

const NotFound = () => {
    return (
        <div className='container text-center p-5 d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <img src={NotFoundImg} className="w-75" alt="" />
        </div>
    );
};

export default NotFound;