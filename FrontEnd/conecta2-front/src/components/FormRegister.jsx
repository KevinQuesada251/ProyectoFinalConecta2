import React, { useEffect, useState } from 'react'
import { PostRegister } from '../services/UsersServices'

function FormRegister() {
  const [NombreUsuario,SetNombreUsuario] = useState("")
  const [Nombre,SetNombre] = useState("")
  const [Apellido,SetApellido] = useState("")
  const [Edad,SetEdad] = useState("")
  const [Email,SetEmail] = useState("")
  const [Pass,SetPass] = useState("")
  const [Nacionalidad,SetNacionalidad] = useState("")


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
    <div>
        <label htmlFor="">Nombre de Usuario</label>
        <input  onChange={(e)=>SetNombreUsuario(e.target.value)} type="text" />
        <label htmlFor="">Nombre</label>
        <input onChange={(e)=>SetNombre(e.target.value)} type="text" name="" id="" />
        <label htmlFor="">Apellido</label>
        <input onChange={(e)=>SetApellido(e.target.value)}  type="text" />
        <label htmlFor="">Edad</label>
        <input onChange={(e)=>SetEdad(e.target.value)}  type="number" />
        <label htmlFor="">Email</label>
        <input onChange={(e)=>SetEmail(e.target.value)}  type="text" name="" id="" />
        <label htmlFor="">Nacionalidad</label>
        <input onChange={(e)=>SetNacionalidad(e.target.value)}  type="text" name="" id="" />
        <label htmlFor="">Contraseña</label>
        <input onChange={(e)=>SetPass(e.target.value)}  type="password" name="" id="" />
        <button onClick={Usuario}>Registrarse</button>
    </div>
  )
}

export default FormRegister