import React from "react";
import "./Movies.css";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

function Movies() {
    return (
        <>

          <HeaderAuth/>
          <main className="main-box">
            <SearchForm/>
            <MoviesCardList/>
              <button className="main-box__button" type="button">
                Еще
              </button>
          </main>
          <Footer />
        </>
      );
    }
    
    export default Movies;
