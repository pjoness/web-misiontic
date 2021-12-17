import React from "react";

const HistorialPagos = (props) => {
  const { data } = props;

  return (
    <table className="tableCredito">
      <thead>
        <th>Fecha</th>
        <th>Pago</th>
        <th>Capital</th>
        <th>Interes</th>
      </thead>
      <tbody>
        {
          data.map(cuota => {
            return (
              <tr>
                <td>{cuota.fecha}</td>
                <td>{Math.round(cuota.capital + cuota.interes)}</td>
                <td>{Math.round(cuota.capital)}</td>
                <td>{Math.round(cuota.interes)}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default HistorialPagos;