import React from "react";
import "./PopupMenu.css";
import account from "../../images/icon-human.svg";
import burgermenuLogo from "../../images/icon-main .svg";
import burgermenuButtonClose from "../../images/Close.svg";
import { Link } from "react-router-dom";

function PopupMenu() { 
  
    return(
      <div className="popupmenu">
        
          <div className="popup-menu__notactive"> 
            <button className="popup-menu__button">
              <img src={burgermenuLogo} alt="бургер меню логотип" />
            </button>
          </div>
  
       
        <div className="popup-container">
          <div className="popup-menu__active">
            <button className="popup-menu__close">
              <img src={burgermenuButtonClose} alt="бургер меню закрыть" />
            </button>
            <nav className="popup-menu__links">
                <Link className="popup-menu__link" to="/">Главная</Link>
                <Link className="popup-menu__link popup-menu__link_active" to="/movies">Фильмы</Link>
                <Link className="popup-menu__link" to="/saved-movies">Сохранённые фильмы</Link>
            </nav>
            <nav className='popup-menu__footer'>
              <div className="popup-menu__footer-box">
                <Link to="/profile">
                  <img src={account} alt="Логотип аккаунта" className="popup-menu__account" />
                </Link>
                <Link className="popup-menu__login" to="/profile">Аккаунт</Link>
              </div>
            </nav>
          </div>
        </div>
        
      </div>
    );
  }
  
  export default PopupMenu;
  