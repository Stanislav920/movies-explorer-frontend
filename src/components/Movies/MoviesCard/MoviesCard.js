import React, { useState } from "react";
import "./MoviesCard.css";
import Image from '../../../images/image.svg'
import deleteFilmButton from "../../../images/Close.svg";
import saveFilmButton from "../../../images/icon__heart-red.svg";
import saveButton from "../../../images/icon__heart.svg";
import { useLocation } from "react-router-dom";

function MoviesCard () {
  const [like,setLike] = useState(false)
  const location = useLocation();
    return(
        <div className="moviesCard">
          <a href="#"
            target="_blank"
            className="card__link"
            rel="noreferrer"
          >
            <img className="moviesCard__image" src={Image} alt="Фотография человека"/>
          </a>
          <div className="moviesCard__container">
              <h2 className="moviesCard__title">Зона</h2>
                  {/* <button type="button" aria-label="удалить фильм" className="moviesCard__button-del">
                      <img className="moviesCard__delete" src={deleteFilmButton} alt="удалить" />
                  </button> */}
  {location.pathname === "/movies" ? <button type="button" aria-label="сохранить" className="moviesCard__button-save" onClick={()=>setLike((prev)=>!prev)}>
                  {like ?  <img className="moviesCard__add" src={saveFilmButton} alt="добавить"  />:  <img className="moviesCard__add" src={saveButton} alt="добавлено"  />}
                       
                          
                  </button> : <button type="button" aria-label="сохранить" className="moviesCard__button-save">
                  <img className="moviesCard__add" src={deleteFilmButton} alt="добавить"  />
                          
                  </button>} 
                  
          </div>
          <p className="moviesCard__duration">1ч42м</p>
        </div>
      );
}

export default MoviesCard;