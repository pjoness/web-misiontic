import React, { Component } from 'react';
import imagen1 from '../static/img/icon1.png';
import imagen2 from '../static/img/icon2.png';
import imagen3 from '../static/img/icon3.png';
import imagen4 from '../static/img/icon4.png';
import imagen5 from '../static/img/icon5.png';
import '../static/css/bienvenida.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Bienvenida() {
  return(
            <div className="container-principal">
                <div className="container-segundario">
                    <h2 className="titleBienvenida">Selecciona la mejor opción para ti.</h2>
                    <div className="contenido col-md-4">
                        <a href="">
                        <img src={imagen1} />
                        <p>Solicitar crédito</p>
                        </a>
                    </div>
                    <div className="contenido col-md-4">
                        <a href="">
                        <img src={imagen2} />
                        <p>Gene. historial</p>
                        </a>
                    </div>
                    <div className="contenido col-md-4">
                        <a href="">
                        <img src={imagen3} />
                        <p>Solicitar prórroga</p>
                        </a>
                    </div>
                    <div className="contenido col-md-4">
                        <a href="">
                        <img src={imagen4} />
                        <p>Gene. certificado</p>
                        </a>
                    </div>
                    <div className="contenido col-md-4">
                        <a href="">
                        <img src={imagen5} />
                        <p>Simular pago</p>
                        </a>
                    </div>
                </div>
            </div>
        );
}

export default Bienvenida;