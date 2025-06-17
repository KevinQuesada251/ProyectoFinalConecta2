import React from 'react'
import Comentario from './Comentario'
import { Link } from 'react-router-dom'

function MainForo() {
  return (
    <div className="container mt-5">
      <div className="card shadow rounded-4 m-25">
        <div className="card-header text-white text-center rounded-top-4" style={{background:'#12229D'}}>
          <h3 className="mb-0">Foros disponibles</h3>
        </div>
        <div className="card-body p-0">
          <table className="table table-hover mb-0">
            <thead className="table-dark">
              <tr>
                <th scope="col" className="w-50">Foro</th>
                <th scope="col">Publicaciones</th>
                <th scope="col">Última Publicación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" className="py-3 px-3">Anuncios Oficiales</th>
                <td className="py-3 px-3">
                  <Link to={'/anuncios'} className="btn btn-outline-primary btn-sm">Entrar</Link>
                </td>
                <td className="py-3 px-3 text-muted">-</td>
              </tr>
              <tr>
                <th scope="row" className="py-3 px-3">Comunidad</th>
                <td className="py-3 px-3">
                  <Link to={'/comunidad'} className="btn btn-outline-primary btn-sm">Entrar</Link>
                </td>
                <td className="py-3 px-3 text-muted">-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MainForo
