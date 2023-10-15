import React, { useEffect, useState, useContext } from "react";
import { getSaveMovies } from "../../utils/Api/MainApi";
import { useResize } from "../../utils/Useresize";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {
  MOVIES_CARDS_1280,
  MOVIES_CARDS_768,
  MOVIES_CARDS_480,
} from "../../utils/Constants/constants";
import {
  setLocalStorage,
  getLocalStorage,
} from "../../utils/localStorage/localStorage";
import { getMovies } from "../../utils/Api/MoviesApi.js";
import { convertSaveMoviesData } from "../../convertSaveMoviesData/convertSaveMoviesData.js";

import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Preloader from "../Movies/Preloader/Preloader";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import "../Body/Body.css";

function SavedMovies(props) {
  const [preloader, setPreloader] = useState(false);
  const [counterCard, setCounterCard] = useState(0);
  const [switchCheked, setSwitchCheked] = useState(false);

  const [durationLength, setDurationLength] = useState(0);
  const [isSearch, setIsSearch] = useState(false);

  const {
    findeSaveMoviesStore,
    setFindeSaveMoviesStore,
    saveMoviesStore,
    setSaveMoviesStore,
    setSearchText,
  } = useContext(CurrentUserContext);
  const titleName = "SaveMoviesSearch";

  const deliteFilm = (id) => {
    setSaveMoviesStore((prev) => prev.filter((film) => film._id !== id));
    setFindeSaveMoviesStore((prev) => prev.filter((film) => film._id !== id));
  };

  const switchHandler = (status) => {
    setSwitchCheked(status);
    setIsSearch(true);
  };

  useEffect(() => {
    setPreloader(true);
    const data = getLocalStorage(titleName);
    if (!data?.length && findeSaveMoviesStore.length === 0) {
      const fetchData = async () => {
        const saves = await getSaveMovies();
        const data = await getMovies();
        const convertSaves = await convertSaveMoviesData(data, saves);
        setSaveMoviesStore(convertSaves);
        setFindeSaveMoviesStore(convertSaves);
      };
      fetchData();
    } else if (data?.length && findeSaveMoviesStore.length === 0) {
      setSaveMoviesStore(data);
      setFindeSaveMoviesStore(data);
    }
    setPreloader(false);
    setSearchText("");
  }, []);

  useEffect(() => {
    setLocalStorage(titleName, saveMoviesStore);
  }, [saveMoviesStore]);

  const findeMovies = (text) => {
    setPreloader(true);
    if (text.length > 0) {
      const a = text.toLowerCase().trim();
      setFindeSaveMoviesStore(
        saveMoviesStore.filter(
          (obg) =>
            obg.nameRU.toLowerCase().includes(a) ||
            obg.nameEN.toLowerCase().includes(a)
        )
      );
    }
    setIsSearch(true);
    setPreloader(false);
  };

  return (
    <>
      <HeaderAuth />
      <main className="main-box">
        <SearchForm
          nameLocal={titleName}
          {...props}
          findeMovies={findeMovies}
          switchCheked={switchCheked}
          switchHandler={switchHandler}
        />
        {preloader && <Preloader />}
        {!preloader && (
          <MoviesCardList
            titleName={titleName}
            {...props}
            cards={findeSaveMoviesStore}
            switchCheked={switchCheked}
            counterCard={counterCard}
            setDurationLength={setDurationLength}
            saveMoviesCards
            deliteFilm={deliteFilm}
            isSearch={isSearch}
          />
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;
