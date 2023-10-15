import React from "react";
import "./HeaderAuth.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo-circle2.svg";
import account from "../../images/icon-human.svg"
import PopupMenu from "../PopupMenu/PopupMenu";

function HeaderAuth() {
  const location = useLocation();
    
    return(
      <header className={`headerauth ${location.pathname === "/" ? "headerauth-white" : ''}`}>
        <div className="headerauth-container"> 
          <Link to="/" className="headerauth-logo">
            <img className="headerauth__img" src={logo} alt="логотип" />
          </Link>
          <PopupMenu />
            <nav className="headerauth__button-box-films">
              <div className="headerauth__button-box-navigation"> 
            <Link to="/movies" className="headerauth__button-films">
              Фильмы
            </Link>
            <Link to="/saved-movies" className="headerauth__button-savefilms">
              Сохранённые фильмы
            </Link>
            </div> 
            <Link to="/profile" className="headerauth__account-button">
              <img className="headerauth__account-img" src={account} alt="аккаунт" />
              Аккаунт
            </Link>
          </nav>
        </div>
      </header>
    );
  }
  
  export default HeaderAuth;