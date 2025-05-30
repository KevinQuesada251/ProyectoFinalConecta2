import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function ModalMap({ show, onClose }) {
  const [nombreUbicacion, setNombreUbicacion] = useState("");
  const [descripcion, setDescripcion] = useState("");

  function cargarInfo() {
    const obj = {
      nombre_ubicacion: nombreUbicacion,
      descripcion: descripcion
    };
    console.log(obj);
    // Aquí podrías enviar `obj` a una API o backend
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
            value="Coordenadas aquí si las necesitas"
            readOnly
          />
        </div>
        <div className="mb-3">
          <label>Nombre de la Ubicación:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setNombreUbicacion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Descripción:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDescripcion(e.target.value)}
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
