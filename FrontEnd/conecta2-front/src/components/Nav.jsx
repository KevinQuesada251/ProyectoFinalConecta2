import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navigation() {
  return (
    <Navbar variant="light" expand="lg" style={{background:'#12229d'}}>
      <Container>
        {/* Logo o título */}
        <Navbar.Brand >Conecta2</Navbar.Brand>

        {/* Botón de hamburguesa */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Enlaces del menú */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link className='text-white' to={'/home'}>Inicio</Link></Nav.Link>
            <Nav.Link ><Link className='text-white' to={'/map'}>Mapa</Link></Nav.Link>
            <Nav.Link ><Link className='text-white' to={'/profile'}>Perfil</Link></Nav.Link>
            <Nav.Link ><Link className='text-white' to={'/contact'}>Contacto</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
  