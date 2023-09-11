import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList () {
    return(
      <main>
        <section className="movieCardList">
          <ul className="movieCardList__box">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />  
          </ul>
        </section>
        </main>
      );
}

export default MoviesCardList;