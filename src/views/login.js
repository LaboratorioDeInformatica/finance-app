import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import axios from "axios";
import UsuarioService from "../app/service/usuarioService";
import LocalStorageService from "../app/service/localstorageService";



const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState(null);
  const navigate = useNavigate();

  const service = new UsuarioService();
 

  const entrar = () => {

    service.autenticar({
      email: email,
      senha: senha
    }).then(response =>{
      console.log(response)
      LocalStorageService.addItem('_usuario_logado', response.data)
      navigate("/home");
    }).catch(erro => {
      setMensagemErro(erro.response.data);
    })

  };

  const prepareCadastrar = () => {
    navigate("/cadastro-usuario");
  };

  return (
    <div className="row">
      <div className="col-md-6" style={{ position: "relative", left: "300px" }}>
        <div className="bs-docs-section">
          <Card title="Login">
          <div className="row">
            <span>{mensagemErro}</span>
          </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="bs-component">
                  <fieldset>
                    <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Digite o Email"
                      />
                    </FormGroup>
                    <FormGroup label="Senha: *" htmlFor="exampleInputPassword1">
                      <input
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </FormGroup>
                    <button type="button" className="btn btn-success" onClick={entrar}>
                      Entrar
                    </button>
                    <button type="button" className="btn btn-danger" onClick={prepareCadastrar}>
                      Cadastrar
                    </button>
                  </fieldset>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
