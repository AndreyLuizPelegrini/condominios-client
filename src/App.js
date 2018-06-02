import React, { Component } from 'react';
import './App.css';
import CadastroMorador from './componentes/CadastroMorador';
import MenuLateral from './componentes/MenuLateral';

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