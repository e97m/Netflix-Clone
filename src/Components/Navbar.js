import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>My Movies</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/favorite">Favorite</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

    )
}

export default NavBar