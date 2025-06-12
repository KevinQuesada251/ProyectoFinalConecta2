import React, { useEffect, useState } from 'react'
import Comentario from './Comentario'
import { Link } from 'react-router-dom'
import Llamados from '../services/Llamados'

function MainAnunciosForo() {
    const [anuncios, setAnuncios] = useState([])

    useEffect(()=>{
        async function traerData() {
            const data = await Llamados.getData('anuncios')
            setAnuncios(data)
        }
        traerData()
    },[])
  return (
    <div>
        <div className='col'>
            <div className='row'>
                <h1>Nombre del foro: "Anuncios Oficial"</h1>
            </div>
            <div className='col'>
                <div className='row'>
                    <Link to={'/foro'} >Volver a la principal</Link>
                </div>
            </div>
             <div className='row'>
            </div>
            <div className='row'>
                {anuncios.map((anuncio)=>(
                    <Comentario
                        key={anuncio.id}
                        hora={anuncio.hora}
                        fecha={anuncio.fecha_anuncio}
                        anuncio={anuncio.texto_anuncio}
                        gravedad={anuncio.gravedad_anuncio}
                    />
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default MainAnunciosForo