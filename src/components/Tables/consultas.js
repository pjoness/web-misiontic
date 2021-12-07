import React from "react";

const Consultas = () => {
  const { data } = props;

  <table>
    <thead>
    </thead>
    <tbody>
      {
        data.map(user => {
          return (
            <tr>
              <td>{ user.id}</td>
            </tr>
          )
        })
      }
    </tbody> 
  </table>
}