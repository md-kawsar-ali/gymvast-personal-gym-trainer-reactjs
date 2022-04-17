import React from 'react';
import './Footer.css';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <footer>
            <div className="container">
                <p>Copyright &copy; {year}. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;