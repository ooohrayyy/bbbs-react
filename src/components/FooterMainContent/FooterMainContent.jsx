import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../images/svg/footer-logo.svg';

function FooterMainContent() {
  return (
    <>
      <NavLink className="footer__logo" to="/">
        <img
          className="footer__logo-image"
          src={logo}
          alt="Логотип проекта «Старшие Братья Старшие Сёстры России»"
        />
      </NavLink>
      <a
        className="button footer__button"
        href="https://www.nastavniki.org/campaign/pomoch-dengami"
        target="_blank"
        rel="noreferrer"
      >
        Помочь деньгами
      </a>
      <div className="footer__column footer__column_content_concept">
        <p className="footer__brand">&copy; Старшие Братья Старшие Сёстры</p>
        <div className="footer__copyright">
          <p className="footer__authors">
            Разработка – студенты&nbsp;
            <a
              className="footer__production"
              href="https://praktikum.yandex.ru"
              target="_blank"
              rel="noreferrer"
            >
              Яндекс.Практикум
            </a>
          </p>
          <p className="footer__design">
            Концепция и дизайн –&nbsp;
            <a
              className="footer__production"
              href="https://krkr.design"
              target="_blank"
              rel="noreferrer"
            >
              krkr.design
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default FooterMainContent;
