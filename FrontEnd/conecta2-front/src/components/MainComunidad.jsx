import React, { useEffect, useState } from 'react'
import Comentario from './Comentario'
import Llamados from '../services/Llamados'
import { Link } from 'react-router-dom'
import Navigation from "/src/components/Nav.jsx"  
import Footer from "/src/components/Footer.jsx"

function MainComunidad() {
  const [todosComentarios, setTodosComentarios] = useState([])
  const [comentario, setComentario] = useState("")

  useEffect(() => {
    async function traerComentarios() {
      const data = await Llamados.getData('comentarios')
      setTodosComentarios(data)
    }
    traerComentarios()
  }, [])

  async function responder(id_comentario, textoRespuesta) {
    const obj = {
      mensaje_respuesta: textoRespuesta,
      usuario: parseInt(localStorage.getItem('id_usuario')),
      comentario: id_comentario,
    }
    console.log(obj);
    await Llamados.postData(obj, 'respuestas')
  }

  async function enviar() {
    const obj = {
      usuario: parseInt(localStorage.getItem('id_usuario')),
      mensaje: comentario
    }
    console.log(obj);
    
    const serverResponse = await Llamados.postData(obj, 'comentarios')
  }

  return (
    
    <div className="main-comunidad-container">
      <Navigation />
      {/* Elementos flotantes decorativos */}
      <div className="main-comunidad-floating-element"></div>
      <div className="main-comunidad-floating-element"></div>
      <div className="main-comunidad-floating-element"></div>
      
      <div className="container main-comunidad-content py-5">
        
        {/* Header con título y descripción */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-lg-10">
            <div className="main-comunidad-header text-center">
              <h1 className="main-comunidad-title">Comunidad</h1>
              <p className="main-comunidad-subtitle">
                Explora, comparte y conecta con nuestra comunidad
              </p>
            </div>
          </div>
        </div>

        {/* Botón volver */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <Link to="/foro" className="main-comunidad-back-btn">
              Volver a la principal
            </Link>
          </div>
        </div>

        {/* Formulario para publicar comentario */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-lg-8">
            <div className="main-comunidad-form-section text-center">
              <h2 className="main-comunidad-form-title">Publica tu comentario</h2>
              <input 
                className="form-control main-comunidad-input" 
                type="text" 
                placeholder="Comparte tus experiencias, dudas y sugerencias..."
                onChange={(e) => setComentario(e.target.value)} 
              />
              <button 
                className="btn main-comunidad-submit-btn" 
                onClick={enviar}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>

        {/* Grid de comentarios */}
        <div className="row">
          <div className="col-12">
            {todosComentarios.length === 0 ? (
              <div className="main-comunidad-empty-state">
                <p className="main-comunidad-empty-text">
                  No hay comentarios aún. Sé el primero en participar.
                </p>
              </div>
            ) : (
              <div className="main-comunidad-comments-grid">
                {todosComentarios.map((comentario) => (
                  <div key={comentario.id} className="main-comunidad-comment-card">
                    <div className="card-body p-4">
                      <Comentario
                        comentarioId={comentario.id}
                        gravedad={comentario.username}
                        anuncio={comentario.mensaje}
                        responder={responder}
                      />
                    </div>
                    
                  </div>
                ))}
              </div> 
            )}
          </div>
          
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default MainComunidad