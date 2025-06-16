import { useEffect, useState } from "react"
import Llamados from "../services/Llamados"

import ModalUbicaciones from "../components/ModalUbicaciones"

function AdminUbicaciones() {
  const [ubicaciones, setUbicaciones] = useState([])
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function traerInfo() {  
      const todasUbicaciones = await Llamados.getData('ubicaciones')
      setUbicaciones(todasUbicaciones)
    }
    traerInfo()
  }, [])

  async function eliminar(id){
    const serverResponse = await Llamados.deleteData('ubicaciones',id)
  }
  return (
    <>
      <div className='container-users'>
        <h1 className='tituloAdmin'>Administracion</h1>
        <h2 className='tituloUsuarios'>Ubicaciones</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Latitud</th>
              <th scope="col">Longitud</th>
              <th scope="col">Editar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {ubicaciones.map((ubicacion) => {
              return (
                
                  <tr key={ubicacion.id}>
                    <td>{ubicacion.nombre_ubicacion}</td>
                    <td>{ubicacion.descripcion}</td>
                    <td>{ubicacion.latitud}</td>
                    <td>{ubicacion.longitud}</td>
                    <td><button className="btn btn-primary"
                      onClick={() => {
                        setShowModal(true);
                        localStorage.setItem("ubicacion_id",ubicacion.id)
                      }}
                    >Editar</button></td>
                    <td>
                     <button className="btn btn-danger"
                      onClick={() => eliminar(ubicacion.id)}
                    >
                      Eliminar
                    </button>
                    </td>
                    <ModalUbicaciones latitud={ubicacion.latitud} longitud={ubicacion.longitud} show={showModal} onClose={() => setShowModal(false)} nombreM={ubicacion.nombre_ubicacion} descripcionM={ubicacion.descripcion} />
                  </tr>

                
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default AdminUbicaciones