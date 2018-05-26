import React from 'react'; // eslint-disable-line no-unused-vars
import '../css/style.css';
import '../css/bootstrap.min.css';

const leftMenu = () => {
  return (
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
    </div>)
};

export default leftMenu;