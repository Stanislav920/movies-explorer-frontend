import React from "react";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

function SavedMovies() {

    return(
        
        <>
        <HeaderAuth/>
        <main className="main-box">
            <SearchForm />
            {/* <Preloader /> */}
            <MoviesCardList />
            <button className="main-box__button" type="button">Еще</button>
        </main>
        <Footer />
        </>
     )
}

export default SavedMovies;