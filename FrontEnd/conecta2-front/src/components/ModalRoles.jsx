import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Llamados from '../services/Llamados';

function ModalRoles({ show, onClose, id, user_id }) {
  const [rol, setRol] = useState("")

  async function editar(user_id) {
    const obj = {
      name: rol
    }
    const serverResponse = await Llamados.patchData(obj, 'roles_editar', parseInt(user_id))
    console.log(serverResponse);
  }

  return (
    <div>
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Roles</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">Roles</label>
            </div>
            <select onChange={(e) => setRol(e.target.value)} class="custom-select w-75" id="inputGroupSelect01" >
              <option selected>Selecionar...</option>
              <option value="admin">Administrador</option>
              <option value="moderador">Moderador</option>
              <option value="Usuario">Usuario</option>
            </select>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onClose}>
            Close
          </Button>

          <Button variant="success" onClick={() => editar(user_id)}>
            Save Changes
          </Button>



        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalRoles