import React from 'react'
import Comentario from './Comentario'
import { Link } from 'react-router-dom'

function MainAnunciosForo() {
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
                <button className='btn-primary'>Crear anuncio</button>
            </div>
            <div className='row'>
                <Comentario/>
            </div>
        </div>
        <div className=''></div>
    </div>
  )
}

export default MainAnunciosForo