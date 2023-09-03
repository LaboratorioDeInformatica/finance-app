import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Home from "../views/home";
import ConsultaLancamentos from "../views/lancamentos/consulta-lancamentos";
import CadastroLancamentos from "../views/lancamentos/cadastro-lancamentos";
import { AuthContext, AuthConsumer } from "../main/provedorAutenticacao"; // Import the AuthContext and AuthConsumer

const Rotas = () => {
  return (
    <AuthConsumer>
      {({ isAuthenticated }) => (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro-usuario" element={<CadastroUsuario />} />

          {/* Protected routes */}
          {isAuthenticated ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/consulta-lancamentos" element={<ConsultaLancamentos />} />
              <Route path="/cadastro-lancamentos/:id?" element={<CadastroLancamentos />} />
            </>
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}

          {/* Add other routes here */}
        </Routes>
      )}
    </AuthConsumer>
  );
}

export default Rotas;
