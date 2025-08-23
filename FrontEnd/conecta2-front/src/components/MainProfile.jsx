import React, { useEffect, useState } from 'react';
import Llamados from '../services/Llamados';
import { GetUsuariosUnico } from '../services/UsersServices';
import ModalPerfillUsuario from './ModalPerfilUsuario';
import { useNavigate } from 'react-router-dom';

function MainProfile() {
  const [usuario, setUsuario] = useState({});
  const [ubicaciones, setUbicaciones] = useState([]);
  const [mostrar, setMostrar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function traerDatos() {
      const idUsuario = localStorage.getItem('id_usuario');
      const [usuarioData, ubicacionesData] = await Promise.all([
        GetUsuariosUnico(idUsuario),
        Llamados.GetUbicacionesUnica(idUsuario),
      ]);
      setUsuario(usuarioData);
      setUbicaciones(ubicacionesData);
    }
    traerDatos();
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* Banner con foto de perfil centrada dentro */}
      <div className="position-relative">
        <img
          src={usuario.banner}
          alt="Banner"
          className="img-fluid w-100"
          style={{ height: '300px', objectFit: 'cover' }}
        />

        {/* Foto de perfil centrada dentro del banner */}
        <div
          className="position-absolute top-50 start-50"
          style={{
            transform: 'translate(-50%, -50%)',
            cursor: 'pointer',
          }}
          onMouseOver={() => setMostrar(true)}
          onMouseLeave={() => setMostrar(false)}
          onClick={() => {
            setShowModal(true);
            localStorage.setItem('usuario_id', usuario.user_id);
          }}
        >
          <div className="position-relative d-inline-block">
            <img
              src={usuario.img}
              className="rounded-circle border border-white"
              style={{ width: '150px', height: '150px', objectFit: 'cover' }}
              alt="Avatar"
            />
            {mostrar && (
              <i
                className="bi bi-pencil-square position-absolute top-50 start-50 translate-middle text-white"
                style={{ fontSize: '2rem', pointerEvents: 'none' }}
              ></i>
            )}
          </div>
        </div>
      </div>

      <ModalPerfillUsuario show={showModal} onClose={() => setShowModal(false)} />

      {/* Sección inferior */}
      <div className="row" style={{ backgroundColor: '#061E8C', color: 'white' }}>
        {/* Columna izquierda: info del usuario */}
        <div className="col-md-4 p-4 rounded">
          <h4 className="text-center">
            <strong>{usuario.first_name}</strong> <strong>{usuario.last_name}</strong>
          </h4>
          <p><strong>Edad :</strong> {usuario.edad}</p>
          <p className="descripcion">Pequeña descripcion de la persona</p>
        </div>

        {/* Columna derecha: ubicaciones */}
        <div className="col-md-8 p-4 bg-light text-dark">
          <h4 className="text-center mb-4">Ubicaciones creadas</h4>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4">
            {ubicaciones.map((ubicacion, index) => (
              <div className="col text-center" key={index}>
                <div className="card shadow-sm h-100">
                  <img
                    src="https://img.icons8.com/ios-filled/100/000000/map.png"
                    className="card-img-top mx-auto mt-3"
                    alt="Mapa"
                    style={{ width: '80px', height: '80px' }}
                  />
                  <div className="card-body">
                    <h6 className="card-title mb-0">{ubicacion.nombre_ubicacion}</h6>
                    <small className="text-muted">{ubicacion.descripcion}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainProfile;
