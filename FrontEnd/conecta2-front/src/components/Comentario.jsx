import React, { useEffect, useState } from 'react'
import Llamados from '../services/Llamados'

function Comentario({ gravedad, anuncio, comentarioId, responder }) {
  const [mostrarInput, setMostrarInput] = useState(false)
  const [editar, setEditar] = useState(false)
  const [respuestaTexto, setRespuestaTexto] = useState("")
  const [respuestas, setRespuestas] = useState([])
  const [recarga, setRecarga] = useState(false)

  const enviarRespuesta = async () => {
    if (respuestaTexto.trim() === "") return
    try {
      await responder(comentarioId, respuestaTexto)
      setRespuestaTexto("")
      setMostrarInput(false)
      setRecarga(!recarga)
    } catch (error) {
      console.error("Error al enviar respuesta:", error)
    }
  }

  useEffect(() => {
    async function traerInfo() {
      const dataRespuestas = await Llamados.getData('respuestas')
      setRespuestas(dataRespuestas)
    }
    traerInfo()
  }, [recarga])

  const respuestasFiltradas = respuestas.filter(
    (r) => r.comentario === comentarioId
  )

  async function borrarRespuesta(id_respuesta) {
       const serverResponse =  await Llamados.deleteData('respuestas',id_respuesta)
      setRecarga(!recarga)
  }

  return (
    <div className="border rounded-4 p-3 bg-white shadow-sm">
      <div className="mb-2">
        <strong className="text-primary">Usuario:</strong> {gravedad}
      </div>
      <div className="mb-3">
        <strong className="text-dark">Comentario:</strong> {anuncio}
      </div>
      <div className="mb-2">
        <button
          className="btn btn-outline-secondary btn-sm rounded-pill"
          onClick={() => setMostrarInput(!mostrarInput)}
        >
          {mostrarInput ? "Cancelar" : "Responder"}
        </button>
      </div>

      {mostrarInput && (
        <div className="mt-3">
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              value={respuestaTexto}
              onChange={(e) => setRespuestaTexto(e.target.value)}
              placeholder="Escribe tu respuesta..."
            />
            <button
              className="btn btn-success"
              onClick={enviarRespuesta}
            >
              Enviar
            </button>
          </div>
        </div>
      )}

      {respuestasFiltradas.length > 0 && (
        <div className="mt-3">
          <h6 className="text-secondary">Respuestas:</h6>
          <ul className="list-group list-group-flush">
            {respuestasFiltradas.map((respuesta) => (
              <li key={respuesta.id} className="list-group-item">
                <p className="mb-1 fw-semibold">{respuesta.username}</p>
                <p className="mb-0">{respuesta.mensaje_respuesta}</p>
                <small className="text-muted">{respuesta.fecha}</small>
                {parseInt(localStorage.getItem('id_usuario')) === respuesta.usuario && (
                  <>
                  <button
                    className="btn btn-sm btn-danger mt-2"
                    onClick={() => borrarRespuesta(respuesta.id)}
                  >
                    Eliminar
                  </button>
                  <button
                    className="btn btn-sm btn-primary mt-2 ms-2"
                    onClick={() => {
                      setRespuestaTexto(respuesta.mensaje_respuesta)
                      setEditar(true)
                    }}
                  >
                    Editar
                  </button>
                </>
                )}
                {editar && (<>
                  <div className="input-group mt-2">
                    <input
                      type="text"
                      className="form-control"
                      value={respuestaTexto}
                      onChange={(e) => setRespuestaTexto(e.target.value)}
                      placeholder="Editar respuesta..."
                    />
                    <button
                      className="btn btn-success"
                      onClick={enviarRespuesta}
                    >
                      Guardar
                    </button>
                  </div>
                </>)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Comentario


