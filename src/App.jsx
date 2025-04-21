import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import  Aleatorios from './Componentes/Aleatorios'
import Capturas from './Componentes/Capturas'
import Favoritos from './Componentes/Favoritos'
import Lista from './Componentes/Lista'
import Pokemon from './Componentes/Pokemon'
import Usuarios from './Componentes/Usuarios'
import Menu from './Componentes/Menu';

function App() {

  return (
    <Router>
      <Menu/>
      <Routes>
      <Route path="/" element={<Lista />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturas" element={<Capturas />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/Pokemon/:name" element={<Pokemon />} />
      </Routes>
    </Router>

    )
}

export default App
