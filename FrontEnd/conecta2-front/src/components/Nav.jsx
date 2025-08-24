import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Offcanvas, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GetUsuariosUnico } from '../services/UsersServices';
import 'bootstrap/dist/css/bootstrap.min.css';



function Navigation() {
  const navigate = useNavigate()

  const [user, setUser] = useState({})

  useEffect(() => {
    async function traerInfo() {
      const usuario = await GetUsuariosUnico(localStorage.getItem('id_usuario'))
      setUser(usuario)
      console.log(usuario);

    }
    traerInfo()
  }, [])

  const linkStyle = {
    color: 'white',
    fontFamily: "'Roboto', sans-serif",
    textDecoration: 'none',
    transition: 'all 0.2s ease-in-out',
  };

  const hoverStyle = {
    textDecoration: 'underline',
    color: '#4ce5f0'
  };

  function CerrarSesion() {
    localStorage.clear()
    navigate('/')
  }

  return (
    <Navbar expand="md" style={{ backgroundColor: '#12229D', height: '90px', borderBottom: '2px solid #4ce5f0' }}>
      <Container fluid>
        <Navbar.Brand as={Link} to="/home" style={{ color: 'white' }}>
          <div
            className="logo-container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '5%',
              padding: '2px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
              e.currentTarget.style.boxShadow = "0px 6px 20px rgba(0, 0, 0, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0px 4px 12px rgba(0, 0, 0, 0.4)";
            }}
          >
            <img
              alt="Logo"
              className="d-inline-block align-text-top"
              height="70"
              src="src/assets/logome.png"
            />

          </div>

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
              <i class="fa-solid fa-wifi"></i>
              {['/home', '/map', '/foro', '/contact', '/ubicaciones', '/politicas'].map((path, index) => {
                const labels = ['Inicio', 'Mapa', 'Foro', 'Contacto', 'Ubicaciones'];
                
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
              <Dropdown drop="start" className="my-0">
                <Dropdown.Toggle
                  variant="link"
                  className="nav-link"
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  Perfil
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/Profile"><img className='rounded-circle' src={user.img} alt="" style={{ height: '25px', width: '25px' }} /> Mi Perfil</Dropdown.Item>
                  {localStorage.getItem('rol') === 'admin' && <Dropdown.Item as={Link} to={"/admin"} >Panel de Administracion</Dropdown.Item>}
                  <Dropdown.Item onClick={CerrarSesion}>Cerrar Sesion</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Navigation;

