import React from "react";
import { Link } from "react-router-dom";

const Creditos = (props) => {
  const { data } = props;
  return (
                <table className="tableCredito">
                    <thead>
                        <td>ID</td>
                        <td>Documento</td>
                        <td>Valor</td>
                        <td>Número de cuotas</td>
                        <td>Acciones</td>
                    </thead>
                    <tbody>
                    {
                      data.map(credito => {
                        return (
                          <tr>
                            <td>{ credito.id }</td>
                            <td>{ credito.idCliente }</td>
                            <td>{ credito.valor }</td>
                            <td>{ credito.plazo }</td>
                            <td>
                            <Link to="/user/historial?id=1" button className="btn btn-primary w-100" type="submit">Historial</Link>
                            </td>
                          </tr>
                        )
                      })
                    }
                    </tbody>
                </table>    
  )
}

export default Creditos;