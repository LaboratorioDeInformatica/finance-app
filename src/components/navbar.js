import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          Minhas Finanças
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cadastro-usuario">
                Usuários
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/consulta-lancamentos">
                Lançamentos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;