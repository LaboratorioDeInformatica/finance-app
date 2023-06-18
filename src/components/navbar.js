import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import NavbarItem from "./navbaritem";

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
            <NavbarItem href="/home" label="Home" />
            <NavbarItem href="/cadastro-usuario" label="Usuários" />
            <NavbarItem href="/consulta-lancamentos" label="Lançamentos" />
            <NavbarItem href="/login" label="Login" />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;