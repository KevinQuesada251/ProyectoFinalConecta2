import React, { useEffect, useState, useRef } from 'react'
import Llamados from '../services/Llamados'
import '../styles/Comentario.css'

function Comentario({ gravedad, anuncio, comentarioId, responder }) {
  const [mostrarInput, setMostrarInput] = useState(false)
  const [respuestaTexto, setRespuestaTexto] = useState("")
  const [respuestaEditando, setRespuestaEditando] = useState(null)
  const [respuestas, setRespuestas] = useState([])
  const [recarga, setRecarga] = useState(false)
  const [contador, setContador] = useState(0)
  const inputRef = useRef(null)

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

  useEffect(() => {
    const contadorGuardado = parseInt(localStorage.getItem('contador')) || 0
    setContador(contadorGuardado)
  }, [])

  useEffect(() => {
    if (respuestaEditando !== null && inputRef.current) {
      inputRef.current.focus()
    }
  }, [respuestaEditando])

  const respuestasFiltradas = respuestas.filter(
    (r) => r.comentario === comentarioId
  )

  async function borrarRespuesta(id_respuesta) {
    try {
      await Llamados.deleteData('respuestas', id_respuesta)
      setRecarga(!recarga)
    } catch (err) {
      console.error("Error al eliminar respuesta:", err)
    }
  }

  async function guardarEdicion(respuestaId) {
    if (respuestaTexto.trim() === "") return
    try {
      await Llamados.patchData({
        mensaje_respuesta: respuestaTexto
      }, 'respuestas', respuestaId)
      setRespuestaEditando(null)
      setRespuestaTexto("")
      setRecarga(!recarga)
    } catch (err) {
      console.error("Error al editar respuesta:", err)
    }
  }

  function reportar() {
    const nuevoContador = contador + 1
    setContador(nuevoContador)
    localStorage.setItem('contador', nuevoContador)
    const obj = {
      reporte : nuevoContador
    }
    const serverResponse = Llamados.patchData(obj, 'comentarios', comentarioId)

    if (nuevoContador > 1) {
      setContador(0)
      localStorage.setItem('contador', 0)
      const obj = {
      reporte : 0
    }
    const serverResponse = Llamados.patchData(obj, 'comentarios', comentarioId)

    }
  }

  return (
    <div className="border rounded-4 p-3 bg-white shadow-sm">
      <div className="mb-2">
        <strong className="text-primary">Usuario:</strong> {gravedad}
      </div>
      <div className="mb-3">
        <strong className="text-dark">Comentario:</strong> {anuncio}
      </div>
      <div className="mb-2 d-flex align-items-center">
        <button
          className="btn btn-outline-secondary btn-sm rounded-pill"
          onClick={() => setMostrarInput(!mostrarInput)}
          disabled={respuestaEditando !== null}
        >
          {mostrarInput ? "Cancelar" : "Responder"}
        </button>
        <i
          onClick={reportar}
          className="bi bi-exclamation-circle-fill text-danger ms-3"
          role="button"
          title="Reportar comentario"
        >
          {contador > 0 && <span className="ms-1">{contador}</span>}
        </i>
      </div>

      {mostrarInput && !respuestaEditando && (
        <div className="mt-3">
          <div className="input-group mb-2">
            <input
              type="text"
              className="form-control"
              value={respuestaTexto}
              onChange={(e) => setRespuestaTexto(e.target.value)}
              placeholder="Escribe tu respuesta..."
            />
            <button className="btn btn-success" onClick={enviarRespuesta}>
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
                  <div className="mt-2">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => borrarRespuesta(respuesta.id)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="btn btn-sm btn-primary ms-2"
                      onClick={() => {
                        setRespuestaTexto(respuesta.mensaje_respuesta)
                        setRespuestaEditando(respuesta.id)
                        setMostrarInput(false)
                      }}
                    >
                      Editar
                    </button>
                  </div>
                )}

                {respuestaEditando === respuesta.id && (
                  <div className="input-group mt-2">
                    <input
                      ref={inputRef}
                      type="text"
                      className="form-control"
                      value={respuestaTexto}
                      onChange={(e) => setRespuestaTexto(e.target.value)}
                      placeholder="Editar respuesta..."
                    />
                    <button
                      className="btn btn-success"
                      onClick={() => guardarEdicion(respuesta.id)}
                    >
                      Guardar
                    </button>
                    <button
                      className="btn btn-secondary ms-2"
                      onClick={() => {
                        setRespuestaEditando(null)
                        setRespuestaTexto("")
                      }}
                    >
                      Cancelar
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Comentario



