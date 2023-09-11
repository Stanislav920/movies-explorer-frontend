import React from "react";
import "./HeaderAuth.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo-circle2.svg";
import account from "../../images/icon-human.svg"
import PopupMenu from "../PopupMenu/PopupMenu";

function HeaderAuth() {
    
    return(
      <header className="header__auth header__auth-white">
        <div className="header__auth-container"> 
          <Link to="/" className="header__auth-logo">
            <img className="header__auth_img" src={logo} alt="логотип" />
          </Link>
          <PopupMenu />
            <nav className="header__button-box_films">
              <ul className="header__button-box_navigation"> 
            <Link to="/movies" className="header__button-films">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="header__button-savefilms">
              Сохранённые фильмы
            </Link>
            </ul> 
            <Link to="/profile" className="header__account-button">
              <img className="header__account-img" src={account} alt="аккаунт" />
              Аккаунт
            </Link>
          </nav>
        </div>
      </header>
    );
  }
  
  export default HeaderAuth;