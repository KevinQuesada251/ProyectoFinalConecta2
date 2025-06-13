import React, { useEffect, useState } from 'react'
import Comentario from './Comentario'
import Llamados from '../services/Llamados'
import { Button } from 'react-bootstrap'

function MainComunidad() {
  const[mensaje,setMensaje] = useState("")
  const [todosComentarios,setTodosComentarios] = useState([])
  const [respuesta, setRespuesta] = useState("")
  const [comentario_id, setComentario_Id] = useState("")

  useEffect(()=>{
    async function getData() {
      const Data = await Llamados.getData('comentarios')
      setTodosComentarios(Data)
    }
    getData()
  },[])
  async function publicar() {
    const obj = {
      "mensaje": mensaje,
      "usuario": localStorage.getItem('id_usuario')
    }
    const serverResponse = await Llamados.postData(obj,'comentarios')
  }
  function responder(id_comentario) {
    const obj = {
      "mensaje_repuestas": respuesta,
      "usuario": localStorage.getItem('id_usuario'),
      "comentario": id_comentario
    }
  }
  return (
    <div>
        <div className='w-100'>
          <div className='row'>
            <h1>Comunidad</h1>
          </div>
            <div className='row'>
                <div className='col'>
                  <h4>Crear un comentario</h4>
                </div>
                <div className='col'>
                  <input type="text" onChange={(e)=>setMensaje(e.target.value)} />
                </div>
                <div>
                  <input type="text" onChange={(e)=>setRespuesta(e.target.value)} />
                  <button onClick={publicar}>Publicar</button>
                </div>
            </div>
            <div>
              {todosComentarios.map((comentario)=>(
                <Comentario
                key={()=>setComentario_Id(comentario.id)}
                gravedad={comentario.username}
                anuncio={comentario.mensaje}
                responder={responder}

                />

              ))}
                
            </div>
        </div>
    </div>
  )
}

export default MainComunidad