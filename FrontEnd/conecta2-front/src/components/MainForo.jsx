import React from 'react'
import Comentario from './Comentario'
import { Link } from 'react-router-dom'
function MainForo() {
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col" className="w-50">Foro</th> {/* 50% ancho */}
            <th scope="col">Publicaciones</th>
            <th scope="col">Ultima Publicacion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="py-3 px-3">Anuncios Oficiales</th>
            <td className="py-3 px-3"><Link to={'/anuncios'}>Entrar</Link></td>
          </tr>
          <tr>
            <th scope="row" className="py-3 px-3">Comunidad</th>
            <td className="py-3 px-3"><Link to={'/comunidad'}>Entrar</Link></td>
          </tr>
        </tbody>
      </table>

    </div>
    
  )
}

export default MainForo