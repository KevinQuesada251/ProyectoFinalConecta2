import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PatchUser,GetUsuarios } from '../services/UsersServices';


function ModalAdmin({ show, onClose }) {
  const [todosUsuario, setTodosUsuarios] = useState([])
  const [nombreUsuario, setNombreUsuario] = useState("")
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [edad, setEdad] = useState(0)
  const [email, setEmail] = useState("")
  const [nacionalidad, setNacionalidad] = useState("")

  useEffect(() => {
    async function obtenerInfo() {
      const lista = await GetUsuarios()
      setTodosUsuarios(lista)
    }
    obtenerInfo()
  }, [])

  async function editar(id) {
    const obj = {
      username: nombreUsuario,
      first_name: nombre,
      last_name: apellido,
      edad: edad,
      email, email,
      nacionalidad: nacionalidad
    }
    const serverResponse = await PatchUser(obj,id)
    console.log(serverResponse);
    
    console.log(id);
    
  }
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
            className="form-control" onChange={(e) => setNombreUsuario(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Apellido:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Edad:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Correo:</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Nacionalidad:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) =>setNacionalidad(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
        
            <Button variant="primary" onClick={()=>editar(localStorage.getItem("usuario_id"))}>
              Save Changes
            </Button>
          
        

      </Modal.Footer>
    </Modal>
  );
}

export default ModalAdmin;
