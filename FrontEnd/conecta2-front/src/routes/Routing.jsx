import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Register from '../pages/Register';

function Routing() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default Routing