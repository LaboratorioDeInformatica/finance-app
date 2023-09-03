import React, { useEffect, useContext, useState } from "react";
import UsuarioService from "../app/service/usuarioService";
import { AuthContext } from "../main/provedorAutenticacao";

const Home = () => {
  const { usuarioAutenticado } = useContext(AuthContext);
  const [saldo, setSaldo] = useState(0);

  useEffect(() => {
    const service = new UsuarioService();
    const usuarioLogadoObjeto = usuarioAutenticado;
debugger
    service
      .obterSaldoPorUsuario(usuarioLogadoObjeto.id)
      .then((response) => setSaldo(response.data))
      .catch((error) => console.log(error));
  }, [usuarioAutenticado]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="bs-docs-section">
            <div className="jumbotron">
              <h1 className="display-3">Bem vindo!</h1>
              <p className="lead">Esse é seu sistema de finanças.</p>
              <p className="lead">
                Seu saldo para o mês atual é de R$ {saldo}
              </p>
              <hr className="my-4" />
              <p>
                E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.
              </p>
              <p className="lead">
                <a className="btn btn-primary btn-lg" href="/cadastro-usuario" role="button">
                  <i className="pi pi-users"></i> Cadastrar Usuário
                </a>
                <a className="btn btn-danger btn-lg" href="/cadastro-lancamentos" role="button">
                  <i className="pi pi-money-bill"></i> Cadastrar Lançamento
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
