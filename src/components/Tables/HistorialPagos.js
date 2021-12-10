import React from "react";

const HistorialPagos = (props) => {
  const { data } = props;
  return (
    <table className="tableCredito">
      <thead>
        <th>Fecha</th>
        <th>Pago</th>
      </thead>
      <tbody>
        {
          data.map(credito => {
            return (
              <tr>
                <td>{credito.id}</td>
                <td>{credito.idCliente}</td>
              </tr>
            )
          })
        }
        <tr>
          <td>01-01-2021</td>
          <td>1000000</td>
        </tr>
        <tr>
          <td>01-02-2021</td>
          <td>1000000</td>
        </tr>
      </tbody>
    </table>
  )
}

export default HistorialPagos;