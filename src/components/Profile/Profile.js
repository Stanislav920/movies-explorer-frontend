import React from "react";
import "./Profile.css";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

function Profile() { 
    return(
        <>
        <HeaderAuth />
    <main>
        <section className="profile">
          <div className='profile__content'>
            <h1 className='profile__title'>Привет, Станислав!</h1>
            <form className='profile__form'>
                <fieldset className='profile__fieldset'>
                    <label className='profile__fields'>
                        <span className='profile__input-name'>Имя</span>
                        <input className='profile__input'
                            type='text'
                            name='name'
                            placeholder='Имя'
                            required
                            
                        />
                    </label>
                    <div className="profile__line"></div>
                    <label className='profile__fields'>
                        <span className='profile__input-email'>E-mail</span>
                        <input className='profile__input'
                            type='email'
                            name='email'
                           placeholder='E-mail'
                           required
                           />
                    </label>
                </fieldset>
                <div className='profile__nav'>
                    <button className='profile__edit-button' type='submit'>Редактировать</button>
                    
                        <a className="profile__signout-button" href="/">Выйти из аккаунта</a>
                    
                </div>
            </form>
          </div>
        </section>
    </main>
        </>
      );
    }
    
    export default Profile;
