import {faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo2 from '../../images/logo2.png';

const Header = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={logo2} alt="" className='img-fluid w-25'/>
                    </Navbar.Brand>
                    <Nav className="ms-auto d-flex align-items-center justify-content-center gap-4 fw-bold">
                        <FontAwesomeIcon icon={faCartShopping}> </FontAwesomeIcon>
                        <Nav.Link as={Link} to="login" className='text-dark'>Login</Nav.Link>
                        <Nav.Link as={Link} to="signup" className='text-dark'>Signup</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;