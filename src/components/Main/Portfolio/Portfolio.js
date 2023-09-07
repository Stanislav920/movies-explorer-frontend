import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="potfolio__block">

        <li className="portfolio__card">
          <a
              className="porfolio__link"
               href = "#"
              target="_blank"
              rel="noreferrer"
          >
            Статичный сайт
            <p className="portfolio__link-icon"></p>
          </a>
        </li>

        <li className="portfolio__card">
          <a
              className="porfolio__link"
              href="https://stanislav920.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
          >
            Адаптивный сайт
            <p className="portfolio__link-icon"></p>
          </a>
        </li>

        <li className="portfolio__card">
          <a
              className="porfolio__link"
              href="https://stanislav920.github.io/mesto-react/#/sign-in"
              target="_blank"
              rel="noreferrer"
          >
            Одностраничное приложение
            <p className="portfolio__link-icon"></p>
          </a>
        </li>

      </ul>
    </section>
  );
}

export default Portfolio;