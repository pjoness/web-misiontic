import { useState } from "react";
import { Link } from "react-router-dom";

const RegistroForm = () => {
  const [name, setName] = useState('');
  const [tipoid, setTipoId] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [dateborn, setDateBorn] = useState('');
  const [dateexp, setDateExp] = useState('');
  const [ingresos, setIngresos] = useState('');
  const [egresos, setEgresos] = useState('');
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Crear una cuenta</h5>
                    <p className="text-center small">Ingrese los siguientes datos para crear su cuenta</p>
                  </div>

                  <form className="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
                    <div className="col-12">
                      <label for="yourName" class="form-label">Nombre completo</label>
                      <input type="text" name="name" class="form-control" id="yourName" value={name} onChange={(e) => setName(e.target.value)} required/>
                      <div className="invalid-feedback">¡Por favor introduzca su nombre!</div>
                    </div>

                    <div className="col-12">
                      <label for="yourID" class="form-label">Tipo de documento de identidad</label>
                      <input type="text" name="text" class="form-control" id="yourID" value={tipoid} onChange={(e) => setTipoId(e.target.value)} required/>
                      <div className="invalid-feedback">¡Por favor inregres un tipo de documento de identidad!</div>
                    </div>

                    <div className="col-12">
                      <label for="yourUsername" class="form-label">Número de identificación</label>
                      <div className="input-group has-validation">
                        <input type="text" name="username" class="form-control" id="yourUsername" value={id} onChange={(e) => setId(e.target.value)} required/>
                        <div className="invalid-feedback">Por favor ingrese un numero de identificacion</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="yourUsername" class="form-label">Correo Electronico</label>
                      <div className="input-group has-validation">
                        <input type="text" name="username" class="form-control" id="yourUsername" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        <div className="invalid-feedback">Por favor ingrese un correo electronico</div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label for="yourDateBorn" class="form-label">Fecha de nacimiento</label>
                      <input type="date" name="dateborn" class="form-control" id="yourDateBorn" value={dateborn} onChange={(e) => setDateBorn(e.target.value)} required/>
                      <div className="invalid-feedback">Ingrese su fecha de nacimiento</div>
                    </div>

                    <div className="col-12">
                      <label for="yourDateExp" class="form-label">Fecha de expedicion del documento</label>
                      <input type="date" name="dateExp" class="form-control" id="yourDateExp" value={dateexp} onChange={(e) => setDateExp(e.target.value)} required/>
                      <div className="invalid-feedback">Ingrese su fecha de expedicion del documento</div>
                    </div>


                    <div className="col-12">
                      <label for="yourValueIng" class="form-label">Valor de ingresos</label>
                      <input type="number" name="valueIng" class="form-control" id="yourValueIng" value={ingresos} onChange={(e) => setIngresos(e.target.value)} required/>
                      <div className="invalid-feedback">Ingrese el valor de sus ingresos</div>
                    </div>

                    <div className="col-12">
                      <label for="yourValueEg" class="form-label">Valor de egresos</label>
                      <input type="number" name="valueEg" class="form-control" id="yourValueEg" value={egresos} onChange={(e) => setEgresos(e.target.value)} required/>
                      <div className="invalid-feedback">Ingrese el valor de sus egresos</div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" name="terms" type="checkbox" 
                        checked={terms} value="" onChange={() => setTerms(!terms)} id="acceptTerms" required/>
                        <label className="form-check-label" for="acceptTerms">Yo acepto <a href="#"> los terminos y las condiciones</a></label>
                        <div className="invalid-feedback">Debe aceptar antes de enviar su información.</div>
                      </div>
                    </div>
                    <div className="col-12">
                      <Link to="/index" button className="btn btn-primary w-100" type="submit">Crear cuenta</Link>
                    </div>
                    <div className="col-12">
                      <Link to="/login" className="small mb-0">¿Ya tiene una cuenta? <a >Ingrese</a></Link>
                    </div>
                  </form>
                </div>
  )
}

export default RegistroForm;