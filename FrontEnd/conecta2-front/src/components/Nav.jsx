import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/nav.css'

function Navigation() {
  return (
    <Navbar
      expand="md"
      variant="light"
      className="mb-4"
      style={{
        background: '#12229D',
        minHeight: '100px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">Conectado2</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" className="border-0" style={{ filter: 'invert(1)' }} />

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          style={{  color: '#12229D' }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="desktop-white sidebar-text" as={Link} to="/home">Inicio</Nav.Link>
              <Nav.Link className="desktop-white sidebar-text" as={Link} to="/map">Mapa</Nav.Link>
              <Nav.Link className="desktop-white sidebar-text" as={Link} to="/profile">Perfil</Nav.Link>
              <Nav.Link className="desktop-white sidebar-text" as={Link} to="/contact">Contacto</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;


