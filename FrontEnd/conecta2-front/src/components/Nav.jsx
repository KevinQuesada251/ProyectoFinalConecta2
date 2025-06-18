import React from 'react';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  const linkStyle = {
    color: 'white',
    fontFamily: "'Bungee Tint', sans-serif",
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
  };

  const hoverStyle = {
    textDecoration: 'underline',
    color: '#d1e3ff'
  };

  return (
    <Navbar expand="md" style={{ backgroundColor: '#12229D' }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/home" style={{ color: 'white' }}>
          <img
            alt="Logo"
            className="d-inline-block align-text-top rounded-circle"
            height="120"
            src="src/assets/logo_sin_fondo.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          className="border-0"
          style={{ filter: 'invert(1)' }}
        />

        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          style={{ backgroundColor: '#12229D', color: 'white' }}
        >
          <Offcanvas.Header closeButton style={{ borderBottom: '1px solid #ffffff33' }}>
            <Offcanvas.Title id="offcanvasNavbarLabel" style={{ color: 'white' }}>
              Menú
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              {['/home', '/map', '/profile', '/foro', '/contact', '/ubicaciones '].map((path, index) => {
                const labels = ['Inicio', 'Mapa', 'Perfil', 'Foro', 'Contacto', 'Ubicaciones'];
                return (
                  <Nav.Link
                    key={path}
                    as={Link}
                    to={path}
                    style={linkStyle}
                    onMouseEnter={e => {
                      Object.assign(e.target.style, hoverStyle);
                    }}
                    onMouseLeave={e => {
                      Object.assign(e.target.style, linkStyle);
                    }}
                  >
                    {labels[index]}
                  </Nav.Link>
                );
              })}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;

