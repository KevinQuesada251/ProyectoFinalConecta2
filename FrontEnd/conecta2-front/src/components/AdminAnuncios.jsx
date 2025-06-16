import React, { useEffect } from 'react'
import { useState } from 'react';
import Llamados from '../services/Llamados';

function AdminAnuncios() {

  const [anuncios, setAnuncios] = useState([])
  const [nuevoAnuncio, setNuevoAnuncio] = useState("")
  const [gravedad, setGravedad] = useState("")
  const [recarga, setRecarga] = useState(false)
  useEffect(() => {
    async function getData() {
      const data = await Llamados.getData("anuncios")
      setAnuncios(data)
      console.log(data);

    }
    getData()
  }, [recarga])

  async function cargar() {
    const obj = {
      texto_anuncio: nuevoAnuncio,
      gravedad_anuncio: gravedad
    }
    console.log(obj);
    
    const serverResponse = await Llamados.postData(obj, 'anuncios')
    setRecarga(!recarga)
  }

    async function eliminar(id) {
      console.log(id);
      
        const serverResponse = await Llamados.deleteData('anuncios_eliminar',id)
        setRecarga(!recarga)
      }


  return (
    <div className='container-users'>
      <h1 className='tituloAdmin'>Administracion</h1>
      <h2 className='tituloUsuarios'>Anuncios</h2>
      <table className="table border border-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Publicacion</th>
            <th scope='col'>Gravedad</th>
            <th scope='col'>Editar</th>
            <th scope='col'>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {anuncios.map((anuncio) => {
            return (
              <>
                <tr>
                  <td>{anuncio.id}</td>
                  <td>{anuncio.texto_anuncio}</td>
                  <td>{anuncio.gravedad_anuncio}</td>
                  <td><button className="btn btn-primary">Editar</button></td>
                  <td><button className="btn btn-danger" onClick={()=>eliminar(anuncio.id)}>Eliminar</button></td>
                </tr>
              </>
            )
          })}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <div className='row w-75 p-3 rounded' style={{ background: '#2c2c2c' }}>
          <div className='col d-flex align-items-center'>
            <label className='text-white'>Nuevo anuncio</label>
          </div>
          <div className='col'>
            <select className="form-select" onChange={(e) => setGravedad(e.target.value)}>
              <option value="level">Level</option>
              <option value="grave">Grave</option>
              <option value="muy grave">Muy grave</option>
            </select>
          </div>
          <div className='col'>
            <input className="form-control" onChange={(e) => setNuevoAnuncio(e.target.value)} type="text" />
          </div>
          <div className='col'>
            <button className='btn btn-success w-100' onClick={cargar}>Crear</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AdminAnuncios