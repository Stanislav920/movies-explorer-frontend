import React  from "react";
import "./Login.css";
import logo from "../../images/logo-circle.svg";
import { Link } from "react-router-dom";

function Login() {
    return(
      <main>
        <section className="login">
          <div className="login__box">
                <div className="login__logo-box">
                  <Link to="/">
                    <img src={logo} alt="Логотип" className="login__logo" />
                  </Link>
                </div>
            <h1 className="login__title">Рады видеть!</h1>
            <form noValidate className="login__form" name="login-form">
              <div className="login__field">
                  <label>
                      <span className="login__email">E-mail</span>
                      <input className="login__input" 
                             type="email"
                             name="email"
                             autoComplete="off"
                             placeholder="Введите Ваш E-mail" 
                             minLength={2}
                             maxLength={30}
                             pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                             required
                             
                                                          
                      />
                       <div className="error__login"></div>
                  </label>
                  <label>
                      <span className="login__password">Пароль</span>
                      <input className="login__input" 
                             type="password"
                             name="password"
                             autoComplete="off"
                             placeholder="Введите Ваш Пароль" 
                             minLength={5}
                             maxLength={16}
                             required
                            
                       />
                       <div className="error__login"></div>
                  </label>
              </div>
              <div className="login__button-box">
                  <button className="login__button" type="submit">Войти</button>
                  <Link className="login__link" to="/signup">
                      Ещё не зарегистрированы?
                      <span className="login__register">Регистрация</span>
                  </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
      );
}

export default Login;