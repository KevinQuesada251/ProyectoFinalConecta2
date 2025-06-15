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

  // Función que se pasa a cada Comentario para manejar respuestas
  async function responder(id_comentario, textoRespuesta) {
    const obj = {
      mensaje_respuesta: textoRespuesta,
      usuario: parseInt(localStorage.getItem('id_usuario')),
      comentario: id_comentario,
    }
    console.log(obj);
    
    await Llamados.postData(obj, 'respuestas')
    // Aquí podrías actualizar la lista o mostrar un mensaje
  }

  return (
    <div>
      <h1>Comunidad</h1>
      <div>
        {todosComentarios.map((comentario) => (
          <Comentario
            key={comentario.id}
            comentarioId={comentario.id}
            gravedad={comentario.username}
            anuncio={comentario.mensaje}
            responder={responder}
          />
        ))}

      </div>
    </div>
  )
}

export default MainComunidad

