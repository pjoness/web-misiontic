import { Link, useParams } from "react-router-dom";
import UsuarioForm from "./Forms/UsuarioForm";

function UsuarioInterno() {
  
  const { id } = useParams();

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
            <li><Link to="/consultas" className="nav-link scrollto ">Consultas</Link></li>
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
            <h2>Crear Usuario</h2>
            <ol>
              <li><a href="index.html">Home</a></li>
              <li>Usuarios</li>
            </ol>
          </div>
          <nav id="navbar1" className="navbar1">
            <i className="bi bi-list mobile1-nav-toggle"></i>
          </nav>{/*<!-- .navbar -->*/}
        </div>
      </section>{/*<!-- End Breadcrumbs Section -->*/}
      <section id="contact" className="contact">
        <div className="container">
  
          <div className="row">
  
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            </div>
  
            <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay="200">
            <UsuarioForm id={id} />
            </div>
  
            <div className="col-lg-5 col-md-12" data-aos="fade-up" data-aos-delay="300">
            </div>
  
          </div>
  
        </div>
      </section>
    </main>{/*<!-- End #main -->*/}
  </body>
  );
}

export default UsuarioInterno;
