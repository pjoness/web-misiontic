import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const validationHandler = (input, min, max, msgMin, msgMax) => {
  if (input < min) return msgMin;
  else if (input > max) return msgMax;
  else return "";
}

const RevisionCreditoForm = (idd) => {
  const [id, setId] = useState(idd.id);
  const [valorsol, setValorSol] = useState('');
  const [plazo, setPlazo] = useState('');
  const [aprob, setAprob] = useState('');
  const [tasa, setTasa] = useState('');
  const [valor, setValor] = useState('');
  const navigate = useNavigate();

  const [solicitud, setSolicitud] = useState(null);

  useEffect(() => {
    fetch('https://conectar.pauljones10.repl.co/solicitud/' + id)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setSolicitud(data);
        setValorSol(data.valor);
        setPlazo(data.plazo);
      })
      .catch(e => {
        console.log(e);
      })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (aprob == "Aprobado") {
      const idCliente = 1;

      const credito = { idCliente, valor, plazo, tasa };

      fetch('https://conectar.pauljones10.repl.co/creditos', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credito)
      })
        .then(() => {
          console.log("Solicitud aprobada");
          navigate('/user/solicitudes');
        })
    } else {
      navigate('/user/solicitudes');
    }
  }

  return (
    <form className="row g-3 needs-validation" onSubmit={handleSubmit} novalidate>

      <div className="col-12">
        <label for="yourValueIng" class="form-label">Valor solicitado</label>
        <input type="text" name="valueIng" class="form-control" id="yourValueIng" value={valorsol} readOnly />
      </div>

      <div className="col-12">
        <label for="yourValueEg" class="form-label">Plazo</label>
        <input type="text" name="valueEg" class="form-control" id="yourValueEg" value={plazo} readOnly />
        <div className="invalid-feedback">Ingrese el plazo</div>
      </div>

      <div className="col-12">
        <label for="yourValueEg" class="form-label">Aprobacion</label>
        <select name="name" className="form-control" id="name" value={aprob} onChange={(e) => setAprob(e.target.value)} required>
          <option value=""></option>
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
        <input className="btn btn-primary w-100" type="submit" value="Aceptar" />
      </div>
    </form>
  )
}

export default RevisionCreditoForm;