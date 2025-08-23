import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Llamados from '../services/Llamados';

function ModalUbicaciones({show, onClose, latitud, longitud,nombreM, descripcionM}) {
    const [nombre,setNombre] = useState(nombreM)
    const [descripcion,setDescripcion] = useState(descripcionM)

    async function editar(id) {
    const obj = {
      nombre_ubicacion: nombre,
      descripcion: descripcion,
    }
    const serverResponse = await Llamados.patchData(obj,'ubicaciones',id)
    console.log(serverResponse);
    
    console.log(id);
    
  }
  
  return (
    <div>
        <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Ubicaciones</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <div className="mb-3">
          <label>Coordenadas</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDescripcion(e.target.value)}
            value={[latitud,longitud]}
          />
        </div>
        <div className="mb-3">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            className="form-control" onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Descripcion:</label>
          <input
            type="text"
            value={descripcion}
            className="form-control"
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}>
          Cancelar
        </Button>
        
            <Button variant="success" onClick={()=>editar(localStorage.getItem("ubicacion_id"))}>
              Confirmar
            </Button>
          
        

      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default ModalUbicaciones