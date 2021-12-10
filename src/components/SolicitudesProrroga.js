import { Link } from "react-router-dom";
import SolicitudesProrrogas from "./Tables/SolicitudesProrrogas";
import PRORROGAS from "./mocks/prorrogas";

function SolicitudesProrroga() {
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
            <li><Link to="/user/solicitudes" className="nav-link scrollto">Solicitudes Creditos</Link></li>
            <li><Link to="/user/prorrogas"  className="nav-link scrollto active">Solicitudes Prorrogas</Link></li>
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
            <h2>Solicitudes Prorrogas</h2>
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
        <SolicitudesProrrogas data={PRORROGAS} />
      </section>
    </main>{/*<!-- End #main -->*/}
  </body>
  );
}

export default SolicitudesProrroga;