import React from "react";
import "./Register.css";
import logo from "../../images/logo-circle.svg";
import { Link } from "react-router-dom";

function Register() {
    return(
        <section className="register">
          <div className="register__box">
            <div className="register__logo-box">
              <Link to="/">
                <img src={logo} alt="Логотип" className="register__logo" />
              </Link>
            </div>
    
            <h2 className="register__title">Доброе пожаловать!</h2>
    
            <form noValidate className="register__form" name="register-form">
              <div className="register__field">
              <label>
                      <label className="register__name">Имя</label>
                      <input className="register__input" 
                             type="text" 
                             name="name" 
                             placeholder="Введите Ваше Имя"
                             autoComplete="off"
                            
                       />
                        <div className="error__register"></div>
                  </label>
                  <label>
                      <label className="register__email">E-mail</label>
                      <input className="register__input" 
                             type="email" 
                             name="email" 
                             placeholder="Введите Ваш E-mail"
                             autoComplete="off"
                             
                      />
                       <div className="error__register"></div>
                  </label>
                  <label>
                      <label className="register__password">Пароль</label>
                      <input className="register__input" 
                             type="password" 
                             name="password" 
                             placeholder="Введите Ваш Пароль"
                             autoComplete="off"
                            
                       />
                      <div className="error__register"></div>
                  </label>
              </div>
              <div className="register__button-box">
                  <button className="register__button" type="submit">Зарегистрироваться</button>
                  <Link className="register__link" to="/signin">
                      Ещё не зарегистрированы?
                      <span className="register__login">Войти</span>
                  </Link>
              </div>
            </form>
    
          </div>
        </section>
      );
    }
    
    export default Register;