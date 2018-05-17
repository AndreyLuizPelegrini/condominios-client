import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="left-menu">
          <ul>
            <li>
              <a className="left-menu-text" href="#">Cadastro de morador</a>
            </li>
            <li>
              <a className="left-menu-text" href="#">Consultar moradores</a>
            </li>
            <li>
              <a className="left-menu-text" href="#">Cadastrar chamados</a>
            </li> 
            <li>
              <a className="left-menu-text" href="#">Consultar chamados</a>
            </li>
          </ul>
        </div>
        <div className="corpo-pagina">
            <div>
              <h1>Cadastro de Morador</h1>
            </div>
            <div>
              <div>
                <form>
                  <div>
                    <label htmlFor="nome">Nome</label> 
                    <input id="nome" type="text" name="nome" value=""  />                  
                  </div>
                  <div>
                    <label htmlFor="email">Email</label> 
                    <input id="email" type="email" name="email" value=""  />                  
                  </div>
                  <div>
                    <label htmlFor="senha">Senha</label> 
                    <input id="senha" type="password" name="senha"  />                                      
                  </div>
                  <div>                                  
                    <label></label> 
                    <button type="submit">Gravar</button>                                    
                  </div>
                </form>             

              </div>  
              <div>            
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Alberto</td>                
                      <td>alberto.souza@caelum.com.br</td>                
                    </tr>
                  </tbody>
                </table> 
              </div>             
            </div>
          </div>          
      </div>
    );
  }
}

export default App;
