import React from 'react'
import '../styles/formlogin2.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { PostLogin } from '../services/UsersServices'

function FormLogin2() {
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

        if (ServerResponse.mensaje && ServerResponse.rol === "Usuario") {

            Swal.fire({
                title: 'Inicio de sesion exitoso',
                text: 'Bienvenido disfruta la aplicacion',
                icon: 'success',
            })
            localStorage.setItem('token', ServerResponse.token)
            localStorage.setItem('id_usuario', ServerResponse.id)
            navigate('/profile')
        } else if (ServerResponse.mensaje && ServerResponse.rol === "admin") {
            Swal.fire({
                title: 'Inicio de sesion exitoso',
                text: 'Bienvenido administrador',
                icon: 'success',
            })
            localStorage.setItem('token', ServerResponse.token)
            localStorage.setItem('id_usuario', ServerResponse.id)
            localStorage.setItem('rol',ServerResponse.rol)
            navigate('/admin')
        }
        else if (ServerResponse.error) {
            Swal.fire({
                title: 'Credenciales Invalidas',
                text: 'Vuelva a intentarlo',
                icon: 'error',
            })
        }
    }
    return (
        <div className='fondoLogin'>

            <div className="form">
                <p className="form-title">Inicia Sesion</p>
                <div className="input-container">
                    <input placeholder="Nombre de Usuario" onChange={(e) => SetNombreUsuario(e.target.value)} type="email" />
                    <span>
                        <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                strokeWidth={2}
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                </div>
                <div className="input-container">
                    <input placeholder="Contraseña" onChange={(e) => SetPassUsuario(e.target.value)} type="password" />
                    <span>
                        <svg
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                strokeWidth={2}
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            />
                            <path
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                strokeWidth={2}
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                </div>
                <button className="submit" onClick={cargar}>
                    Iniciar
                </button>
                <p className="signup-link">
                    No tienes Cuenta?
                    <Link to={'/register'}>Registrate</Link>
                </p>
            </div>
        </div>

    )
}

export default FormLogin2
