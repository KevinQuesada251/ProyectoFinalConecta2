import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Llamados from '../services/Llamados';

function ModalRoles({show, onClose, id, user_id}) {
    const[rol, setRol] = useState("")

    async function editar(user_id) {
    const obj = {
      name: rol
    }
    const serverResponse = await Llamados.patchData(obj,'roles_editar',parseInt(user_id) )
    console.log(serverResponse);
    
    console.log(id);
  }
  
  return (
    <div>
        <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Anuncios</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <div className="mb-3">
          <label>Roles</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setRol(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        
            <Button variant="primary" onClick={() => editar(user_id)}>
              Save Changes
            </Button>
          
        

      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default ModalRoles