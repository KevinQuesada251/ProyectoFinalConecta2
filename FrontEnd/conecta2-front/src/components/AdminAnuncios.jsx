import React, { useEffect } from 'react'
import { useState } from 'react';
import Llamados from '../services/Llamados';
import ModalAnuncios from './ModalAnuncios';
import Swal from 'sweetalert2'

function AdminAnuncios() {

  const [anuncios, setAnuncios] = useState([])
  const [nuevoAnuncio, setNuevoAnuncio] = useState("")
  const [gravedad, setGravedad] = useState("")
  const [recarga, setRecarga] = useState(false)
  const [showModal, setShowModal] = useState(false);


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
      const result = await Swal.fire({
        title: "¿Estás seguro de eliminar?",
        text: "No se pueden recuperar los datos",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar"
      });
    
      if (result.isConfirmed) {
        const serverResponse = await Llamados.deleteData('anuncios_eliminar', id);
        setRecarga(!recarga)
    
        Swal.fire({
          title: "¡Eliminado!",
          text: "Se eliminó con éxito",
          icon: "success"
        });
      }
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
                  <td><button className="btn btn-primary"
                      onClick={() => {
                        setShowModal(true);
                        localStorage.setItem("anuncio_id",anuncio.id)
                      }}
                  >Editar</button></td>
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
          <ModalAnuncios show={showModal} onClose={() => setShowModal(false)} id={localStorage.getItem('anuncio_id')} />
    </div>
  )
}

export default AdminAnuncios