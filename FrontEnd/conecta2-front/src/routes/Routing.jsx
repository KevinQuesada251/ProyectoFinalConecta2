import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Login from '../pages/Login';
import MapPage from '../pages/MapPage';

function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/home' element={<Home/>}></Route>
                 <Route path='/map' element={<MapPage/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing