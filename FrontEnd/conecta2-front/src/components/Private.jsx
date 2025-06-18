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
      validarInicio() ? element : <img src="src/assets/401.png" alt="" style={{width:'100%', height:'100vh'}}/>
    )
}

export default Private