import React, { Component } from 'react';
import '../static/css/NuevoUsuarioInterno.css';

export default class NuevoUsuarioInterno extends Component {
  render() {
    return (
      <div className="containerPrincipalInterno">
        <h2 className="titleInterno">¡Crea un nuevo usuario interno!</h2>
        <form method="" action="" className="formInterno">
          <input type="text" name="name" placeholder="Nombre completo" className="inputs" required />
          <select name="tipoDocument" className="inputs" placeholder="Tipo de documento">
            <option value="0">Tipo de documento</option>
            <option value="1">Cedula de ciudadania</option>
            <option value="2">Cedula extranjera</option>
          </select>
          <input type="number" name="numIdentificacion" className="inputs" placeholder="Número de identificación" required />
          <input type="date" name="fechaNacimiento" className="inputs" placeholder="Fecha de nacimiento" required />
          <input type="date" name="expeDocumento" className="inputs" placeholder="Expedición del documento" required />
          <input type="password" name="contraseña" className="inputs" placeholder="Contraseña" required />
          <button type="submit" name="crear" className="btnCrear">Crear</button>
        </form>
      </div>
    );
  }
}