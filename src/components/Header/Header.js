import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo-circle.svg";



function Header() {
  return ( 
    <>
         <header className="header">
            <div className="header__container">
              <Link to="/">
                <img src={logo} alt="Логотип" className="header__logo" />
              </Link>
              <nav className="header__button-container">
                <Link to="/signup" className="header__button">
                  Регистрация
                </Link>
                <Link to="/signin" className="header__button-auth">
                  Войти
                </Link>
              </nav>
            </div>
          </header>
                
      </>
  )
        
  }
 
  export default Header;