import React from "react";
import "./header.css";
import smallRight from "../assets/icons/small-right.png";
import smallLeft from "../assets/icons/small-left.png";
import search from "../assets/icons/search.png";

const header = () => {
  return (
    <div className="main-container ">
      <nav className="header__navigation">
        <div className="navigation">
          <button className="arrow-left">
            <img src={smallLeft} alt="Seta para a esquerda" />
          </button>
          <button className="arrow-right">
            <img src={smallRight} alt="Seta para a direita" />
          </button>

          <div className="header__search">
            <img src={search} alt="Lupa de pesquisa" />
            <input
              id="search-input"
              maxlength="800"
              autocorrect="off"
              autocapitalize="off"
              spellcheck="false"
              placeholder="O que você quer ouvir?"
              value=""
            />
          </div>
        </div>

        <div class="header__login">
          <button className="subscribe">Inscreva-se</button>
          <button className="login">Entrar</button>
        </div>
      </nav>
    </div>
  );
};
export default header;
