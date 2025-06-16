import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Llamados from '../services/Llamados';

function ModalComentarios({show, onClose, id}) {
    const[mensaje, setMensaje] = useState("")

    async function editar(id) {
    const obj = {
      mensaje: mensaje
    }
    const serverResponse = await Llamados.patchData(obj,'comentarios',id)
  

    console.log(serverResponse);
    
    console.log(id);
  }
  
  return (
    <div>
        <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Comentarios</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <div className="mb-3">
          <label>Comentario</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setMensaje(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        
            <Button variant="primary" onClick={()=>editar(id)}>
              Save Changes
            </Button>
          
        

      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default ModalComentarios