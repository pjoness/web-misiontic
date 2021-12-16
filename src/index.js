import React from 'react';
import ReactDOM from 'react-dom';
import Principal from './components/Principal';
import Inicio from './components/Inicio';
import Login from './components/Login';
import RegistroUsuario from './components/RegistroUsuario';
import Consultas from './components/Consultas';
import ConsultasHistorial from './components/ConsultasHistorial';
import Pagos from './components/Pagos';
import PagoCredito from './components/PagoCredito';
import Contactenos from './components/Contactenos';
import Solicitudes from './components/Solicitudes';
import Dashboard from './components/Dashboard';
import ConsultasPagos from './components/ConsultasPagos';
import HomeUsuario from "./components/HomeUsuario";
import SolicitudesCredito from "./components/SolicitudesCredito";
import SolicitudesProrroga from "./components/SolicitudesProrroga";
import RevisionesCredito from "./components/RevisionesCredito";
import CreditosVigentes from "./components/CreditosVigentes";
import CreditosHistorial from "./components/CreditosHistorial";
import Usuarios from "./components/Usuarios";
import UsuarioInterno from "./components/UsuarioInterno";
import UsuarioInternoEliminar from "./components/UsuarioInternoEliminar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
{/*import Bienvenida from './components/Bienvenida';*/ }

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/registro" element={<RegistroUsuario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/index" element={<Principal />} />
        <Route path="/consultas" element={<Consultas />} />
        <Route path="/consultas/historial" element={<ConsultasHistorial />} />
        <Route path="/consultas/pagos" element={<ConsultasPagos />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/pagar" element={<PagoCredito />} />
        <Route path="/contactenos" element={<Contactenos />} />
        <Route path="/solicitudes" element={<Solicitudes />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/home" element={<HomeUsuario />} />
        <Route path="/user/solicitudes" element={<SolicitudesCredito />} />
        <Route path="/user/prorrogas" element={<SolicitudesProrroga />} />
        <Route path="/user/revisiones" element={<RevisionesCredito />} />
        <Route path="/user/creditos" element={<CreditosVigentes />} />
        <Route path="/user/historial" element={<CreditosHistorial />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/newuser/:id" element={<UsuarioInterno />} />
        <Route path="/eliminar/user/:id" element={<UsuarioInternoEliminar />} />
        {/*<Route exact path="/prueba" element={<Bienvenida/>} />*/}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


