import React from "react";
import { Link } from "react-router-dom";

const Users = (props) => {
  const { data } = props;
  return (
    <table className="tableCredito">
      <thead>
        <td>Tipo ID</td>
        <td>ID</td>
        <td>Nombre</td>
        <td>Correo</td>
        <td>Convertir</td>
        <td>Eliminar</td>
      </thead>
      <tbody>
        {
          data.map(user => {
            return (
              <tr>
                <td>{user.tipoid}</td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/newuser/${user.id}`} button className="btn btn-primary w-100" type="submit">Actualizar</Link>
                </td>
                <td>
                  <Link to={`/eliminar/user/${user.id}`} button className="btn btn-primary w-100" type="submit">Eliminar</Link>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}

export default Users;