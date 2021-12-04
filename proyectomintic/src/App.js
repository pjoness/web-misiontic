import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import imagen from './static/img/logotipo.png'
import Registro from './Components/Registro';
import Login from './Components/Login';
import './static/css/header.css';

class App extends Component {
  render(){
    return(
      <div className="app">
        <div className="header col-md-6">
            <img src={imagen} className="logotipo" />
        </div>

        <Router>
            <Link to="/registro">
              <button className="btn-registro-header">Registro</button>
            </Link>
            <Link to="/login">
              <button className="btn-login-header">Iniciar Sesión</button>
            </Link>

            <Switch>
              <Route path="/registro">
                <Registro />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
            </Switch>
          </Router>

{/* muestro el home desde un componente */}
          <Registro />
      </div>
    );
  }
}

export default App;
