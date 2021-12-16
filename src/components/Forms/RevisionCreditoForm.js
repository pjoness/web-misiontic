import { useState } from "react";
import { Link } from "react-router-dom";

const validationHandler = (input, min, max, msgMin, msgMax) => {
  if (input < min) return msgMin;
  else if (input > max) return msgMax;
  else return "";
}

const RevisionCreditoForm = () => {
  const [aprob, setAprob] = useState('');
  const [tasa, setTasa] = useState('');
  const [valor, setValor] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    if (aprob == "Aprobado") {
      const credito = { valor, tasa };
      
      fetch('https://conectar.pauljones10.repl.co/creditos', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credito)
      })
      .then(() => {
      console.log("Nueva solicitud creada");
    })
    }
  }

  return (
    <form className="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>

      <div className="col-12">
        <label for="yourValueIng" class="form-label">Valor solicitado</label>
        <input type="text" name="valueIng" class="form-control" id="yourValueIng" value="2.000.000" readonly />
      </div>

      <div className="col-12">
        <label for="yourValueEg" class="form-label">Plazo</label>
        <input type="text" name="valueEg" class="form-control" id="yourValueEg" value="36" readonly />
        <div className="invalid-feedback">Ingrese el plazo</div>
      </div>

      <div className="col-12">
        <label for="yourValueEg" class="form-label">Aprobacion</label>
        <select name="name" className="form-control" id="name" value={aprob} onChange={(e) => setAprob(e.target.value)} required>
          <option value="Aprobado">Aprobado</option>
          <option value="Rechazado">Rechazado</option>
        </select>
        <div className="invalid-feedback">Ingrese el plazo</div>
      </div>


      <div className="col-12">
        <label for="yourValueEg" class="form-label">Valor Aprobado</label>
        <input type="number" name="valueEg" class="form-control" id="yourValueEg" value={valor} onChange={(e) => setValor(e.target.value)} required />
        <div className="invalid-feedback">Ingrese valor aprobado</div>
      </div>

      <div className="col-12">
        <label for="yourValueEg" class="form-label">Tasa</label>
        <input type="number" name="valueEg" class="form-control" id="yourValueEg" value={tasa} onChange={(e) => setTasa(e.target.value)} required />
        <div className="invalid-feedback">Ingrese tasa</div>
      </div>

      <div className="col-12">
        <Link to="/user/solicitudes" button className="btn btn-primary w-100" type="submit">Aceptar</Link>
      </div>
    </form>
  )
}

export default RevisionCreditoForm;