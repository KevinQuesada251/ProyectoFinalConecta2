import React from 'react'
import '../styles/FormRegister2.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { PostRegister } from '../services/UsersServices'


function FormRegister2() {
     const [NombreUsuario, SetNombreUsuario] = useState("")
      const [Nombre, SetNombre] = useState("")
      const [Apellido, SetApellido] = useState("")
      const [Edad, SetEdad] = useState("")
      const [Email, SetEmail] = useState("")
      const [Pass, SetPass] = useState("")
      const [Nacionalidad, SetNacionalidad] = useState("")
      const navigate = useNavigate()
    
    
      async function Usuario() {
        const obj = {
          "username": NombreUsuario,
          "first_name": Nombre,
          "last_name": Apellido,
          "email": Email,
          "password": Pass,
          "edad": Edad,
          "nacionalidad": Nacionalidad
        }
        console.log(obj);
        
        const RespuestaServer = await PostRegister(obj)
        console.log(obj);
         if (RespuestaServer.mensaje) {
                    Swal.fire({
                        title: 'Usuario creado con exitoso',
                        text: 'Disfruta la aplicacion',
                        icon: 'success',
                    })
                    navigate('/')
                } else {
                    Swal.fire({
                        title: 'Vuelva a intentarlo',
                        text: 'Inserte los datos de nuevo',
                        icon: 'Error',
                    })
                }
            }
  return (
    <div className='fondoRegister'>
        <>
  <form className="formR">
    <p className="titleR">Registro</p>
    <p className="messageR">Registrate para disfrutar del sitio </p>
    <div className="flexR">
      <label>
        <input  placeholder='Nombre' onChange={(e) => SetNombre(e.target.value)} type="text" className="input" />
      </label>
      <label>
        <input  placeholder="Apellido" onChange={(e) => SetApellido(e.target.value)} type="text" className="input" />
      </label>
    </div>
    <label>
        <input  placeholder='Nombre de Usuario' onChange={(e) => SetNombreUsuario(e.target.value)} type="text" className="input" />
      </label>
    <label>
      <input  placeholder='Correo' onChange={(e) => SetEmail(e.target.value)} type="email" className="input" />
    </label>
    <label>
      <input placeholder='Nacionalidad' onChange={(e) => SetNacionalidad(e.target.value)} type="text" className="input" />
    </label>
     <label>
      <input  placeholder='Edad' onChange={(e) => SetEdad(e.target.value)} type="number" className="input" />
    </label>
    <label>
      <input  placeholder='Contraseña' onChange={(e) => SetPass(e.target.value)} type="password" className="input" />
    </label>
    <button type='button' onClick={Usuario} className="submitR">Enviar</button>
    <Link to={'/'} className="signinR">
      Tienes cuenta? Inicia Sesion
    </Link>
  </form>
</>

    </div>
  )
}

export default FormRegister2