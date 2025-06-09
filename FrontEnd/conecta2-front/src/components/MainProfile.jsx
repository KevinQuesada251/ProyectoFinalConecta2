import React, { useEffect, useState } from 'react'
import '../styles/userprofile.css'
import Llamados from '../services/Llamados'
import { GetUsuariosUnico } from '../services/UsersServices'
import ModalPerfillUsuario from './ModalPerfilUsuario'

function MainProfile() {
    const [usuario, setUsuario] = useState({})
    const [ubicaciones, setUbicaciones] = useState([])
    const [mostrar,setMostrar] = useState(false)
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        async function traerInfo() {
            const todosUsuarios = await GetUsuariosUnico(localStorage.getItem("id_usuario"))
            setUsuario(todosUsuarios)
            console.log(todosUsuarios);
            
            
        }
        traerInfo()
        
        
    }, [])
    
    useEffect(() => {
        async function traerUbicaciones() {
            const ubicacionesUsuario = await Llamados.GetUbicacionesUnica(localStorage.getItem("id_usuario"))
            setUbicaciones(ubicacionesUsuario)
        }
        traerUbicaciones()
        console.log(ubicaciones);
    }, [])

    return (
        <div>

            <div className="perfil-container">
                {/* Imagen de portada */}
                <img className='w-25 h-25' src={usuario.banner} alt="" />
                <div className="portada">
                    <div className="avatar"
                     onClick={() => {
                    setShowModal(true);
                    localStorage.setItem("usuario_id",usuario.user_id)
                  }}
                     onMouseOver={()=>setMostrar(true)} 
                     onMouseLeave={()=>setMostrar(false)}>
                        {mostrar &&
                        <i className="bi bi-pencil-square"></i>
                        }
                        <img className='h-25 w-25' src={usuario.img} alt="" />
                    </div>
                </div>
                <ModalPerfillUsuario show={showModal} onClose={() => setShowModal(false)}  />
                {/* Contenido */}

                
                <div className="perfil-info">
                    {/* Columna izquierda */}
                    <div className="info-usuario">
                        <h2><strong>{usuario.first_name} {usuario.last_name}</strong></h2>
                        <p><strong>Edad:{usuario.edad}</strong></p>
                        <p><strong>Nacionalidad:{usuario.nacionalidad}</strong></p>
                        <p className="descripcion">Pequeña descripcion de la persona</p>
                    </div>


                    {/* Columna derecha */}
                    <div className='info-ubicaciones'>
                        <h3>Ubicaciones</h3>
                        <ul>
                            {ubicaciones.map((ubicacion, index) => (
                                <li key={index}>
                                    <strong>{ubicacion.nombre_ubicacion}</strong> - {ubicacion.descripcion}
                                    <br />
                                    <span>Latitud: {ubicacion.latitud}, Longitud: {ubicacion.longitud}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default MainProfile