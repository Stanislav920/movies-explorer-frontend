import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, updateProfile } from "../../utils/Api/MainApi";
import { PROFILE_UPDATE_MESSAGE } from "../../utils/Constants/constants";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./Profile.css";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

function Profile() {
  const { user, setUser, setLogedId, openPopup } =
    useContext(CurrentUserContext);
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    getProfile()
      .then((data) => {
        setUser(data);
        setName(data.name);
        setEmail(data.email);
      })
      .catch((error) => {
        console.error("getProfile error ", error);
      });
  }, []);

  useEffect(() => {
    if (user.name !== name || user.email !== email) {
      setIsUpdate(true);
    } else {
      setIsUpdate(false);
    }
  }, [user, email, name]);

  const handleProfileUpdate = (name, email) => {
    updateProfile({ name: name, email: email })
      .then((data) => {
        console.log(data);
        setUser(data);
        if (data.message) {
          openPopup(data.message);
        } else {
          openPopup(PROFILE_UPDATE_MESSAGE);
        }
      })
      .catch((error) => {
        console.error("handleProfileUpdate error ", error);
      });
  };

  const signOut = () => {
    localStorage.clear();
    setLogedId(false);
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <HeaderAuth loged={true} />
      <main>
        <section className="profile">
          <div className="profile__content">
            <h1 className="profile__title">Привет, {user?.name}!</h1>
            <form
              className="profile__form"
              onSubmit={(e) => e.preventDefault()}
            >
              <fieldset className="profile__fieldset">
                <label className="profile__fields">
                  <span className="profile__input-name">Имя</span>
                  <input
                    className="profile__input"
                    type="text"
                    name="name"
                    placeholder="Имя"
                    required
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </label>
                <div className="profile__line"></div>
                <label className="profile__fields">
                  <span className="profile__input-email">E-mail</span>
                  <input
                    className="profile__input"
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </label>
              </fieldset>
              <div className="profile__nav">
                <button
                  className="profile__edit-button"
                  type="submit"
                  onClick={() => handleProfileUpdate(name, email)}
                  disabled={!isUpdate}
                >
                  Редактировать
                </button>

                <button className="profile__signout-button" onClick={signOut}>
                  Выйти из аккаунта
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Profile;
