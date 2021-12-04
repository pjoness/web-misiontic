import React, { Component } from 'react';
import imagen from '../static/img/pieza2.png'
import '../static/css/login.css';

class Login extends Component {
    render() {
        return(
            <div className="container-fluid containerPrincipal-login">
                <div className="contIzquierdo-login col-lg-5 col-md-5 col-sm-12 col-xs-12">
                    <img src={imagen} className="imgRegistro-login" />
                </div>
                <div className="contDerecho-login col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <h2>¡Inica Sesión!</h2>
                    <form method="">
                        <input type="number" name="numIdentificacion" className="inputs" placeholder="Número de identificación" required />
                        <input type="password" name="contraseña" className="inputs" placeholder="Contraseña" required />
                        <button type="submit" name="registrarse" className="btn-registro inputs" required >Iniciar sesión</button>
                    </form>
                    <button className="btn-login-interno">Iniciar sesión como interno</button>
                </div>
            </div>
            
        );
    }
}

export default Login;