import React from "react";
import {  Routes, Route } from "react-router-dom";
import Login from "../views/login";
import CadastroUsuario from "../views/cadastroUsuario";
import Home from "../views/home";

function Rotas() {
  return (
   
      <Routes>
       
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro-usuario" element={<CadastroUsuario />} />
      </Routes>
  
  );
}

export default Rotas;