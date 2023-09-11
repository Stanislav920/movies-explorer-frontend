import React from "react";
import "./Page404.css";
import { Link } from 'react-router-dom';

function Page404() {
  return(
  <main>
    <section className="page404">
      <h1 className="page404__title">404</h1>
      <p className="page404__text">Страница не найдена</p>
      <Link to="/" className="page404__button">
        Назад
      </Link>
    </section>
  </main>
  );
}

export default Page404;