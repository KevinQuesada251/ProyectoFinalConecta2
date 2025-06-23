import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Llamados from '../services/Llamados';

function ModalAnuncios({ show, onClose, id }) {
  const [anuncio, setAnuncio] = useState("")

  async function editar(id) {
    const obj = {
      texto_anuncio: anuncio
    }
    const serverResponse = await Llamados.patchData(obj, 'anuncios_actualizar', id)
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
            <label>Anuncio</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setAnuncio(e.target.value)}
            />
            <div class="input-group mb-3 mt-3">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">Gravedad</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
                <option selected>Seleccionar...</option>
                <option value="leve">Leve</option>
                <option value="grave">Grave</option>
                <option value="muy grave">Muy Grave</option>
              </select>
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onClose}>
            Cancelar
          </Button>

          <Button variant="success" onClick={() => editar(id)}>
            Confirmar
          </Button>



        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalAnuncios