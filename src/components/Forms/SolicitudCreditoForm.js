import { useState } from "react";
import { Link } from "react-router-dom";

const validationHandler = (input, min, max, msgMin, msgMax) => {
  if (input < min) return msgMin;
  else if (input > max) return msgMax;
  else return "";
}

const SolicitudCreditoForm = () => {
  const [valor, setValor] = useState('');
  const [plazo, setPlazo] = useState('');
  const [error, setError] = useState('');

  const changeHandler = (e) => {
    setValor(e.target.value);

    const error = validationHandler(e.target.value, 1000000, 100000000, "El valor minimo es 1.000.000", "El valor maximo son 100 millones");
    setError(error);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const idCliente = 100;

    const solicitud = { idCliente, valor, plazo };

    fetch('https://conectar.pauljones10.repl.co/solicitudes', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(solicitud)
    }).then(() => {
      console.log("Nueva solicitud creada");
    })
  }

  return (
    <form className="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>

      <div className="col-12">
        <label for="yourValueIng" class="form-label">Valor solicitado</label>
        <input type="number" name="valueIng" class="form-control" id="yourValueIng" value={valor} onChange={changeHandler} required />
        <div className="invalid-feedback">Ingrese el valor solicitado</div>
        {Boolean(error) && <p>{error}</p>}
      </div>

      <div className="col-12">
        <label for="yourValueEg" class="form-label">Plazo en meses</label>
        <input type="number" name="valueEg" class="form-control" id="yourValueEg" value={plazo} onChange={(e) => setPlazo(e.target.value)} required />
        <div className="invalid-feedback">Ingrese el plazo</div>
      </div>

      <div className="col-12">
        <input className="btn btn-primary w-100" type="submit" value="Solicitar credito" />
      </div>
    </form>
  )
}

export default SolicitudCreditoForm;