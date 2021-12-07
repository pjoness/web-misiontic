import LoginForm from './Forms/LoginForm';

function Login() {
  return (
  <body>
    <main id="main" style={{backgroundColor: "#f6f9ff"}}> 
    <div class="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div className="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <img src="assets/img/bancoomeva2.png" alt="" style={{width:"100px"}}/>
                  
                </a>
              </div>

              <div className="card mb-3">
              <LoginForm />
              </div>

              <div className="credits">
              </div>

            </div>
          </div>
        </div>

      </section>

    </div>


    </main>{/*<!-- End #main -->*/}
  </body>
  );
}

export default Login;
