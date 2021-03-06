import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = { user, pass };

    fetch('https://conectar.pauljones10.repl.co/login', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    }).then(() => {
      console.log("Ingreso exitoso");
      navigate('/index');
    })
  }
  
  return (
    <div className="card-body">

      <div className="pt-4 pb-2">
        <h5 className="card-title text-center pb-0 fs-4">Ingresa a tu cuenta</h5>
        <p className="text-center small">Ingrese su usuario y contraseña</p>
      </div>

      <form className="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>

        <div class="col-12">
          <label for="yourUsername" class="form-label">Usuario</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" name="username" class="form-control" id="yourUsername" value={user} onChange={(e) => setUser(e.target.value)} required />
            <div class="invalid-feedback">Por favor ingrese su usuario.</div>
          </div>
        </div>

        <div class="col-12">
          <label for="yourPassword" class="form-label">Contraseña</label>
          <input type="password" name="passwword" class="form-control" id="yourPassword" value={pass} onChange={(e) => setPass(e.target.value)} required />
          <div class="invalid-feedback">Por favor ingrese su contraseña</div>
        </div>

        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe" />
            <label class="form-check-label" for="rememberMe">Recordarme</label>
          </div>
        </div>
        <div class="col-12">
          {/*<Link to="/index" class="btn btn-primary w-100" type="submit">Ingresar</Link>*/}
          <input className="btn btn-primary w-100" type="submit" value="Ingresar" />
        </div>
        <div class="col-12">
          <Link to="/registro" class="small mb-0">¿No tienes cuenta? <a>Crea una</a></Link>
        </div>
      </form>

    </div>
  )
}

export default LoginForm;