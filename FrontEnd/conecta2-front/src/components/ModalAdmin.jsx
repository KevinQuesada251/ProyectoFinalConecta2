import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalAdmin({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Usuarios</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <label>Nombre de usuario:</label>
          <input
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Apellido:</label>
          <input
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Edad:</label>
          <input
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Correo:</label>
          <input
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label>Nacionalidad:</label>
          <input
            type="text"
            className="form-control"
          />
        </div>
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
  );
}

export default ModalAdmin;
