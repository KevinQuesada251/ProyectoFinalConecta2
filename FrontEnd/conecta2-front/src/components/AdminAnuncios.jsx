import React, { useEffect } from 'react'
import { useState } from 'react';
import Llamados from '../services/Llamados';

function AdminAnuncios() {

  const [anuncios, setAnuncios] = useState([])
  const [nuevoAnuncio, setNuevoAnuncio] = useState("")
  const[gravedad, setGravedad] = useState("")
  useEffect(()=>{
    async function getData() {
      const data = await Llamados.getData("anuncios")
      setAnuncios(data)
      console.log(data);
      
    }
    getData()
  },[])

  async function cargar() {
    const obj ={
        texto_anuncio : nuevoAnuncio,
        gravedad_anuncio : gravedad
    }
    const serverResponse = await Llamados.postData(obj,'anuncios')
  }
  

  return (
    <div className='container-users'>
      <h1 className='tituloAdmin'>Administracion</h1>
      <h2 className='tituloUsuarios'>Anuncios</h2>
      <table className="table">
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
                  <td>{anuncio.gravedad_anuncio }</td>
                  <td><button>Editar</button></td>
                  <td><button>Eliminar</button></td>
                </tr>
              </> 
            )
          })}
        </tbody>
      </table>
      <div className='row'>
        <div className='col'><label>Nuevo anuncio</label></div>
        <div className='col'>
            <select name="" id="" onClick={(e)=>setGravedad(e.target.value)}>
                <option value="l
                Level">Level</option>
                <option value="grave">Grave</option>
                <option value="Muy grave">Muy grave</option>
            </select>
        </div>
        <div className='col'><input onChange={(e)=>setNuevoAnuncio(e.target.value)} type="text" /></div>
        <div className='col'><button onClick={cargar}>Crear</button></div> 
      </div>
    </div>
  )
}

export default AdminAnuncios