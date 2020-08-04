import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/44425319?s=400&u=03ab767577e5647e1a41c27923f83af6de4fd4f9&v=4" alt="Projeto React" />
        <div>
          <strong>Paulo Henrique</strong>
          <span>Programação Web</span>
        </div>
      </header>

      <p>
        O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
            <br /><br />
            É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 95,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;