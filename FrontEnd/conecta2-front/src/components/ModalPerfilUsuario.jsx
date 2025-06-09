import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Cloudinary from './Cloudinary';

function ModalPerfillUsuario({show, onClose}) {


  return (
    <>

      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Personalizar Perfil</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Foto de perfil</Form.Label>
              <Form.Control
                type="file"
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Foto del Banner</Form.Label>
              <Form.Control type='file'/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPerfillUsuario;