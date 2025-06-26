import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/sideBarAdmin.css';

const SideBarAdmin = ({ ubicaciones, usuarios, roles, comentarios, respuestas, anuncios, dashboard }) => {
  const navigate = useNavigate();

  const cerrar = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div className="sidebar-admin px-2">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white min-vh-100">
        <a className="d-flex align-items-center pb-3 mb-md-0 me-md-auto p text-decoration-none">
          <span className="fs-5 d-none d-sm-inline"><i class="bi bi-menu-up"></i> Menu</span>
        </a>

        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start w-100" id="menu">
          <li className="nav-item w-100">
            <Link to="/home" className="nav-link d-flex align-items-center px-3">
              <i className="fs-4 bi-house"></i>
              <span className="ms-2 d-none d-sm-inline">Home</span>
            </Link>
          </li>

          <li className="nav-item w-100">
            <a className="nav-link d-flex align-items-center px-3" onClick={dashboard} role="button" tabIndex={0}>
              <i className="bi bi-clipboard-data"></i>
              <span className="ms-2 d-none d-sm-inline">Dashboard</span>
            </a>
          </li>

          <li className="nav-item w-100">
            <a className="nav-link d-flex align-items-center px-3" onClick={usuarios} role="button" tabIndex={0}>
              <i className="fs-4 bi-people"></i>
              <span className="ms-2 d-none d-sm-inline">Usuarios</span>
            </a>
          </li>

          <li className="nav-item w-100">
            <a className="nav-link d-flex align-items-center px-3" onClick={ubicaciones} role="button" tabIndex={0}>
              <i className="bi bi-geo-alt-fill"></i>
              <span className="ms-2 d-none d-sm-inline">Ubicaciones</span>
            </a>
          </li>

          <li className="nav-item w-100">
            <a className="nav-link d-flex align-items-center px-3" onClick={roles} role="button" tabIndex={0}>
              <i className="bi bi-person-lock"></i>
              <span className="ms-2 d-none d-sm-inline">Roles</span>
            </a>
          </li>

          <li className="nav-item w-100">
            <a className="nav-link d-flex align-items-center px-3" onClick={comentarios} role="button" tabIndex={0}>
              <i className="bi bi-chat-dots-fill"></i>
              <span className="ms-2 d-none d-sm-inline">Comentarios</span>
            </a>
          </li>

          <li className="nav-item w-100">
            <a className="nav-link d-flex align-items-center px-3" onClick={respuestas} role="button" tabIndex={0}>
              <i className="bi bi-person-fill-check"></i>
              <span className="ms-2 d-none d-sm-inline">Respuestas</span>
            </a>
          </li>

          <li className="nav-item w-100">
            <a className="nav-link d-flex align-items-center px-3" onClick={anuncios} role="button" tabIndex={0}>
              <i className="bi bi-megaphone-fill"></i>
              <span className="ms-2 d-none d-sm-inline">Anuncios</span>
            </a>
          </li>

          <li className="nav-item w-100">
            <button
              className="nav-link d-flex align-items-center px-3 btn btn-link text-start"
              onClick={cerrar}
              type="button"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <i className="bi bi-door-closed-fill"></i>
              <span className="ms-2 d-none d-sm-inline">Cerrar Sesión</span>
            </button>
          </li>
        </ul>

        <hr />
      </div>
    </div>
  );
};

export default SideBarAdmin;

