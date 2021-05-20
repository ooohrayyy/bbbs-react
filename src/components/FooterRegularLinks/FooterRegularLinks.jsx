import React from 'react';
import { NavLink } from 'react-router-dom';

function FooterRegularLinks() {
  return (
    <nav className="footer__column footer__column_content_info">
      <ul className="footer__column-list">
        <li className="footer__column-links">
          <NavLink className="footer__column-link" to="/">
            О проекте
          </NavLink>
        </li>
        <li className="footer__column-links">
          <NavLink className="footer__column-link" to="/">
            Календарь
          </NavLink>
        </li>
        <li className="footer__column-links">
          <NavLink className="footer__column-link" to="/">
            Куда пойти
          </NavLink>
        </li>
        <li className="footer__column-links">
          <NavLink className="footer__column-link" to="/">
            Вопросы
          </NavLink>
        </li>
        <li className="footer__column-links">
          <NavLink className="footer__column-link" to="/">
            Читать и смотреть
          </NavLink>
        </li>
        <li className="footer__column-links">
          <NavLink className="footer__column-link" to="/">
            Права детей
          </NavLink>
        </li>
        <li className="footer__column-links">
          <NavLink className="footer__column-link" to="/">
            Истории
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default FooterRegularLinks;
