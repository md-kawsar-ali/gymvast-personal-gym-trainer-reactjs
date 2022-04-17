import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, Outlet } from 'react-router-dom';
import './Header.css';
import Logo from "../../images/logo-black.png";

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={Logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/about">About</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/services">Services</NavLink>
                        <NavLink className={({ isActive }) => isActive ? "active" : ""} to="/blog">Blog</NavLink>
                    </Nav>
                    <Outlet />
                    <Link className="theme-btn ms-lg-4" to="login">Login</Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;