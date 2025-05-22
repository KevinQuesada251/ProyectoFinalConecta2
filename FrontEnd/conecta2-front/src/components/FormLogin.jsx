import React, { useState } from 'react'
import { PostLogin } from '../services/UsersServices'
import '../styles/formLogin.css'

function FormLogin() {
    const [NombreUsuario, SetNombreUsuario] = useState("")
    const [PassUsuario, SetPassUsuario] = useState("")



    function cargar() {
        const obj = {
            username: NombreUsuario,
            password: PassUsuario
        }
        console.log(obj);
        const ServerResponse = PostLogin(obj)
    }
    return (
        <div className='FondoRegister'>
            <div className='FormLogin'>
                <h1>Inicio Sesion</h1>
                <input className='inputLogin' onChange={(e) => SetNombreUsuario(e.target.value)} placeholder='Nombre de Usuario' type="text" />
                <input  className='inputLogin' onChange={(e) => SetPassUsuario(e.target.value)} placeholder='Contraseña' type="password" />
                <button className='btn-login' onClick={cargar}>Iniciar</button>
            </div>
        </div>
    )
}

export default FormLogin