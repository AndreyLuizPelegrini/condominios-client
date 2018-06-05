import React, { Component } from 'react';
import './App.css';
import CadastroMorador from './componentes/morador/CadastroMorador';
import MenuLateral from './componentes/utils/MenuLateral';

export default class App extends Component {

  render() {
    return (     
      <div> 
        <MenuLateral />        
        <CadastroMorador />
      </div>              
    );
  }
}