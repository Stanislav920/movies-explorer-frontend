import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="aboutme-portfolio">
      <h3 className="aboutme-portfolio__title">Портфолио</h3>
      <ul className="aboutme-portfolio__block">

        <li className="aboutme-portfolio__card">
          <a
              className="aboutme-portfolio__link"
               href = "https://stanislav920.github.io/how-to-learn/"
              target="_blank"
              rel="noreferrer"
          >
            Статичный сайт
            <p className="aboutme-portfolio__link-icon"></p>
          </a>
        </li>

        <li className="aboutme-portfolio__card">
          <a
              className="aboutme-portfolio__link"
              href="https://stanislav920.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
          >
            Адаптивный сайт
            <p className="aboutme-portfolio__link-icon"></p>
          </a>
        </li>

        <li className="aboutme-portfolio__card">
          <a
              className="aboutme-portfolio__link"
              href="https://stanislav920.github.io/mesto-react/#/sign-in"
              target="_blank"
              rel="noreferrer"
          >
            Одностраничное приложение
            <p className="aboutme-portfolio__link-icon"></p>
          </a>
        </li>

      </ul>
    </section>
  );
}

export default Portfolio;