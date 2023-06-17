import React from "react";
import {  Routes, Route } from "react-router-dom";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";

function Rotas() {
  return (
   
      <Routes>
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  
  );
}

export default Rotas;