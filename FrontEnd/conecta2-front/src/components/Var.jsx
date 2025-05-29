import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Var = ({ubicaciones,usuarios}) => {
  return (
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-wit">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </a>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0">
              <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
            </a>
          </li>
          <li>
            <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
              <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline" onClick={usuarios}>Usuarios</span>
            </a>
            <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">

            </ul>
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle">
              <i className="bi bi-geo-alt-fill"></i> <span className="ms-1 d-none d-sm-inline" onClick={ubicaciones}>Ubicaciones</span>
            </a>
          </li>
          <li>
            <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
              <i className="bi bi-person-lock"></i> <span className="ms-1 d-none d-sm-inline">Roles</span>
            </a>
          </li>
          <li>
            <a href="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
              <i className="bi bi-chat-dots-fill"></i> <span className="ms-1 d-none d-sm-inline">Comentarios</span>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-0 align-middle">
              <i className="bi bi-person-fill-check"></i> <span className="ms-1 d-none d-sm-inline">Respuestas</span>
            </a>
          </li>
           <li>
            <a href="#" className="nav-link px-0 align-middle">
              <i className=""></i> <span className="ms-1 d-none d-sm-inline">Cerrar Sesion   </span>
            </a>
          </li>
        </ul>
        <hr />
        <div className="dropdown pb-4">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="" alt="profile" width="30" height="30" className="rounded-circle" />
            <span className="d-none d-sm-inline mx-1">User</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Var;
