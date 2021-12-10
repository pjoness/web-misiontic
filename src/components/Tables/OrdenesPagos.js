import React from "react";
import { Link } from "react-router-dom";

const OrdenesPagos = (props) => {
  const { data } = props;
  return (
    <table className="tableCredito">
      <thead>
        <th>Fecha</th>
        <th>Credito</th>
        <th>Cuota</th>
        <th></th>
      </thead>
      <tbody>
        {
          data.map(pago => {
            return (
              <tr>
                <td>{pago.fecha}</td>
                <td>{pago.idCredito}</td>
                <td>{pago.cuota}</td>
                <td>
                  <Link to="/pagar?id=1" button className="btn btn-primary w-100" type="submit">Pagar</Link>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default OrdenesPagos;