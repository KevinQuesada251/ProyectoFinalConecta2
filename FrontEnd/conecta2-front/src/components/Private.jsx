import { Navigate } from "react-router-dom";

const validarInicio=()=>{
  const estasautenticado = localStorage.getItem("rol");

  if (estasautenticado === "admin") {
    return true;
  } else {
    return false;
  }
}

const Private = ({ element }) => {
  return(
      validarInicio() ? element : <h1>NO ESTA AUTENTICADO</h1>
    )
}

export default Private