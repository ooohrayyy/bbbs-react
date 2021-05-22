import React from 'react';
import { NavLink } from 'react-router-dom';

function FooterRegularLinks() {
  return (
    <nav className="footer__column footer__column_content_info">
      <ul className="footer__column-list">
        <li className="footer__column-links">
          <NavLink className="footer__column-link" to="/about">
            О проекте
          </NavLink>
        </li>
        <li className="footer__column-links">
          <NavLink className="footer__column-link" to="/calendar">
            Календарь
          </NavLink>
        </li>
        <li className="footer__column-links">
          <NavLink className="footer__column-link" to="/places">
            Куда пойти
          </NavLink>
        </li>
        <li className="footer__column-links">
          <NavLink className="footer__column-link" to="/questions">
            Вопросы
          </NavLink>
        </li>
        <li className="footer__column-links">
          <NavLink className="footer__column-link" to="/readings">
            Читать и смотреть
          </NavLink>
        </li>
        <li className="footer__column-links">
          <NavLink className="footer__column-link" to="/rights">
            Права детей
          </NavLink>
        </li>
        <li className="footer__column-links">
          <NavLink className="footer__column-link" to="/stories">
            Истории
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default FooterRegularLinks;
