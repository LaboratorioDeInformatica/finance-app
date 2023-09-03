import React from 'react';

import Rotas from './rotas';
import Navbar from '../components/navbar';
import { BrowserRouter } from "react-router-dom";
import ProvedorAutenticacao from './provedorAutenticacao';

import 'bootswatch/dist/flatly/bootstrap.css';
import '../custom.css';
import '../App.css';
import 'toastr/build/toastr.min.js';
import 'toastr/build/toastr.css';

import 'primereact/resources/themes/nova/theme.css'; // Importe o arquivo corretamente
import 'primereact/resources/primereact.min.css'; // Importe outros estilos do PrimeReact
import 'primeicons/primeicons.css'; // Importe os ícones do PrimeIcons




class App extends React.Component {
  render() {
    return (
      <ProvedorAutenticacao>
      <BrowserRouter>
      <Navbar />
      <div className='container'>
      
      <Rotas />
      </div>
    </BrowserRouter>
      
     
      </ProvedorAutenticacao>
     
    );
  }
}

export default App;
