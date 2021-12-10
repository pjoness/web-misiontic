import { useState } from "react";
import { Link } from "react-router-dom";

const HistorialPagosForm = () => {
  const [id, setId] = useState('');
  
  return (
    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="form-group">
                  <label for="yourUsername" class="form-label">Credito</label>
                  <select name="name" className="form-control" id="name" value={id} onChange={(e) => setId(e.target.value)} required>
                    <option value="1">ID100</option>
                    <option value="2">ID200</option>
                    <option value="3">ID300</option>
                  </select>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center">        <Link to="/consultas/pagos" class="btn btn-primary w-100" type="submit">Generar Historial</Link></div>
              </form>
  )
}

export default HistorialPagosForm;