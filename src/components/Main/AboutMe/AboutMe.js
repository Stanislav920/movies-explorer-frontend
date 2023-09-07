import React from "react";
import "./AboutMe.css";
import Avatar from "../../../images/IMG_20211011_162123.jpg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__block">
        <div className="aboutme__information">
          <h3 className="aboutme__name">Станислав</h3>
          <p className="aboutme__job">Фронтенд разработчик, 37 лет</p>
          <p className="aboutme__bio">Я родился и живу в Санкт-Петербурге, закончил факультет психолого-педагогический. 
            Я люблю слушать музыку, а ещё занимаюсь баскетболом 15 лет. Захотел поменять профессию и пошел на курсы яндекс практикум.После окончания куров собераюсь устроеться работать на должность Фронтенд-разрабочика.
          </p>
          <a className="aboutme__github" href="https://github.com/Stanislav920" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <img className="aboutme__avatar" src={Avatar} alt="Таргонский Станислав"></img>
      </div>
      <Portfolio/>
    </section>
  );
}

export default AboutMe;