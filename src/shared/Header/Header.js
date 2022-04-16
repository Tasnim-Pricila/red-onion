import {faCartShopping, faSignOut, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink} from 'react-router-dom';
import auth from '../../firebase.init';
import logo2 from '../../images/logo2.png';
import './Header.css';

const Header = () => {

    const [user, loading, error] = useAuthState(auth);

    // Logout 
    const signout = () => {
        signOut(auth);
    }

    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        <img src={logo2} alt="" className='img-fluid w-25'/>
                    </Navbar.Brand>
                    <Nav className="ms-auto d-flex align-items-center justify-content-center gap-4">
                        
                        <Nav.Link as={Link} to="cart" className='text-dark'>
                            <FontAwesomeIcon icon={faCartShopping}> </FontAwesomeIcon>
                        </Nav.Link>
                        { !user ?
                            <>
                                <Nav.Link as={NavLink} to="/login" 
                                    className={({isActive}) => (isActive ? "active" : "nav-link")}>Login</Nav.Link>
                                
                                <Nav.Link as={NavLink} to="signup" className={({isActive}) => (isActive ? "active" : "nav-link")}>Signup</Nav.Link>
                            </>
                        :
                        <button onClick={signout} className='btn-outline-danger btn     fw-bold'>Sign Out &nbsp;
                            <FontAwesomeIcon icon={faSignOutAlt}> </FontAwesomeIcon>
                        </button>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;