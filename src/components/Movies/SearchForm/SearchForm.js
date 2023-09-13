import React from "react";
import "./SearchForm.css"

function SearchForm() {
    return (
      <section className="search">
        <form noValidate className="searchform">
          <div className="searchform__block">
             <input
              type="text"
              name="text"
              className="searchform__input"
              placeholder="Фильм"
              required
            />
            <button className="searchform__button" type="button">
              <span className="searchform__button-find">Найти</span>
            </button>
          </div>
           <div className="error"></div>
          <label className="searchform__switch">
            <input className="searchform__checkbox-input" type="checkbox"/>
            <span className="searchform__checkbox-custom"></span>
            <span className="searchform__shorts">Короткометражки</span>
          </label>
        </form>
      </section>
    );
  }
  
  export default SearchForm;
