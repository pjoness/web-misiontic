import React, { Component } from 'react';
import imagen1 from '../static/img/icon1-1.png';
import imagen2 from '../static/img/icon2-2.png';
import imagen3 from '../static/img/icon3-3.png';
import imagen4 from '../static/img/icon4-4.png';
import '../static/css/bienvenidaAdmin.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class BienvenidaAdmin extends Component {
    render(){
        return(
            <div className="container-principal">
                <div className="container-segundario">
                    <h2 className="titleBienvenidaAdmin">Bienvenido Administrador!</h2>
                    <div className="contenido col-md-6">
                        <a href="">
                        <img src={imagen1} />
                        <p>Solicitudes de créditos</p>
                        </a>
                    </div>
                    <div className="contenido col-md-6">
                        <a href="">
                        <img src={imagen2} />
                        <p>Solicitudes de prórroga</p>
                        </a>
                    </div>
                    <div className="contenido col-md-6">
                        <a href="">
                        <img src={imagen3} />
                        <p>Creditos vigentes</p>
                        </a>
                    </div>
                    <div className="contenido col-md-6">
                        <a href="">
                        <img src={imagen4} />
                        <p>Historial de pagos</p>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}