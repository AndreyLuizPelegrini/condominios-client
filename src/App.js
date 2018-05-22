import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/style.css';
import './css/bootstrap.min.css';
import $ from 'jquery';

class App extends Component {

  constructor(){
    super();
    this.state = {listaMoradores: []}
  }

  componentDidMount(){
    $.ajax({
      url: 'http://localhost:8080/pessoas',
      dataType: 'json', 
      success: function(response){
        this.setState({listaMoradores: response});
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
        <div className="alert alert-primary left-menu">
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
                    <input id="nome" className="form-control width-input" type="text" name="nome" value=""  />                  
                  </div>
                  <div>
                    <label htmlFor="email">Email</label> 
                    <input id="email" className="form-control width-input" type="email" name="email" value=""  />                  
                  </div>
                  <div>
                    <label htmlFor="senha">Senha</label> 
                    <input id="senha" className="form-control width-input" type="password" name="senha"  />                                      
                  </div>
                  <div>                                  
                    <label></label> 
                    <button className="btn btn-primary" type="submit">Gravar</button>                                    
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
                   {
                     this.state.listaMoradores.map(function(morador){
                       return (
                        <tr key={morador.id}>
                          <td>{morador.nome}</td>
                          <td>{morador.email}</td>
                        </tr>
                       );
                     })
                   }
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
