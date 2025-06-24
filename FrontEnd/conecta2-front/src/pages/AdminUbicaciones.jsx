import { useEffect, useState } from "react"
import Llamados from "../services/Llamados"
import ModalUbicaciones from "../components/ModalUbicaciones"
import Swal from 'sweetalert2'

function AdminUbicaciones() {
  const [ubicaciones, setUbicaciones] = useState([])
  const [showModal, setShowModal] = useState(false);
  const [recarga,setRecarga] = useState(false)

  useEffect(() => {
    async function traerInfo() {
      const todasUbicaciones = await Llamados.getData('ubicaciones')
      setUbicaciones(todasUbicaciones)
    }
    traerInfo()
  }, [recarga])

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
    const serverResponse = await Llamados.deleteData('ubicaciones', id);
    setRecarga(!recarga)

    Swal.fire({
      title: "¡Eliminado!",
      text: "Se eliminó con éxito",
      icon: "success"
    });
  }
}

  return (
    <>
      <div className='container-users'>
        <h1 className='tituloAdmin'>Administracion</h1>
        <h2 className='tituloUsuarios'>Ubicaciones</h2>
        <table className="table border border-dark table-striped table-hover">
          <thead>
            <tr className="table-dark">
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
                      localStorage.setItem("ubicacion_id", ubicacion.id)
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