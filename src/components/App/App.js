import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import "./App.css";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Page404 from "../Page404/Page404";
import Popup from "../Popup/popup";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { getProfile } from "../../utils/Api/MainApi";

const initUser = { name: "", email: "" };

function App() {
  const [searchText, setSearchText] = useState("");
  const [user, setUser] = useState(initUser);
  const [logedId, setLogedId] = useState(true);
  const [saveMoviesStore, setSaveMoviesStore] = useState([]);
  const [findeSaveMoviesStore, setFindeSaveMoviesStore] = useState([]);
  const [cards, setCards] = useState([]);
  const [films, setFilms] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const closePopup = () => {
    setPopupOpen(false);
    setPopupMessage("");
  };

  const openPopup = (message) => {
    setPopupMessage(message);
    setPopupOpen(true);
  };

  const searchHandler = (text, name) => {
    if (name === "MoviesSearch") {
      const settings = localStorage.getItem(`settings_${name}`);
      if (settings) {
        const obj = JSON.parse(settings);
        obj.searchText = text;
        localStorage.setItem(`settings_${name}`, JSON.stringify(obj));
      } else {
        localStorage.setItem(
          `settings_${name}`,
          `{"searchText": "${text}", "shortSwich": ${false}}`
        );
      }
    }
    setSearchText(text);
  };

  useEffect(() => {
    if (
      !localStorage.getItem("token") ||
      localStorage.getItem("token") === ""
    ) {
      setLogedId(false);
    } else {
      getProfile()
        .then((data) => {
          if (data.message) {
            localStorage.removeItem("token");
            setLogedId(false);
            window.location.reload();
          }
        })
        .catch((error) => {
          console.error("getProfile error ", error);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <CurrentUserContext.Provider
        value={{
          setSearchText,
          user,
          setUser,
          logedId,
          setLogedId,
          saveMoviesStore,
          setSaveMoviesStore,
          cards,
          setCards,
          films,
          setFilms,
          findeSaveMoviesStore,
          setFindeSaveMoviesStore,
          openPopup,
          searchText,
        }}
      >
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Main />} />

            <Route
              excat
              path="/signin"
              element={
                <ProtectedRoute logedId={!logedId}>
                  <Login />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/signup"
              element={
                <ProtectedRoute logedId={!logedId}>
                  <Register />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/profile"
              element={
                <ProtectedRoute logedId={logedId}>
                  <Profile />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/movies"
              element={
                <ProtectedRoute logedId={logedId}>
                  <Movies
                    searchText={searchText}
                    searchHandler={searchHandler}
                  />
                </ProtectedRoute>
              }
            />

            <Route
              exact
              path="/saved-movies"
              element={
                <ProtectedRoute logedId={logedId}>
                  <SavedMovies
                    searchText={searchText}
                    searchHandler={searchHandler}
                  />
                </ProtectedRoute>
              }
            />

            <Route exact path="*" element={<Page404 />} />
          </Routes>
          <Popup
            popupOpen={popupOpen}
            popupMessage={popupMessage}
            closePopup={closePopup}
          />
        </div>
      </CurrentUserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
