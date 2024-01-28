import React from "react";
import "./Sidebar.css";
import logo from "../assets/icons/Spotify_logo_with_text.svg";
import xbox from "../assets/icons/xbox.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faHome, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <nav className="sidebar__navigation">
        <div className="logo">
          <a href="w">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <ul>
          <li>
            <a href="w">
              <span className="fa fa-home"><FontAwesomeIcon icon={faHome}/></span>
              <span>Início</span>
            </a>
          </li>
          <li>
            <a href="w">
              <span className="fa fa-search"><FontAwesomeIcon icon={faSearch}/></span>
              <span>Buscar</span>
            </a>
          </li>
        </ul>
      </nav>
      Name
      <div class="library">
        <div class="library__content">
          <button className="library__button">
            <span className="fa fas fa-book"><FontAwesomeIcon icon={faBook}/></span>
            <span>Sua biblioteca</span>
          </button>
          <span className="fa fa-plus"><FontAwesomeIcon icon={faPlus}/></span>
        </div>

        <section className="section-playlist">
          <div className="section-playlist__content">
            <span className="text title">Crie sua primeira playlist</span>
            <span className="text subtitle">É fácil, vamos te ajudar.</span>
            <button className="section-playlist__button">
              <span>Criar playlist</span>
            </button>
          </div>
        </section>

        <div className="cookies">
          <a href="www">Cookies</a>
        </div>

        <div className="languages">
          <button className="languages__button">
            <span className="fa fa-globe"></span>
            <span>Português-BR</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
