import React, { useState, useEffect } from "react";
import "./SearchForm.css";

function SearchForm(props) {
  const [filmDirty, setFilmDirty] = useState(false);
  const [errorMessageFilm, setErrorMessageFilm] = useState(
    "Введите название фильма"
  );
  const {
    searchText,
    searchHandler,
    findeMovies,
    switchHandler,
    switchCheked,
    nameLocal,
  } = props;

  useEffect(() => {
    if (filmDirty && searchText?.length) {
      setFilmDirty(false);
    }
  }, [searchText, filmDirty]);

  return (
    <section className="search">
      <form
        noValidate
        className="searchform"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="searchform__block">
          <input
            type="text"
            name="text"
            className="searchform__input"
            placeholder="Фильм"
            required
            onChange={(event) => {
              searchHandler(event.target.value, nameLocal);
            }}
            value={searchText}
            onClick={(e) => setFilmDirty(true)}
          />
          <button
            className="searchform__button"
            type="button"
            onClick={() => findeMovies(searchText)}
          >
            <span className="searchform__button-find">Найти</span>
          </button>
        </div>
        {filmDirty && errorMessageFilm && (
          <div className="error">{errorMessageFilm}</div>
        )}
        <label className="searchform__switch">
          <input
            className="searchform__checkbox-input"
            type="checkbox"
            checked={switchCheked}
            onChange={(event) => switchHandler(event.target.checked)}
          />
          <span className="searchform__checkbox-custom"></span>
          <span className="searchform__shorts">Короткометражки</span>
        </label>
      </form>
    </section>
  );
}

export default SearchForm;
