import React, { Children } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import MapPage from '../pages/MapPage';
import Contacto from '../pages/Contacto';
import Perfil from '../pages/Perfil';
import Admin from '../pages/Admin';
import Foro from '../pages/Foro';
import MainAnunciosForo from '../components/MainAnunciosForo';
import Private from '../components/Private';
import MainComunidad from '../components/MainComunidad';
import Ubicaciones from '../pages/Ubicaciones';
import PoliticasPrivacidad from '../pages/PoliticasPrivacidad';
import TerminosCondiciones from '../pages/TerminosCondiciones';

function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/map' element={<MapPage/>}></Route>
                <Route path='/contact' element={<Contacto/>}></Route>
                <Route path='/profile' element={<Perfil/>}></Route>
                <Route path='/admin' element={<Private element={<Admin/>}/>}/>
                <Route path='/foro' element={<Foro/>}></Route>
                <Route path='/anuncios' element={<MainAnunciosForo/>}></Route>
                <Route path='/comunidad' element={<MainComunidad/>}></Route>
                <Route path='/ubicaciones' element={<Ubicaciones/>}></Route>
                <Route path='/politicas' element={<PoliticasPrivacidad/>}></Route>
                <Route path='/condiciones' element={<TerminosCondiciones/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing