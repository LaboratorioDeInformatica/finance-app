import React, { useState } from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import { useNavigate } from "react-router-dom";

const CadastroUsuario = () => {
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [senhaRepeticao, setSenhaRepeticao] = useState("");
  const navigate = useNavigate();

  const cadastrar = () => {
    console.log({
      nome,
      senha,
      email,
      senhaRepeticao
    });
  };

  const prepareLogin = () => {
    navigate("/login");
  };

  return (
    <div className="row">
      <div className="col-md-6" style={{ position: "relative", left: "300px" }}>
        <div className="bs-docs-section">
          <Card title="Cadastro de usuario">
            <div className="row">
              <div className="col-lg-12">
                <div className="bs-component">
                  <FormGroup label="Nome: *" htmlFor="inputNome">
                    <input
                      type="text"
                      id="inputNome"
                      className="form-control"
                      name="nome"
                      placeholder="Digite o nome"
                      onChange={(e) => setNome(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup label="Email: *" htmlFor="inputEmail">
                    <input
                      type="email"
                      id="inputEmail"
                      className="form-control"
                      name="email"
                      placeholder="Digite o email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup label="Senha: *" htmlFor="inputSenha">
                    <input
                      type="password"
                      id="inputSenha"
                      className="form-control"
                      name="senha"
                      placeholder="Digite a senha"
                      onChange={(e) => setSenha(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup label="Repita a senha: *" htmlFor="inputRepeteSenha">
                    <input
                      type="password"
                      id="inputRepeteSenha"
                      className="form-control"
                      name="repeteSenha"
                      placeholder="Repete a senha"
                      onChange={(e) => setSenhaRepeticao(e.target.value)}
                    />
                  </FormGroup>
                  <button type="button" className="btn btn-success" onClick={cadastrar}>
                    Salvar
                  </button>
                  <button type="button" className="btn btn-danger" onClick={prepareLogin}>
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CadastroUsuario;