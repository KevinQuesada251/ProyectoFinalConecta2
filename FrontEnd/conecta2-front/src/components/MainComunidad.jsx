import React, { useEffect, useState } from 'react'
import Comentario from './Comentario'
import Llamados from '../services/Llamados'
import { Link } from 'react-router-dom'

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

  // Función para responder a un comentario
  async function responder(id_comentario, textoRespuesta) {
    const obj = {
      mensaje_respuesta: textoRespuesta,
      usuario: parseInt(localStorage.getItem('id_usuario')),
      comentario: id_comentario,
    }
    console.log(obj)
    await Llamados.postData(obj, 'respuestas')
  }

  // Función para publicar un nuevo comentario
  async function enviar() {
    if (comentario.trim() === "") return
    const obj = {
      usuario: parseInt(localStorage.getItem('id_usuario')),
      mensaje: comentario
    }
    console.log(obj)
    await Llamados.postData(obj, 'comentarios')
    setComentario("") // limpiar input
    const data = await Llamados.getData('comentarios') // refrescar lista
    setTodosComentarios(data)
  }

  return (
    <div style={{ background: '#CAE8FF' }} className="container-fluid py-5">
      <div className="container">
        {/* Header */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h1 className="text-primary fw-bold">Comunidad</h1>
            <p className="text-muted">
              Comparte tus experiencias, dudas y sugerencias sobre conectividad. Aquí puedes interactuar con otros usuarios.
            </p>
          </div>
        </div>

        {/* Botón de volver */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <Link
              to="/foro"
              className="btn btn-outline-dark rounded-pill px-4"
            >
              Volver a la principal
            </Link>
          </div>
        </div>

        {/* Input para nuevo comentario */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-md-8 text-center">
            <h2>Publica tu comentario</h2>
            <div className="d-flex gap-2 justify-content-center mt-2">
              <input
                className="form-control"
                type="text"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
                placeholder="Escribe tu comentario..."
              />
              <button className="btn btn-success" onClick={enviar}>
                Enviar
              </button>
            </div>
          </div>
        </div>

        {/* Lista de comentarios */}
        <div className="row justify-content-center">
          {todosComentarios.length === 0 ? (
            <div className="col-12 text-center text-muted py-5">
              <p className="mb-0">No hay comentarios aún. Sé el primero en participar.</p>
            </div>
          ) : (
            todosComentarios.map((comentario) => (
              <div key={comentario.id} className="col-12 mb-4">
                <Comentario
                  comentarioId={comentario.id}
                  gravedad={comentario.username} // Nombre del usuario
                  anuncio={comentario.mensaje} // Mensaje del comentario
                  responder={responder}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default MainComunidad

