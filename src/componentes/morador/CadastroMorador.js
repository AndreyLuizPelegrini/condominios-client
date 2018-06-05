import React, { Component } from 'react';
import '../../css/style.css';
import '../../css/bootstrap.min.css';
import $ from 'jquery';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import InputCustomizado from '../utils/InputCustomizado';
import BotaoSubmit from '../utils/BotaoSubmit';

export default class FormCadastroMorador extends Component {

  constructor() { 
    super();
    this.state = { 
      listaSexos: [], 
      nome: '', 
      cpf: '', 
      sexo: 0, 
      celular: '', 
      telefone: '', 
      email: '', 
      dataNascimento: ''
    }

    this.cadastroMorador = this.cadastroMorador.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setCPF = this.setCPF.bind(this);
    this.setCelular = this.setCelular.bind(this);
    this.setTelefone = this.setTelefone.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSexo = this.setSexo.bind(this);
    this.setDataNascimento = this.setDataNascimento.bind(this);
    this.mudaDataNascimento = this.mudaDataNascimento.bind(this);

  } 

  render() {
    return (

      <div className="corpo-pagina">
        <div>
          <h1>Cadastro de Morador</h1>
        </div>
        <div>
            <form onSubmit={this.cadastroMorador} method="POST">      

              <InputCustomizado id="nome" label="Nome" className="form-control width-input" 
                type="text" name="nome" value={this.state.nome} onChange={this.setNome} />

              <InputCustomizado id="cpf" label="CPF" className="form-control width-input" 
                type="text" name="cpf" value={this.state.cpf} onChange={this.setCPF} />

              <div className="padding-top-20">
                <label htmlFor="sexo">Sexo</label>
                <select onChange={this.setSexo} value={this.state.sexo}>
                  {
                    this.state.listaSexos.map(function(sexo){
                      return (
                        <option key={sexo.codigo} value={sexo.codigo}>{sexo.descricao}</option>
                      );
                    })
                  }
                </select>
              </div>

              <InputCustomizado id="celular" label="Celular" className="form-control width-input" 
                type="text" name="celular" value={this.state.celular} onChange={this.setCelular} />

              <InputCustomizado id="telefone" label="Telefone" className="form-control width-input" 
                type="text" name="telefone" value={this.state.telefone} onChange={this.setTelefone} />

              <InputCustomizado id="email" label="E-mail" className="form-control width-input" 
                type="email" name="email" value={this.state.email} onChange={this.setEmail} />

              <div>
                <label htmlFor="dataNascimento">Data de Nascimento</label>                  
                <DatePicker selected={this.state.dataNascimento} onSelect={this.mudaDataNascimento} dateFormat="DD/MM/YYYY" />                            
              </div>

              <BotaoSubmit />

            </form>
          </div>
        </div>        
    );
  }

  componentDidMount(){
    $.ajax({
      url: 'http://localhost:8080/pessoas/sexos',
      dataType: 'json', 
      success: function(response){
        this.setState({listaSexos: response});
      }.bind(this)
    });
  }

  cadastroMorador(evento){
    evento.preventDefault();
    $.ajax({
      url: 'http://localhost:8080/pessoas',
      contentType: 'application/json', 
      dataType: 'json', 
      type: 'POST', 
      data: JSON.stringify({
        nome: this.state.nome, 
        cpf: this.state.cpf, 
        sexo: this.state.sexo, 
        celular: this.state.celular, 
        telefone: this.state.telefone, 
        email: this.state.email, 
        dataNascimento: moment(this.state.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD')
      }), 
      success: function(resposta){
        console.log(resposta);
      }, error: function(erro){
        console.log(erro);
      }
    });
  }

  setNome(evento){
    this.setState({nome: evento.target.value});
  }

  setCPF(evento){
    this.setState({cpf: evento.target.value});
  }

  setCelular(evento){
    this.setState({celular: evento.target.value});
  }

  setTelefone(evento){
    this.setState({telefone: evento.target.value});
  }

  setEmail(evento){
    this.setState({email: evento.target.value});
  }

  setDataNascimento(evento){
    this.setState({dataNascimento: evento.target.value});
  }
  
  setSexo(evento){
    this.setState({sexo: evento.target.value});
  }

  mudaDataNascimento(data) {
    this.setState({dataNascimento: data});
  }
}