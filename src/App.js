import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import './App.css';
import './css/style.css';
import './css/bootstrap.min.css';
import $ from 'jquery';
import LeftMenu from './components/LeftMenu' // eslint-disable-line no-unused-vars
import FormCadastroMorador from './components/FormCadastroMorador' // eslint-disable-line no-unused-vars

class App extends Component {

  constructor() {
    super();
    this.state = { listaMoradores: [] }
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:8080/pessoas',
      dataType: 'json',
      success: function (response) {
        this.setState({ listaMoradores: response });
      }.bind(this)
    });
  }

  cadastroMoradorHandler(evento) {
    evento.preventDefault();
    $.ajax({
      url: 'http://localhost:8080/pessoas',
      contentType: 'application/json',
      dataType: 'json',
      type: 'POST',
      data: JSON.stringify({ nome: 'Andrey', cpf: '443.522.788-66', email: 'andreypelegrini2@gmail.com' }),
      success: function (resposta) {

      }, 
      error: function (erro) {
        console.log(erro); // eslint-disable-line no-console
      }
    });
  }

  render() {
    return (
      <div>
        <LeftMenu />
        <div className="corpo-pagina">
          <div>
            <h1>Cadastro de Morador</h1>
          </div>
          <div>
            <FormCadastroMorador 
              cadastroMoradorHandler={this.cadastroMoradorHandler} />
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
                    this.state.listaMoradores.map(function (morador) {
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
