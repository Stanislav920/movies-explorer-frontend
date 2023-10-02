import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { getMovies } from "../../utils/Api/MoviesApi";
import { getSaveMovies } from "../../utils/Api/MainApi";
import { useResize } from "../../utils/Useresize";
import {
  MOVIES_CARDS_1280,
  MOVIES_CARDS_768,
  MOVIES_CARDS_480,
  MOVIES_CARDS_1279,
  MOVIES_CARDS_1199,
  ADD_MOVIES_CARD_1280,
  ADD_MOVIES_CARD_768,
  ADD_MOVIES_CARD_480,
  ADD_MOVIES_CARD_1279,
} from "../../utils/Constants/constants";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../utils/localStorage/localStorage";
import { convertSaveMoviesData } from "../../convertSaveMoviesData/convertSaveMoviesData";

import "./Movies.css";
import Footer from "../Footer/Footer";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
// import HeaderAuth from "../HeaderAuth/HeaderAuth";
import Header from "../Header/Header";

function Movies(props) {
  const [preloader, setPreloader] = useState(false);
  const [counterCard, setCounterCard] = useState(0);
  const [switchCheked, setSwitchCheked] = useState(false);
  const [isOther, setisOther] = useState(false);
  const [flag, setFlag] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [durationLength, setDurationLength] = useState(0);
  const [filmDirty, setFilmDirty] = useState(false);
  const { currentScreen } = useResize();
  const {
    setSaveMoviesStore,
    setFindeSaveMoviesStore,
    cards,
    setCards,
    films,
    setFilms,
    setSearchText,
    searchText,
  } = useContext(CurrentUserContext);
  const { searchHandler } = props;
  const titleName = "MoviesSearch";

  const switchHandler = (status) => {
    const settings = localStorage.getItem(`settings_${titleName}`);
    if (settings) {
      const obj = JSON.parse(settings);
      obj.shortSwich = status;
      localStorage.setItem(`settings_${titleName}`, JSON.stringify(obj));
    } else {
      localStorage.setItem(
        `settings_${titleName}`,
        `{"searchText": "", "shortSwich": ${status}}`
      );
    }
    setSwitchCheked(status);
    setIsSearch(true);
  };

  useEffect(() => {
    if (switchCheked && durationLength > counterCard) {
      setisOther(true);
    } else if (
      !switchCheked &&
      films.length > 0 &&
      films.length > counterCard
    ) {
      setisOther(true);
    } else {
      setisOther(false);
    }
  }, [films, counterCard, switchCheked, durationLength]);

  function getCounterCard() {
    switch (currentScreen) {
      case "SCREEN_XXL":
        setCounterCard(MOVIES_CARDS_1280);
        break;
      case "SCREEN_XL":
        setCounterCard(MOVIES_CARDS_1279);
        break;
      case "SCREEN_LG":
        setCounterCard(MOVIES_CARDS_1199);
        break;
      case "SCREEN_MD":
        setCounterCard(MOVIES_CARDS_768);
        break;
      default:
        setCounterCard(MOVIES_CARDS_480);
        break;
    }
  }

  useEffect(() => {
    getCounterCard();
  }, [currentScreen]);

  useEffect(() => {
    const searchSetings = getLocalStorage(`settings_${titleName}`);
    if (searchSetings?.searchText) {
      setSearchText(searchSetings.searchText);
      setIsSearch(true);
    }
    if (searchSetings?.shortSwich) {
      setSwitchCheked(searchSetings.shortSwich);
    }
    console.log(searchText);
    if (!cards.length) {
      console.log(cards);
      setPreloader(true);
      const fetchData = async () => {
        const MoviesSearchData = getLocalStorage(titleName);

        if (!MoviesSearchData.length && searchText.length > 0) {
          console.log(MoviesSearchData);
          const saves = await getSaveMovies();
          const data = await getMovies();
          const convertSaves = await convertSaveMoviesData(data, saves);
          setSaveMoviesStore(convertSaves);
          setFindeSaveMoviesStore(convertSaves);

          const newData = data.map((item) => {
            const isFind = saves.find((obg) => obg.movieId === item.id);
            return { ...item, inSaved: !!isFind };
          });

          setCards(newData);
        } else {
          console.log(MoviesSearchData);
          setCards(MoviesSearchData);
          setFlag(true);
        }
        setPreloader(false);
      };
      fetchData();
    }
  }, [searchText]);

  useEffect(() => {
    setLocalStorage(titleName, cards);
  }, [cards]);

  useEffect(() => {
    if (flag) {
      setSearchText("");
      const settings = localStorage.getItem(`settings_${titleName}`);
      if (settings) {
        const obj = JSON.parse(settings);
        if (obj.searchText.length > 0) {
          searchHandler(obj.searchText, titleName);
          findeMovies(obj.searchText);
        }
        setSwitchCheked(obj.shortSwich);
      }
    }
  }, [flag]);

  const findeMovies = (text) => {
    setPreloader(true);
    getCounterCard();
    if (text.trim() === "") {
      setFilms(cards);
      setFilmDirty(true);
    } else {
      setFilmDirty(false);
      const a = text.toLowerCase().trim();
      setFilms(
        cards.filter(
          (obg) =>
            obg.nameRU.toLowerCase().includes(a) ||
            obg.nameEN.toLowerCase().includes(a)
        )
      );
    }
    setIsSearch(true);
    setPreloader(false);
  };

  const addMoviesCard = () => {
    let add = ADD_MOVIES_CARD_1280;
    if (currentScreen === "SCREEN_XL" || currentScreen === "SCREEN_LG") {
      add = ADD_MOVIES_CARD_1279;
    } else if (currentScreen === "SCREEN_MD") {
      add = ADD_MOVIES_CARD_768;
    } else if (currentScreen === "SCREEN_SM") {
      add = ADD_MOVIES_CARD_480;
    }
    setCounterCard((prev) => prev + add);
  };

  return (
    <>
      <Header />
      <main className="main-box">
        <SearchForm
          filmDirty={filmDirty}
          nameLocal={titleName}
          {...props}
          findeMovies={findeMovies}
          switchCheked={switchCheked}
          switchHandler={switchHandler}
        />

        {preloader && <Preloader />}

        {!preloader && (
          <MoviesCardList
            {...props}
            titleName={titleName}
            cards={films}
            switchCheked={switchCheked}
            counterCard={counterCard}
            setDurationLength={setDurationLength}
            isSearch={isSearch}
          />
        )}
        {isOther && (
          <button
            className="main-box__button"
            type="button"
            onClick={addMoviesCard}
          >
            Еще
          </button>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Movies;
