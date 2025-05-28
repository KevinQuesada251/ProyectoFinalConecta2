import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import MapPage from '../pages/MapPage';
import Contacto from '../pages/Contacto';
import Perfil from '../pages/Perfil';
import Admin from '../pages/Admin';

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
                <Route path='/admin' element={<Admin/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing