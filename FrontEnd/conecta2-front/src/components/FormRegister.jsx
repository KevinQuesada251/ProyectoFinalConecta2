import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { PostRegister } from '../services/UsersServices'
import '../styles/formRegister.css'
import Swal from 'sweetalert2'

function FormRegister() {
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
    <div className='FondoRegister'>
      <div className='formLogin'>
        <h2>Registrarse</h2>
        <input placeholder='Nombre de Usuario' className='inputRegister' onChange={(e) => SetNombreUsuario(e.target.value)} type="text" />
        <input placeholder='Nombre' className='inputRegister' onChange={(e) => SetNombre(e.target.value)} type="text" />
        <input placeholder='Apellido' className='inputRegister' onChange={(e) => SetApellido(e.target.value)} type="text" />
        <input placeholder='Edad' className='inputRegister' onChange={(e) => SetEdad(e.target.value)} type="number" />
        <input placeholder='Correo Electronico' className='inputRegister' onChange={(e) => SetEmail(e.target.value)} type="text" />
        <input placeholder='Nacionalidad' className='inputRegister' onChange={(e) => SetNacionalidad(e.target.value)} type="text" />
        <input placeholder='Contraseña' className='inputRegister' onChange={(e) => SetPass(e.target.value)} type="password" />
        <Link to={'/'}>Ya tienes cuenta inicia sesion aquí</Link>
        <button onClick={Usuario} className='btn-register'>Registrarse</button>


      </div>
    </div>
  )
}

export default FormRegister