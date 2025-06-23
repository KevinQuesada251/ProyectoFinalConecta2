import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Llamados from '../services/Llamados';

function ModalRespuestas({show, onClose, id }) {
    const[respuesta, setRespuesta] = useState("")
    const [recarga, setRecarga] = useState(false)

    async function editar(id) {
    const obj = {
      mensaje_respuesta: respuesta
    }
    const serverResponse = await Llamados.patchData(obj,'respuestas',id)
    setRecarga(!recarga)
  }
  
  return (
    <div>
        <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Respuestas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
         <div className="mb-3">
          <label>Respuesta</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setRespuesta(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}>
          Cancelar
        </Button>
        
            <Button variant="success" onClick={()=>editar(id)}>
              Confirmar
            </Button>
          
        

      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default ModalRespuestas