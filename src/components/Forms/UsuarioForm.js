import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const UsuarioForm = (idd) => {
  const [id, setId] = useState(idd.id);
  const [name, setName] = useState('');
  const [tipoid, setTipoId] = useState('');
  const [email, setEmail] = useState('');
  const [dateborn, setDateBorn] = useState('');
  const [dateexp, setDateExp] = useState('');
  const [ingresos, setIngresos] = useState('');
  const [egresos, setEgresos] = useState('');
  const [password, setPassword] = useState('');
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://conectar.pauljones10.repl.co/user/' + id)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setUser(data);
      setName(data.name);
      setTipoId(data.tipoid);
      setEmail(data.email);
      setDateBorn(data.dateborn);
      setDateExp(data.dateexp);
      setIngresos(data.ingresos);
      setEgresos(data.egresos);
    })
    .catch( e => {
      console.log(e);
    })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = { name, tipoid, email, dateborn, dateexp, ingresos, egresos };

    fetch('https://conectar.pauljones10.repl.co/user/' + id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then(() => {
      console.log("Usuario actualizado");
      navigate('/usuarios');
    })
  }


  return (
    <div className="card-body">

      <div className="pt-4 pb-2">
        <h5 className="card-title text-center pb-0 fs-4">Actualizar usuario</h5>
      </div>

      <form className="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>
        <div className="col-12">
          <label for="yourName" class="form-label">Nombre completo</label>
          <input type="text" name="name" className="form-control" id="yourName" value={name} onChange={(e) => setName(e.target.value)} required />
          <div className="invalid-feedback">??Por favor introduzca su nombre!</div>
        </div>

        <div className="col-12">
          <label for="yourID" class="form-label">Tipo de documento de identidad</label>
          <input type="text" name="tipoid" className="form-control" id="yourID" value={tipoid} onChange={(e) => setTipoId(e.target.value)} required />
          <div className="invalid-feedback">??Por favor inregres un tipo de documento de identidad!</div>
        </div>

        <div className="col-12">
          <label for="yourUsername" className="form-label">N??mero de identificaci??n</label>
          <div className="input-group has-validation">
            <input type="text" name="id" className="form-control" id="id" value={id} onChange={(e) => setId(e.target.value)} readOnly />
            <div className="invalid-feedback">Por favor ingrese un numero de identificacion</div>
          </div>
        </div>

        <div className="col-12">
          <label for="yourUsername" class="form-label">Correo Electronico</label>
          <div className="input-group has-validation">
            <input type="text" name="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <div className="invalid-feedback">Por favor ingrese un correo electronico</div>
          </div>
        </div>

        <div className="col-12">
          <label for="yourDateBorn" class="form-label">Fecha de nacimiento</label>
          <input type="date" name="dateborn" className="form-control" id="yourDateBorn" value={dateborn} onChange={(e) => setDateBorn(e.target.value)} required />
          <div className="invalid-feedback">Ingrese su fecha de nacimiento</div>
        </div>

        <div className="col-12">
          <label for="yourDateExp" class="form-label">Fecha de expedicion del documento</label>
          <input type="date" name="dateExp" className="form-control" id="yourDateExp" value={dateexp} onChange={(e) => setDateExp(e.target.value)} required />
          <div className="invalid-feedback">Ingrese su fecha de expedicion del documento</div>
        </div>


        <div className="col-12">
          <label for="yourValueIng" class="form-label">Valor de ingresos</label>
          <input type="number" name="valueIng" class="form-control" id="yourValueIng" value={ingresos} onChange={(e) => setIngresos(e.target.value)} required />
          <div className="invalid-feedback">Ingrese el valor de sus ingresos</div>
        </div>

        <div className="col-12">
          <label for="yourValueEg" class="form-label">Valor de egresos</label>
          <input type="number" name="valueEg" class="form-control" id="yourValueEg" value={egresos} onChange={(e) => setEgresos(e.target.value)} required />
          <div className="invalid-feedback">Ingrese el valor de sus egresos</div>
        </div>

        <div className="col-12">
          {/*<Link to="/index" button className="btn btn-primary w-100" type="submit">Crear cuenta</Link>*/}
          <input className="btn btn-primary w-100" type="submit" value="Actualizar" />
        </div>
      </form>
    </div>
  )
}

export default UsuarioForm;