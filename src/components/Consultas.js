import { Link} from "react-router-dom";

function Consultas() {
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
            <li><Link to="/index" className="nav-link scrollto">Inicio</Link></li>
            <li><Link to="/solicitudes" className="nav-link scrollto">Solicitudes</Link></li>
            <li><Link to="/consultas" className="nav-link scrollto active">Consultas</Link></li>
            <li><Link to="/pagos"  className="nav-link scrollto">Pagos</Link></li>
            <li><Link to="/contactenos" className="nav-link scrollto">Contactenos</Link></li>
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
            <h2>Consultas</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Consultas</li>
            </ol>
          </div>
          <nav id="navbar1" className="navbar1">
            <ul>
              <li><Link to="/consultas/historial" className="nav-link scrollto active">Historial de Pagos</Link></li>
              <li><a className="nav-link scrollto" href="#about">Certificados</a></li>
              <li><a className="nav-link scrollto" href="#services">Opcion 3</a></li>
            </ul>
            <i className="bi bi-list mobile1-nav-toggle"></i>
          </nav>{/*<!-- .navbar -->*/}
        </div>
      </section>{/*<!-- End Breadcrumbs Section -->*/}
    </main>{/*<!-- End #main -->*/}
  </body>
  );
}

export default Consultas;
