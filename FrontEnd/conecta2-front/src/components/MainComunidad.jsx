import React, { useEffect, useState } from 'react'
import Comentario from './Comentario'
import Llamados from '../services/Llamados'

function MainComunidad() {
  const [todosComentarios, setTodosComentarios] = useState([])

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

  return (
    <div style={{ background: '#CAE8FF' }} className="container-fluid py-5">
      <div className="container">
        
        <div className="row justify-content-center mb-4">
          <div className="col-12 text-center">
            <h1 className="text-primary fw-bold">Comunidad</h1>
            <p className="text-muted">
              Comparte tus experiencias, dudas y sugerencias sobre conectividad. Aquí puedes interactuar con otros usuarios.
            </p>
          </div>
        </div>

        <div className="row">
          {todosComentarios.length === 0 ? (
            <div className="col-12 text-center text-muted py-5">
              <p className="mb-0">No hay comentarios aún. Sé el primero en participar.</p>
            </div>
          ) : (
            todosComentarios.map((comentario) => (
              <div key={comentario.id} className="col-12 col-md-6 mb-4">
                <div className="card shadow-sm rounded-4 h-100">
                  <div className="card-body">
                    <Comentario
                      comentarioId={comentario.id}
                      gravedad={comentario.username}
                      anuncio={comentario.mensaje}
                      responder={responder}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default MainComunidad
