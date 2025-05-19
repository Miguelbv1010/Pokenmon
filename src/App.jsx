import { useState,useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AppProvider } from './contexto/contexto';
import './App.css'
import {supabase} from "./supabase"
import  Aleatorios from './Componentes/Aleatorios'
import Capturas from './Componentes/Capturas'
import Favoritos from './Componentes/Favoritos'
import Lista from './Componentes/Lista'
import Pokemon from './Componentes/Pokemon'
import Usuarios from './Componentes/Usuarios'
import Menu from './Componentes/Menu';
import Login from './Componentes/Login';
import Registro from './Componentes/Registro';
import Administrador from './Componentes/Administrador';


function App() {
const [usuario, setUsuario] = useState(null);
const [cargando, setCargando] = useState(true);

useEffect(() => {
async function verificarSesion() {
const { data: { session } } = await supabase.auth.getSession();
setUsuario(session?.user || null);
setCargando(false);
}
verificarSesion();

// Escucha cambios en la sesión
supabase.auth.onAuthStateChange((_event, session) => {

setUsuario(session?.user || null);
});
}, []);

if (cargando) return <p>Cargando...</p>;
return (
<AppProvider>
<Router>
{usuario && <Menu />}

<Routes>
<Route path="/" element={usuario ? <Lista /> : <Navigate to="/login"

/>} />

<Route path="/usuarios" element={usuario ? <Usuarios /> : <Navigate

to="/login" />} />

<Route path="/aleatorios" element={usuario ? <Aleatorios /> :

<Navigate to="/login" />} />

<Route path="/capturas" element={usuario ? <Capturas /> :

<Navigate to="/login" />} />

<Route path="/favoritos" element={usuario ? <Favoritos /> :

<Navigate to="/login" />} />

<Route path="/Pokemon/:name" element={usuario ? <Pokemon/> :

<Navigate to="/login" />} />

<Route path="/login" element={<Login/>} />
<Route path="/Registro" element={<Registro/>} />
<Route path="/Administrador" element={<Administrador/>} />
</Routes>
</Router>
</AppProvider>
);
}
export default App;