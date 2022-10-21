import React, { useContext } from 'react';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Context/AuthProvider';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(Authcontext);
    return (
        <div>
            <Navbar className='py-4 ' bg="light" expand="lg" variant='light'>
                <Container>
                    <Navbar.Brand>
                        <Link to="/">
                            Dragon Fruit News
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">All News</Nav.Link>
                            <Nav.Link href="#link">Pricing</Nav.Link>
                            <Link style={{ textDecoration: "none" }} className="text-success mx-2 mt-2" to="/register">Register </Link>
                            <Link style={{ textDecoration: "none" }} className="text-success mx-2 mt-2" to="/login">Login</Link>

                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                                {user?.uid ?
                                    <>
                                        <button onClick={logOut} className='rounded border-0 me-2'>Log Out</button>
                                        <span className='me-2 text-info'>{user?.displayName}   </span>
                                    </>
                                    :
                                    <>
                                        <Link className='me-3' to="/login">Login</Link>
                                        <Link className='me-3' to="/register">Register</Link>
                                    </>

                                }
                                <Link to="/profile">
                                    {
                                        user?.photoURL ? <Image style={{ height: "40px" }} roundedCircle thumbnail src={user?.photoURL}></Image>
                                            :
                                        <FaUser />
                                    }
                                </Link>
                            </Navbar.Text>
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;