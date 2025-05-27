import React from 'react'
import '../styles/userprofile.css'

function MainProfile() {
  return (
    <div>
         <div className="perfil-container">
            {/* Imagen de portada */}
            <div className="portada">
                <div className="avatar">
                    <span>👤</span>
                </div>
            </div>

            {/* Contenido */}
            <div className="perfil-info">
                {/* Columna izquierda */}
                <div className="info-usuario">
                    <h2><strong>Nombre</strong> Apellido</h2>
                    <p><strong>Edad:</strong> 25</p>
                    <p className="descripcion">Pequeña descripcion de la persona</p>
                </div>

                {/* Columna derecha */}
                <div className="ubicaciones">
                    <h3>Ubicaciones creadas</h3>
                    <div className="ubicaciones-grid">
                        {['Fatima', 'Fatima', 'Fatima', 'Escazu'].map((ubicacion, idx) => (
                            <div key={idx} className="ubicacion-card">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/854/854878.png"
                                    alt="Mapa"
                                />
                                <p>{ubicacion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainProfile