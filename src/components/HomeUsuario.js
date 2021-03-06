import { Link} from "react-router-dom";

function HomeUsuario() {
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
            <li><Link to="/index" className="nav-link scrollto active">Inicio</Link></li>
            <li><Link to="/user/solicitudes" className="nav-link scrollto">Solicitudes Creditos</Link></li>
            <li><Link to="/user/prorrogas"  className="nav-link scrollto">Solicitudes Prorrogas</Link></li>
            <li><Link to="/user/creditos"  className="nav-link scrollto">Creditos Vigentes</Link></li>
            <li><Link to="/dashboard" className="nav-link scrollto">Dashboard</Link></li>
            <li><Link to="/" className="getstarted scrollto">Salir</Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>{/* <!-- .navbar --> */}
  
      </div>
    </header>{/* <!-- End Header --> */}
  
    {/* <!-- ======= Hero Section ======= --> */}
    <section id="hero" className="d-flex align-items-center">
  
      <div className="container">
        <div className="row">
          <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Bienvenido Usuario</h1>
            <h2>Aqui puedes gestionar las solicitudes realizadas por los clientes</h2>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
            <img src="assets/img/undraw_wallet_aym5.png" className="img-fluid animated" alt=""/>
          </div>
        </div>
      </div>
  
    </section>{/* <!-- End Hero --> */}
  
    <main id="main">
  
      {/* <!-- ======= Clients Section ======= --> */}
      <section id="clients" className="clients clients">
        <div className="container">
  
          <div className="row">
  
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets/img/clients/client-1.png" className="img-fluid" alt="" data-aos="zoom-in"/>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets/img/clients/client-2.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="100"/>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets/img/clients/client-3.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="200"/>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets/img/clients/client-4.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="300"/>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets/img/clients/client-5.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="400"/>
            </div>
  
            <div className="col-lg-2 col-md-4 col-6">
              <img src="assets/img/clients/client-6.png" className="img-fluid" alt="" data-aos="zoom-in" data-aos-delay="500"/>
            </div>
  
          </div>
  
        </div>
      </section>{/* <!-- End Clients Section --> */}
    </main>{/* <!-- End #main --> */}
  </body>
  );
}

export default HomeUsuario;