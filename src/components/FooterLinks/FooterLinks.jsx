import React from 'react';
import { NavLink } from 'react-router-dom';

function FooterLinks() {
  return (
    <>
      <nav className="footer__column footer__column_content_info">
        <ul className="footer__column-list">
          <li className="footer__column-links">
            <NavLink to="/" className="footer__column-link">
              О проекте
            </NavLink>
          </li>
          <li className="footer__column-links">
            <NavLink to="/" className="footer__column-link">
              Календарь
            </NavLink>
          </li>
          <li className="footer__column-links">
            <NavLink to="/" className="footer__column-link">
              Куда пойти
            </NavLink>
          </li>
          <li className="footer__column-links">
            <NavLink to="/" className="footer__column-link">
              Вопросы
            </NavLink>
          </li>
          <li className="footer__column-links">
            <NavLink to="/" className="footer__column-link">
              Читать и смотреть
            </NavLink>
          </li>
          <li className="footer__column-links">
            <NavLink to="/" className="footer__column-link">
              Права детей
            </NavLink>
          </li>
          <li className="footer__column-links">
            <NavLink to="/" className="footer__column-link">
              Истории
            </NavLink>
          </li>
        </ul>
      </nav>
      <nav className="footer__column footer__column_content_social">
        <ul className="footer__column-list">
          <li className="footer__column-links">
            <a
              href="https://www.facebook.com/BigBrothers.BigSisters.Russia/"
              className="footer__column-link"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </li>
          <li className="footer__column-links">
            <a
              href="https://vk.com/big.brothers.big.sisters"
              className="footer__column-link"
              target="_blank"
              rel="noreferrer"
            >
              Vkontakte
            </a>
          </li>
          <li className="footer__column-links">
            <a
              href="https://www.instagram.com/nastavniki_org/"
              className="footer__column-link"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </li>
          <li className="footer__column-links">
            <a
              href="https://www.youtube.com/user/Nastavniki/"
              className="footer__column-link"
              target="_blank"
              rel="noreferrer"
            >
              YouTube
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default FooterLinks;
