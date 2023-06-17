import React from 'react';

import Rotas from './rotas';
import Navbar from '../components/navbar';
import { BrowserRouter } from "react-router-dom";

import 'bootswatch/dist/flatly/bootstrap.css';
import '../custom.css';
import '../App.css';




class App extends React.Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Navbar />
      <div className='container'>
      
      <Rotas />
      </div>
    </BrowserRouter>
      
     
      </>
     
    );
  }
}

export default App;
