import React, { useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { DURATION_CONVERT } from "../../../utils/Constants/constants";
import { setLocalStorage } from "../../../utils/localStorage/localStorage";
import { saveMovies } from "../../../utils/Api/MainApi";
import { deleteSaveMovies } from "../../../utils/Api/MainApi";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

import "./MoviesCard.css";
import Image from "../../../images/image.jpg";
import deleteFilmButton from "../../../images/Close.svg";
import saveFilmButton from "../../../images/icon__heart-red.svg";
import saveButton from "../../../images/icon__heart.svg";

function MoviesCard({ card, saveMoviesCards, deliteFilm }) {
  const [like, setLike] = useState(false);
  const location = useLocation();
  const [isSaved, setIsSaved] = useState(card.inSaved);
  const { setFindeSaveMoviesStore, setSaveMoviesStore, setFilms, setCards } =
    useContext(CurrentUserContext);

  function handleClick() {
    if (isSaved) {
      setCards((prev) =>
        prev.map((item) =>
          item.id === card.id ? { ...item, inSaved: false } : item
        )
      );
      setFilms((prev) =>
        prev.map((item) =>
          item.id === card.id ? { ...item, inSaved: false } : item
        )
      );

      setSaveMoviesStore((prev) => {
        const newData = prev.filter((item) => item.id !== card.id);
        setLocalStorage("SaveMoviesSearch", newData);
        return newData;
      });
      setFindeSaveMoviesStore((prev) =>
        prev.filter((item) => item.id !== card.id)
      );
      deleteSaveMovies(card._id);
    } else {
      saveMovies(card).then((data) => {
        setCards((prev) =>
          prev.map((item) => {
            if (data.movieId === item.id) {
              return { ...item, inSaved: true, _id: data._id };
            }
            return item;
          })
        );

        setFilms((prev) =>
          prev.map((item) => {
            if (data.movieId === item.id) {
              return { ...item, inSaved: true, _id: data._id };
            }
            return item;
          })
        );
        const saveCard = { ...data, id: data.movieId, image: card.image };

        setFindeSaveMoviesStore((prev) => [...prev, saveCard]);
        setSaveMoviesStore((prev) => [...prev, saveCard]);
      });
    }
    setIsSaved(!isSaved);
  }

  const handleDelete = () => {
    setFilms((prev) =>
      prev.map((item) => {
        if (item.id === card.id) {
          item.inSaved = false;
        }
        return item;
      })
    );
    setCards((prev) =>
      prev.map((item) => {
        if (item.id === card.id) {
          item.inSaved = false;
        }
        return item;
      })
    );
    deliteFilm(card._id);
    deleteSaveMovies(card._id);
  };
  let src = `https://api.nomoreparties.co/${card.image.url}`;

  return (
    <li className="moviesCard">
      <a
        href={card.trailerLink}
        target="_blank"
        className="moviesCard__link"
        rel="noreferrer"
      >
        <img
          className="moviesCard__image"
          src={src}
          alt={`Постер ${card.nameRU}`}
        />
      </a>
      <div className="moviesCard__container">
        <h2 className="moviesCard__title">{card.nameRU}</h2>

        {/* {location.pathname === "/saved-movies" &&
                     <button type="button" aria-label="удалить фильм" className="moviesCard__button-del" onClick={handleDelete}>
                      <img className="moviesCard__delete" src={deleteFilmButton} alt="удалить" />
                  </button> }
                   */}
        {location.pathname === "/movies" ? (
          <button
            type="button"
            aria-label="сохранить"
            className={"moviesCard__button-save"}
            onClick={handleClick}
          >
            {card.inSaved ? (
              <img
                className="moviesCard__add"
                src={saveFilmButton}
                alt="добавить"
              />
            ) : (
              <img
                className="moviesCard__add"
                src={saveButton}
                alt="добавлено"
              />
            )}
          </button>
        ) : (
          <button
            type="button"
            aria-label="сохранить"
            className="moviesCard__button-save"
            onClick={handleDelete}
          >
            <img
              className="moviesCard__add"
              src={deleteFilmButton}
              alt="добавить"
            />
          </button>
        )}
      </div>
      <p className="moviesCard__duration">
        {Math.round(card.duration / DURATION_CONVERT)}ч{" "}
        {card.duration -
          DURATION_CONVERT * Math.round(card.duration / DURATION_CONVERT)}
        м
      </p>
    </li>
  );
}

export default MoviesCard;
