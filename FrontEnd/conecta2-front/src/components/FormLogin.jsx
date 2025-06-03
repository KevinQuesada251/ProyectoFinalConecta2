import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { PostLogin } from '../services/UsersServices'
import '../styles/formLogin.css'
import Swal from 'sweetalert2'


function FormLogin() {
    const [NombreUsuario, SetNombreUsuario] = useState("")
    const [PassUsuario, SetPassUsuario] = useState("")
    const navigate = useNavigate()



    async function cargar() {
        const obj = {
            username: NombreUsuario,
            password: PassUsuario
        }
        console.log(obj);


        const ServerResponse = await PostLogin(obj)
        console.log(ServerResponse);

        if (ServerResponse.mensaje) {
            
            Swal.fire({
                title: 'Inicio de sesion exitoso',
                text: 'Bienvenido disfruta la aplicacion',
                icon: 'success',
            })
            localStorage.setItem('id_usuario',ServerResponse.id)
            navigate('/profile')
        } else if(ServerResponse.error) {
               Swal.fire({
                title: 'Credenciales Invalidas',
                text: 'Vuelva a intentarlo',
                icon: 'error',
            })
        }
    }
    return (
        <div className='FondoRegister'>
            <div className='FormLogin'>
                <h1>Inicio Sesion</h1>
                <input className='inputLogin' onChange={(e) => SetNombreUsuario(e.target.value)} placeholder='Nombre de Usuario' type="text" />
                <input className='inputLogin' onChange={(e) => SetPassUsuario(e.target.value)} placeholder='Contraseña' type="password" />
                <Link to={'/register'}>No tiene cuenta registrate aquí</Link>
                <button className='btn-login' onClick={cargar}>Iniciar</button>
            </div>
        </div>
    )
}

export default FormLogin