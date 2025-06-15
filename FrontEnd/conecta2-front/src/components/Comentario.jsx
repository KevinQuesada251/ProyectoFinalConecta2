import React, { useEffect, useState } from 'react'
import Llamados from '../services/Llamados'

function Comentario({ gravedad, anuncio, comentarioId, responder }) {
  const [mostrarInput, setMostrarInput] = useState(false)
  const [respuestaTexto, setRespuestaTexto] = useState("")
  const [respuestas, setRespuestas] = useState([])
  const [recarga, setRecarga] = useState(false)

  const enviarRespuesta = async () => {
    if (respuestaTexto.trim() === "") return
    try {
      await responder(comentarioId, respuestaTexto) // Usas la prop que viene de MainComunidad
      setRespuestaTexto("")
      setMostrarInput(false)
      setRecarga(!recarga)
    } catch (error) {
      console.error("Error al enviar respuesta:", error)
    }
  }

  useEffect(()=>{
    async function traerInfo() {
      const dataRespuestas = await Llamados.getData('respuestas')
      setRespuestas(dataRespuestas)
      console.log(dataRespuestas);
      
    }
    traerInfo()
  },[recarga])

  const respuestasFiltradas = respuestas.filter(
    (r) => r.comentario === comentarioId
  )

  return (
    <div className='w-75 h-100 border border-dark p-3 mb-3'>
      <div className='row'>
        <div className='col'>Usuario: {gravedad}</div>
      </div>
      <div className='row'>
        <div className='col'>Comentario: {anuncio}</div>
      </div>
      <div className='row'>
        <div className='col'>
          <button onClick={() => setMostrarInput(!mostrarInput)}>Responder</button>
        </div>
      </div>
      {mostrarInput && (
        <div className='row mt-2'>
          <div className='col'>
            <input
              type="text"
              value={respuestaTexto}
              onChange={(e) => setRespuestaTexto(e.target.value)}
              placeholder="Escribe tu respuesta"
            />
            <button onClick={enviarRespuesta} className='ms-2'>Enviar</button>
            {respuestasFiltradas.map((respuesta)=>(
              <div key={respuesta.id}>
                  <p>{respuesta.username}</p>
                  <p>{respuesta.mensaje_respuesta}  {respuesta.fecha}</p>
              </div> 
            ))}
          </div>
     
        </div>
      )}
    </div>
  )
}

export default Comentario

