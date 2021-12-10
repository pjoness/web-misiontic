import React from "react";
import { Link } from "react-router-dom";

const SolicitudesProrrogas = (props) => {
  const { data } = props;
  return (
    <table className="tableCredito">
      <thead>
        <th>ID Solicitud</th>
        <th>Credito</th>
        <th>Documento</th>
        <th>Número de cuotas</th>
        <th>Razón de solicitud</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        {
          data.map(prorroga => {
            return (
              <tr>
                <td>{prorroga.id}</td>
                <td>{prorroga.idCredito}</td>
                <td>{prorroga.idCliente}</td>
                <td>{prorroga.cuotas}</td>
                <td>{prorroga.motivo}</td>
                <td>
                  <Link to="/user/revisiones?id=1" button className="btn btn-primary w-100" type="submit">Revisar</Link>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default SolicitudesProrrogas;