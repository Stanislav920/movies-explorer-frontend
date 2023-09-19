import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate  } from "react-router-dom";
import { signup, signin } from "../../utils/Api/MainApi";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import "./Register.css";
import logo from "../../images/logo-circle.svg";

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const [nameDirty, setNameDirty] = useState(false)
  const [emailDirty, setEmailDirty] = useState(false)
  const [passwordDirty, setPasswordDirty] = useState(false)
  const [errorMessageName, setErrorMessageName] = useState('Введите имя')
  const [errorMessageEmail, setErrorMessageEmail] = useState('Введите email')
  const [errorMessagePassword, setErrorMessagePassword] = useState('Введите пароль')
  const [inputValid, setInputValid] = useState(false)
  const { setLogedId, openPopup } = useContext(CurrentUserContext);

  const handleRegister = async () => {
    signup({name, email, password})
    .then(data => {
      if(data.message){
        openPopup(data.message)
      } else {
        signin({email, password})
        .then(data => {
          if(data.message) {
            console.error(data.message)
          } else {
            localStorage.setItem('token', data.token)
            setLogedId(true)
            navigate("/movies")
          }
        });
      }
  }).catch(error=>{
      console.log('hendleRegister error ', error)
  });
  }

  useEffect(() => {
    if (errorMessageName || errorMessageEmail || errorMessagePassword) {
      setInputValid(false)
    } else {
      setInputValid(true)
    }
  }, [errorMessageName, errorMessageEmail, errorMessagePassword])

 
  const blurHandler = (e) => {
    switch (e.target.name) {
      case "name": 
        setNameDirty(true)
        break

      case "email": 
        setEmailDirty(true)
        break

      case "password": 
        setPasswordDirty(true)
        break

        // no default
    }
  }

  const nameHandler = (e) => {
    blurHandler(e)
    setName(e.target.value)
    const regular = /^[A-Za-zА-Яа-яЁё /s -]{4,30}/
    if (!regular.test(String(e.target.value).toLocaleLowerCase())) {
      setErrorMessageName("Неккоректное имя")
    } else {
      setErrorMessageName("")
    }
  }
  
  const emailHandler = (e) => {
    blurHandler(e)
    setEmail(e.target.value)
    const regular = /^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
    if (!regular.test(String(e.target.value).toLocaleLowerCase())) {
      setErrorMessageEmail("Неккоректный email")
    } else {
      setErrorMessageEmail("")
    }
  }

  const passwordHandler = (e) => {
    blurHandler(e)
    setPassword(e.target.value)
      if (e.target.value.length < 5 || e.target.value.length > 16) {
        setErrorMessagePassword("Пароль должен содержать от 5 до 16 символов")
        if (!e.target.value) {
          setErrorMessagePassword("Пароль не может быть пустым")
        }
      } else {
        setErrorMessagePassword("")
      }
    }

    return(
      <main>
        <section className="register">
          <div className="register__box">
            <div className="register__logo-box">
              <Link to="/">
                <img src={logo} alt="Логотип" className="register__logo" />
              </Link>
            </div>
    
            <h1 className="register__title">Добро пожаловать!</h1>
    
            <form noValidate className="register__form" name="register-form" onSubmit={e=> e.preventDefault()}>
              <div className="register__field">
              <label>
                      <span className="register__name">Имя</span>
                      <input className="register__input" 
                             type="text" 
                             name="name" 
                             placeholder="Введите Ваше Имя"
                             autoComplete="off"
                             minLength={5}
                             maxLength={30}
                             regular="[A-Za-zА-Яа-яЁё /s -]{5,30}"
                             required
                             value={name}
                             onChange={e => nameHandler(e)}
                            
                       />
                        {(nameDirty && errorMessageName) && <span className="register__error">{errorMessageName}</span>}
                  </label>
                  <label>
                      <span className="register__email">E-mail</span>
                      <input className="register__input" 
                             type="email" 
                             name="email" 
                             placeholder="Введите Ваш E-mail"
                             autoComplete="off"
                             minLength={2}
                             maxLength={30}
                             regular="[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}"
                             required
                             value={email}
                             onChange={e => emailHandler(e)}
                             
                      />
                      {(emailDirty && errorMessageEmail) && <span className="register__error">{errorMessageEmail}</span>}
                  </label>
                  <label>
                      <span className="register__password">Пароль</span>
                      <input className="register__input" 
                             type="password" 
                             name="password" 
                             placeholder="Введите Ваш Пароль"
                             autoComplete="off"
                             minLength={5}
                             maxLength={16}
                             required
                             value={password}
                             onChange={e => passwordHandler(e)}
                            
                       />
                      {(passwordDirty && errorMessagePassword) && <span className="register__error">{errorMessagePassword}</span>}
                  </label>
              </div>
              <div className="register__button-box">
                  <button className="register__button" type="submit" onClick={handleRegister} disabled={!inputValid}>Зарегистрироваться</button>
                  <Link className="register__link" to="/signin">
                  Уже зарегистрированы?
                      <span className="register__login">Войти</span>
                  </Link>
              </div>
            </form>
    
          </div>
        </section>
      </main>
      );
    }
    
    export default Register;