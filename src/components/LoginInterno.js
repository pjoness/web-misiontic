import React, { Component } from 'react';
import imagen from '../static/img/grafico7.png'
import '../static/css/LoginInterno.css';

export default class LoginInterno extends Component {
    render() {
        return(
            <div className="container-fluid containerPrincipal-login">
                <div className="contIzquierdo-login col-lg-5 col-md-5 d-ms-none col-xs-12">
                    <img src={imagen} />
                </div>
                <div className="contDerecho-login col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <h2>¡Inica Sesión Administrador!</h2>
                    <form action="./Bienvenida.js" method="">
                        <input type="number" name="numIdentificacion" className="inputs" placeholder="Número de identificación" required />
                        <input type="password" name="contraseña" className="inputs" placeholder="Contraseña" required />
                        <button type="submit" name="registrarse" className="btnLoginInterno inputs" required >Iniciar sesión</button>
                    </form>
                </div>
            </div>
            
        );
    }
}