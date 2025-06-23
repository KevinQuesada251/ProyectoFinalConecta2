import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { PatchUser,GetUsuarios } from '../services/UsersServices';


function ModalAdmin({ show, onClose,nombreUsuarioM,nombreM, apellidoM, edadM,emailM ,nacionalidadM }) {
  const [todosUsuario, setTodosUsuarios] = useState([])
  const [nombreUsuario, setNombreUsuario] = useState(nombreUsuarioM)
  const [nombre, setNombre] = useState(nombreM)
  const [apellido, setApellido] = useState(apellidoM)
  const [edad, setEdad] = useState(edadM)
  const [emailE, setEmailE] = useState(emailM)
  const [nacionalidad, setNacionalidad] = useState(nacionalidadM)

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
      email: emailE,
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
            className="form-control" 
            value={nombreUsuario}
            onChange={(e)=>setNombreUsuario(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Nombre:</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e)=>setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Apellido:</label>
          <input
            type="text"
            value={apellido}
            className="form-control"
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Edad:</label>
          <input
            type="text"
            value={edad}
            className="form-control"
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Correo:</label>
          <input
            type="email"
            value={emailE}
            className="form-control"
            onChange={(e) => setEmailE(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Nacionalidad:</label>
          <input
            type="text"
            value={nacionalidad}
            className="form-control"
            onChange={(e) =>setNacionalidad(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={onClose}>
          Cancelar
        </Button>
        
            <Button variant="success" onClick={()=>editar(localStorage.getItem("usuario_id"))}>
              Confirmar
            </Button>
          
        

      </Modal.Footer>
    </Modal>
  );
}

export default ModalAdmin;
