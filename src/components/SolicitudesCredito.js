import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import SolicitudesCreditos from "./Tables/SolicitudesCreditos";

function SolicitudesCredito() {

  const [solicitudes, setSolicitudes] = useState(null);

  useEffect(() => {
    fetch('https://conectar.pauljones10.repl.co/solicitudes')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setSolicitudes(data);
    })
    .catch( e => {
      console.log(e);
    })
  }, []);
  
  return (
  <body>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">

        <div className="logo">
          <Link to="/index"><img src="assets/img/bancoomeva2.png" alt="" className="img-fluid"/></Link>
          <a style={{fontWeight: "bold", paddingLeft: "30px", paddingTop: "10px"}}>Bienvenido Usuario X</a>
        </div>

        <nav id="navbar" className="navbar">
          <ul>
            <li><Link to="/user/home" className="nav-link scrollto">Inicio</Link></li>
            <li><Link to="/user/solicitudes" className="nav-link scrollto active">Solicitudes Creditos</Link></li>
            <li><Link to="/user/prorrogas"  className="nav-link scrollto">Solicitudes Prorrogas</Link></li>
            <li><Link to="/user/creditos"  className="nav-link scrollto">Creditos Vigentes</Link></li>
            <li><Link to="/dashboard" className="nav-link scrollto">Dashboard</Link></li>
            <li><Link to="/" className="getstarted scrollto">Salir</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>{/*<!-- .navbar -->*/}

      </div>
    </header>{/*<!-- End Header -->*/}

    <main id="main">

     {/* <!-- ======= Breadcrumbs Section ======= -->*/}
      <section className="breadcrumbs">
        <div className="container">

          <div className="d-flex justify-content-between align-items-center">
            <h2>Solicitudes Creditos</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Solicitudes</li>
            </ol>
          </div>
          <nav id="navbar1" className="navbar1">
            <i className="bi bi-list mobile1-nav-toggle"></i>
          </nav>{/*<!-- .navbar -->*/}
        </div>
      </section>{/*<!-- End Breadcrumbs Section -->*/}
      <section id="consulta" className="consulta">
        {solicitudes && <SolicitudesCreditos data={solicitudes} />}
      </section>
    </main>{/*<!-- End #main -->*/}
  </body>
  );
}

export default SolicitudesCredito;
