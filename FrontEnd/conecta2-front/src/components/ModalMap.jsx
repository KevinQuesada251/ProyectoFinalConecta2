import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Llamados from '../services/Llamados';

function ModalMap({ show, onClose, latitud, longitud }) {
  const [nombreUbicacion, setNombreUbicacion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [compania, setCompania] = useState("");

  useEffect(() => {
    if (!show) {
      // Limpiar campos al cerrar
      setNombreUbicacion("");
      setDescripcion("");
      setCompania("");
    }
  }, [show]);

  async function cargarInfo() {
    if (!nombreUbicacion.trim() || !descripcion.trim() || !compania.trim()) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const id = parseInt(localStorage.getItem('id_usuario'));
    console.log(id);
    
    const obj = {
      nombre_ubicacion: nombreUbicacion,
      descripcion: descripcion,
      latitud: latitud,
      longitud: longitud,
      usuario: id,
      compania: compania
    };
    console.log(obj);

    const serverResponse = await Llamados.postData(obj,'ubicaciones')
    console.log(serverResponse);
    
    onClose(); // Cierra el modal después de guardar
  }

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Crear Ubicación</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <label>Coordenadas:</label>
          <input
            type="text"
            className="form-control"
            value={`Lat: ${latitud}, Lng: ${longitud}`}
            readOnly
          />
        </div>
        <div className="mb-3">
          <label>Nombre de la Ubicación:</label>
          <input
            type="text"
            className="form-control"
            value={nombreUbicacion}
            onChange={(e) => setNombreUbicacion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Descripción:</label>
          <input
            type="text"
            className="form-control"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Compañía:</label>
          <input
            type="text"
            className="form-control"
            value={compania}
            onChange={(e) => setCompania(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cerrar
        </Button>
        <Button variant="primary" onClick={cargarInfo}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalMap;
