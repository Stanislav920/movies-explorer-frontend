import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo-circle.svg";
import HeaderAuth from "../HeaderAuth/HeaderAuth";


function Header() {
  return ( 
    <>
    <HeaderAuth/>
          <header className="header">
            <div className="header__container">
              <Link to="/">
                <img src={logo} alt="Логотип" className="header__logo" />
              </Link>
              <div className="header__button-container">
                <Link to="/signup" className="header__button">
                  Регистрация
                </Link>
                <Link to="/signin" className="header__button-auth">
                  Войти
                </Link>
              </div>
            </div>
          </header>
                
      </>
  )
        
  }
 
  export default Header;