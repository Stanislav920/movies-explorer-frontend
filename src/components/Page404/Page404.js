import React from "react";
import "./Page404.css";
import { Link, useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();
  return (
    <main>
      <section className="page404">
        <h1 className="page404__title">404</h1>
        <p className="page404__text">Страница не найдена</p>
        <div onClick={() => navigate(-1)} className="page404__button">
          Назад
        </div>
      </section>
    </main>
  );
}

export default Page404;
