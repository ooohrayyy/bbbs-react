import React from 'react';
import { NavLink } from 'react-router-dom';

function FooterRegularLinks() {
  return (
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
  );
}

export default FooterRegularLinks;
