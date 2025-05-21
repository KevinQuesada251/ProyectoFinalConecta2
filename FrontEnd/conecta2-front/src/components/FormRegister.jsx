import React, { useEffect, useState } from 'react'
import { PostRegister } from '../services/UsersServices'
import '../styles/formRegister.css'

function FormRegister() {
  const [NombreUsuario, SetNombreUsuario] = useState("")
  const [Nombre, SetNombre] = useState("")
  const [Apellido, SetApellido] = useState("")
  const [Edad, SetEdad] = useState("")
  const [Email, SetEmail] = useState("")
  const [Pass, SetPass] = useState("")
  const [Nacionalidad, SetNacionalidad] = useState("")


  function Usuario() {
    const obj = {
      "username": NombreUsuario,
      "first_name": Nombre,
      "last_name": Apellido,
      "email": Email,
      "password": Pass,
      "edad": Edad,
      "nacionalidad": Nacionalidad
    }

    const RespuestaServer = PostRegister(obj)
    console.log(obj);


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
        <button onClick={Usuario} className='btn-register'>Registrarse</button>


      </div>
    </div>
  )
}

export default FormRegister