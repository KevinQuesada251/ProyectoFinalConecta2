import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PatchUser } from '../services/UsersServices';

function ModalAdmin({ show, onClose, userId, nombreUsuarioM, nombreM, apellidoM, edadM, emailM, nacionalidadM }) {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [emailE, setEmailE] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');

  useEffect(() => {
    setNombreUsuario(nombreUsuarioM);
    setNombre(nombreM);
    setApellido(apellidoM);
    setEdad(edadM);
    setEmailE(emailM);
    setNacionalidad(nacionalidadM);
  }, [nombreUsuarioM, nombreM, apellidoM, edadM, emailM, nacionalidadM]);

  async function editar() {
    const obj = {
      username: nombreUsuario,
      first_name: nombre,
      last_name: apellido,
      edad,
      email: emailE,
      nacionalidad,
    };

    try {
      const serverResponse = await PatchUser(obj, userId);
      console.log(serverResponse);
      onClose();
    } catch (error) {
      console.error("Error al editar usuario:", error);
    }
  }

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3">
          <label>Nombre de usuario:</label>
          <input type="text" className="form-control" value={nombreUsuario} onChange={(e) => setNombreUsuario(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Nombre:</label>
          <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Apellido:</label>
          <input type="text" className="form-control" value={apellido} onChange={(e) => setApellido(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Edad:</label>
          <input type="number" className="form-control" value={edad} onChange={(e) => setEdad(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Correo:</label>
          <input type="email" className="form-control" value={emailE} onChange={(e) => setEmailE(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Nacionalidad:</label>
          <input type="text" className="form-control" value={nacionalidad} onChange={(e) => setNacionalidad(e.target.value)} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="success" onClick={editar}>
          Confirmar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAdmin;


