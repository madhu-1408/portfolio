import React, { useState, useEffect } from 'react'; 
import { Navbar, Nav } from 'react-bootstrap';
import './Header.css'; // Ensure you create and link this CSS file

const Header = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                // User is at the top of the page
                setIsTop(true);
            } else {
                // User has scrolled down
                setIsTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Navbar className={`custom-navbar ${isTop ? 'navbar-top' : 'navbar-scrolled'}`} expand="lg" sticky="top">
            <div className="container">
                <Navbar.Brand href="#"> <strong>&lt;Madhavi/&gt;</strong></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto"> {/* Center the links */}
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#school">School</Nav.Link>
                        <Nav.Link href="#work">Work</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Header;
