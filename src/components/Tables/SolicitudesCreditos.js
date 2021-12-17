import React from "react";
import { Link } from "react-router-dom";

const SolicitudesCreditos = (props) => {
  const { data } = props;

  return (
    <table className="tableCredito">
      <thead>
        <th>ID Solicitud</th>
        <th>Documento</th>
        <th>Valor solicitado</th>
        <th>Número de cuotas</th>
        <th>Acciones</th>
      </thead>
      <tbody>
        {
          data.map(credito => {
            return (
              <tr>
                <td>{credito.id}</td>
                <td>{credito.idCliente}</td>
                <td>{credito.valor}</td>
                <td>{credito.plazo}</td>
                <td>
                  <Link to={`/user/revisiones/${credito.id}`} button className="btn btn-primary w-100" type="submit">Revisar</Link>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default SolicitudesCreditos;