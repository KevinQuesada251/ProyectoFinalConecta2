import React, { use } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SideBarAdmin = ({ ubicaciones, usuarios, roles, comentarios, respuestas, anuncios, dashboard }) => {
  const navigate = useNavigate();

  const cerrar = () => {
    localStorage.clear()
    navigate('/')
  }


  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-wit">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a  className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </a>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
           <Link to={'/home'} className='text-decoration-none' ><li className="nav-item">
            <p className="nav-link align-middle px-0 text">
             <i className="fs-4 bi-house "></i> <span className="ms-1 d-none d-sm-inline">Home</span>
            </p>
          </li></Link>

             <li>
            <a  className="nav-link px-0 align-middle" onClick={dashboard}>
              <i className="bi bi-clipboard-data"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
            </a>
          </li>

          <li>
            <a  className="nav-link px-0 align-middle" onClick={usuarios}>
              <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Usuarios</span>
            </a>
          </li>

          <li>
            <a  className="nav-link px-0 align-middle" onClick={ubicaciones}>
              <i className="bi bi-geo-alt-fill"></i> <span className="ms-1 d-none d-sm-inline">Ubicaciones</span>
            </a>
          </li>

          <li>
            <a  className="nav-link px-0 align-middle" onClick={roles}>
              <i className="bi bi-person-lock"></i> <span className="ms-1 d-none d-sm-inline">Roles</span>
            </a>
          </li>

          <li>
            <a  className="nav-link px-0 align-middle" onClick={comentarios}>
              <i className="bi bi-chat-dots-fill"></i> <span className="ms-1 d-none d-sm-inline">Comentarios</span>
            </a>
          </li>

          <li>
            <a  className="nav-link px-0 align-middle" onClick={respuestas}>
              <i className="bi bi-person-fill-check"></i> <span className="ms-1 d-none d-sm-inline">Respuestas</span>
            </a>
          </li>
            <li>
            <a  className="nav-link px-0 align-middle" onClick={anuncios}>
              <i className="bi bi-megaphone-fill"></i> <span className="ms-1 d-none d-sm-inline">Anuncios</span>
            </a>
          </li>

          <li>
            <p  className="nav-link px-0 align-middle">
              <i className=""></i> <span className="bi bi-door-closed-fill" onClick={cerrar}>Cerrar Sesión</span>
            </p>
          </li>
          
        </ul>

        <hr />
      
      </div>
    </div>
  );
};

export default SideBarAdmin;
