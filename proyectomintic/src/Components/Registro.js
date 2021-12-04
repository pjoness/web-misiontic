import React, { Component } from 'react';
import imagen from '../static/img/pieza1.png'
import '../static/css/registro.css';

class Registro extends Component {
    render() {
        return(
            <div className="container-fluid containerPrincipal">
                <div className="contIzquierdo col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <img src={imagen} className="imgRegistro" />
                </div>
                <div className="contDerecho col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <h2>¡Registrate!</h2>
                    <form>
                        <input type="text" name="name" className="inputs" required placeholder="Nombre y apellido" />
                        <select name="tipoDocument" className="inputs imputsLeft" placeholder="Tipo de documento">
                            <option value="0">Tipo de documento</option>
                            <option value="1">Cedula de ciudadania</option>
                            <option value="2">Cedula extranjera</option>
                        </select>
                        <input type="number" name="numIdentificacion" className="inputs" placeholder="Número de identificación" required />
                        <input type="date" name="fechaNacimiento" className="inputs imputsLeft" placeholder="Fecha de nacimiento" required />
                        <input type="date" name="expeDocumento" className="inputs" placeholder="Expedición del documento" required />
                        <input type="number" name="valorIngresos" className="inputs" placeholder="Valor de ingresos" required />
                        <input type="number" name="valorEgresos" className="inputs" placeholder="Valor de egresos" required />
                        <input type="password" name="contraseña" className="inputs" placeholder="Contraseña" required />
                        <button type="submit" name="registrarse" className="btn-registro inputs" required >Registrarse</button>
                    </form>
                </div>
            </div>
            
        );
    }
}

export default Registro;