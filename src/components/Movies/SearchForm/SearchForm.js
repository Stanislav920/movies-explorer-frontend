import React from "react";
import "./SearchForm.css"

function SearchForm() {
    return (
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
              <p className="searchform__button-find">Найти</p>
            </button>
          </div>
           <div className="error"></div>
          <label className="searchform__switch">
            <input className="searchform__checkbox-input" type="checkbox"/>
            <div className="searchform__checkbox-custom"></div>
            <p className="searchform__shorts">Короткометражки</p>
          </label>
        </form>
    );
  }
  
  export default SearchForm;
