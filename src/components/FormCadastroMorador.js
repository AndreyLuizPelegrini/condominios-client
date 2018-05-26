import React from 'react'; // eslint-disable-line no-unused-vars
import '../css/style.css';
import '../css/bootstrap.min.css';

const formCadastroMorador = (props) => {
  return (<div>
    <form onSubmit={props.cadastroMoradorHandler} method="POST">
      <div>
        <label htmlFor="nome">Nome</label>
        <input id="nome" className="form-control width-input" type="text" name="nome" value="" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" className="form-control width-input" type="email" name="email" value="" />
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input id="senha" className="form-control width-input" type="password" name="senha" />
      </div>
      <div>
        <label></label>
        <button className="btn btn-primary" type="submit">Gravar</button>
      </div>
    </form>
  </div>)
};

export default formCadastroMorador;