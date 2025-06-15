import React, { useEffect, useState } from 'react'
import Comentario from './Comentario'
import { Link } from 'react-router-dom'
import Llamados from '../services/Llamados'
import '../styles/Anuncios.css'
import Anuncio from './Anuncio'

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
            <div className='row' style={{background:'#12229D'}}>
                <h1>Anuncios Oficial</h1>
            </div>
            <div className='col' >
                <div className='row' style={{background:'black'}}>
                    <Link to={'/foro'} >Volver a la principal</Link>
                </div>
            </div>
             <div className='row'>
            </div>
            <div className='row'>
                {anuncios.map((anuncio)=>(
                    <Anuncio
                        key={anuncio.id}
                        hora={anuncio.hora}
                        fecha={anuncio.fecha_anuncio}
                        texto={anuncio.texto_anuncio}
                        gravedad={anuncio.gravedad_anuncio}
                    />
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default MainAnunciosForo