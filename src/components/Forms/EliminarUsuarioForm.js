import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EliminarUsuarioForm = (idd) => {
  const [id, setId] = useState(idd.id);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://conectar.pauljones10.repl.co/user/' + id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/usuarios');
    })
  }

  return (
    <form role="form" className="php-email-form" onSubmit={handleSubmit} novalidate>
      <div className="form-group">
        <label for="yourUsername" class="form-label">Usuario</label>
        <input type="text" name="username" class="form-control" id="yourUsername" value={id} readonly />
      </div>
      <div className="my-3">
        <div className="loading">Loading</div>
        <div className="error-message"></div>
        <div className="sent-message">Your message has been sent. Thank you!</div>
      </div>
      <div className="text-center">        <input className="btn btn-primary w-100" type="submit" value="Eliminar Usuario" />
      </div>
    </form>
  )
}

export default EliminarUsuarioForm;