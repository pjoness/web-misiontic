import React, { Component } from 'react';
import '../static/css/Perfil.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Perfil extends Component {
  render() {
    return (
      <div className="containerPrincipalPerfil">
        <div className="containerSegundarioPerfil">
          <h2>¡Tú perfil!</h2>
          <form method="" action="">
            <div className="contInputs">
              <div className="contLabel"><label>Nombre:</label></div>
              <div><input type="text" name="name" className="inputsPerfil"></input></div>
            </div>
            <div className="contInputs">
              <div className="contLabel"><label>Número de documento:</label></div>
              <div><input type="number" name="documento" className="inputsPerfil"></input></div>
            </div>
            <div className="contInputs">
              <div className="contLabel"><label>Fecha de nacimiento:</label></div>
              <div><input type="date" name="nacimiento" className="inputsPerfil"></input></div>
            </div>
            <div className="contInputs">
              <div className="contLabel"><label>Número de cuenta:</label></div>
              <div><input type="number" name="cuenta" className="inputsPerfil"></input></div>
            </div>
            <div className="contInputs">
              <div className="contLabel"><label>Contraseña:</label></div>
              <div><input type="password" name="password" className="inputsPerfil"></input></div>
            </div>
            <div className="contInputs">
              <button type="submit" name="actualizar" className="inputActualizar">Actualizar</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}