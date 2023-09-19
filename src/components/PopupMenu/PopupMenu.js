import React, { useState } from "react";
import "./PopupMenu.css";
import account from "../../images/icon-human.svg";
import burgermenuLogo from "../../images/icon-main.svg";
import burgermenuLogoWhite from "../../images/icon-main_white.svg";
import burgermenuButtonClose from "../../images/Close.svg";
import { Link, useLocation } from "react-router-dom";

function PopupMenu() {
  const [menuIsActive, setMenuIsActive] = useState(false);
  const location = useLocation();
  return (
    <div className="popupmenu">
      {!menuIsActive && (
        <div className="popupmenu__notactive">
          <button
            className="popupmenu__button"
            type="button"
            onClick={() => setMenuIsActive((prev) => setMenuIsActive(!prev))}
          >
            <img
              className="popupmenu__button-img"
              src={
                location.pathname === "/" ? burgermenuLogoWhite : burgermenuLogo
              }
              alt="бургер меню логотип"
            />
          </button>
        </div>
      )}

      {menuIsActive && (
        <div className="popup-container">
          <div className="popupmenu__active">
            <button className="popupmenu__close" type="button">
              <img
                src={burgermenuButtonClose}
                alt="бургер меню закрыть"
                onClick={() =>
                  setMenuIsActive((prev) => setMenuIsActive(!prev))
                }
              />
            </button>
            <nav className="popupmenu__links">
              <Link className="popupmenu__link" to="/">
                Главная
              </Link>
              <Link
                className="popupmenu__link popupmenu__link_active"
                to="/movies"
              >
                Фильмы
              </Link>
              <Link className="popupmenu__link" to="/saved-movies">
                Сохранённые фильмы
              </Link>
            </nav>
            <nav className="popupmenu__footer">
              <div className="popupmenu__footer-box">
                <Link to="/profile">
                  <img
                    src={account}
                    alt="Логотип аккаунта"
                    className="popupmenu__account"
                  />
                </Link>
                <Link className="popupmenu__login" to="/profile">
                  Аккаунт
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupMenu;
