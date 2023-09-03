import React from "react";
import { Link } from "react-router-dom";
import NavbarItem from "./navbaritem";
import { AuthConsumer } from "../main/provedorAutenticacao"; // Importe o AuthConsumer

function Navbar() {
  return (
    <AuthConsumer>
      {({ isAuthenticated, encerrarSessao }) => (
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
                <NavbarItem render={isAuthenticated} href="/home" label="Home" />
                <NavbarItem render={isAuthenticated} href="/cadastro-usuario" label="Usuários" />
                <NavbarItem render={isAuthenticated} href="/consulta-lancamentos" label="Lançamentos" />
                <li className="nav-item">
                  {isAuthenticated && (
                    <button
                      className="nav-link btn btn-link"
                      onClick={() => {
                        encerrarSessao(); // Chame a função encerrarSessao ao clicar no botão "Sair"
                      }}
                    >
                      Sair
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </AuthConsumer>
  );
}

export default Navbar;
