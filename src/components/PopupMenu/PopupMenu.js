import React, { useState } from "react";
import "./PopupMenu.css";
import account from "../../images/icon-human.svg";
import burgermenuLogo from "../../images/icon-main .svg";
import burgermenuButtonClose from "../../images/Close.svg";
import { Link } from "react-router-dom";

function PopupMenu() { 

  const [menuIsActive, setMenuIsActive] = useState(false);
  
    return(
      <div className="popupmenu">
        
        { !menuIsActive && 
          <div className="popup-menu__notactive"> 
            <button className="popup-menu__button" type="button" onClick={()=>setMenuIsActive(prev=>setMenuIsActive(!prev))}>
              <img className="popup-menu__button_img" src={burgermenuLogo} alt="бургер меню логотип"/>
            </button>
          </div>
        } 
       
       { menuIsActive && 
        <div className="popup-container">
          <div className="popup-menu__active">
            <button className="popup-menu__close" type="button">
              <img src={burgermenuButtonClose} alt="бургер меню закрыть" onClick={()=>setMenuIsActive(prev=>setMenuIsActive(!prev))}/>
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
       }
      </div>
      
    );
  }
  
  export default PopupMenu;
  