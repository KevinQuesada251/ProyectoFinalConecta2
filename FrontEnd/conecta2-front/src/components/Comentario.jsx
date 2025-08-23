import React, { useEffect, useState, useRef } from 'react'
import Llamados from '../services/Llamados'
import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { CgArrowBottomRight } from "react-icons/cg";
import { IoMdSend } from "react-icons/io";

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

  const respuestasFiltradas = respuestas
    .filter(r => r.comentario === comentarioId)
    .sort((a, b) => new Date(a.fecha) - new Date(b.fecha))

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
      await Llamados.patchData({ mensaje_respuesta: respuestaTexto }, 'respuestas', respuestaId)
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
    Llamados.patchData({ reporte: nuevoContador }, 'comentarios', comentarioId)

    if (nuevoContador > 1) {
      setContador(0)
      localStorage.setItem('contador', 0)
      Llamados.patchData({ reporte: 0 }, 'comentarios', comentarioId)
    }
  }

  return (
    <div className="comentario-container mb-3 w-100">
      <div className="border rounded-4 p-3 bg-white shadow-sm w-100">
        {/* Comentario principal */}
        <div className="d-fle align-items-start mb-2">
          <div>
            <strong className="text-primary">{gravedad}</strong>
            <p className="mb-1">{anuncio}</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <button
              className="btn btn-outline-secondary btn-sm rounded-pill"
              onClick={() => setMostrarInput(!mostrarInput)}
              disabled={respuestaEditando !== null}
            >
              {mostrarInput ? <MdCancel /> : <CgArrowBottomRight />}
            </button>
            <i
              onClick={reportar}
              className="bi bi-exclamation-circle-fill text-danger"
              role="button"
              title="Reportar comentario"
            >
              {contador > 0 && <span className="ms-1">{contador}</span>}
            </i>
          </div>
        </div>

        {/* Input para responder */}
        {mostrarInput && !respuestaEditando && (
          <div className="mt-2">
            <div className="input-group mb-2 w-100">
              <input
                type="text"
                className="form-control"
                value={respuestaTexto}
                onChange={(e) => setRespuestaTexto(e.target.value)}
                placeholder="Escribe tu respuesta..."
              />
              <button className="btn btn-success" onClick={enviarRespuesta}>
                <IoMdSend size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Respuestas */}
        {respuestasFiltradas.length > 0 && (
          <div className="respuestas-container mt-3 d-flex flex-column gap-2 w-100">
            {respuestasFiltradas.map((respuesta) => (
              <div key={respuesta.id} className="border rounded-3 p-2 bg-light w-100">
                <div className="d-flex justify-content-between align-items-start">
                  <div>
                    <p className="mb-1 fw-semibold">{respuesta.username}</p>
                    <p className="mb-0">{respuesta.mensaje_respuesta}</p>
                    <small className="text-muted">{respuesta.fecha}</small>
                  </div>
                  {parseInt(localStorage.getItem('id_usuario')) === respuesta.usuario && (
                    <div className="d-flex gap-2">
                      <FaPen
                        color='#2563eb'
                        onClick={() => {
                          setRespuestaTexto(respuesta.mensaje_respuesta)
                          setRespuestaEditando(respuesta.id)
                          setMostrarInput(false)
                        }}
                      />
                      <FaRegTrashAlt
                        color='#dc2626'
                        onClick={() => borrarRespuesta(respuesta.id)}
                      />
                    </div>
                  )}
                </div>

                {respuestaEditando === respuesta.id && (
                  <div className="input-group mt-2 w-100">
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
                    <MdCancel
                      onClick={() => {
                        setRespuestaEditando(null)
                        setRespuestaTexto("")
                      }}
                      style={{ cursor: 'pointer', fontSize: '1.5rem', marginLeft: '5px' }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Comentario
