import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderRegularLinks({ isAuthorized, onCalendarLinkClick }) {
  function handleCalendarLinkClick(e) {
    if (!isAuthorized) {
      e.preventDefault();
      onCalendarLinkClick();
    }
  }

  return (
    <ul className="menu__list">
      <li className="menu__list-item">
        <NavLink
          onClick={handleCalendarLinkClick}
          className="menu__link"
          to="/calendar"
        >
          Календарь
        </NavLink>
      </li>
      <li className="menu__list-item">
        <NavLink className="menu__link" to="/to-go">
          Куда пойти
        </NavLink>
      </li>
      <li className="menu__list-item">
        <NavLink className="menu__link" to="/questions">
          Вопросы
        </NavLink>
      </li>
      <li className="menu__list-item menu__dropdown-item">
        <NavLink className="menu__link" to="/readings">
          Читать и смотреть
        </NavLink>
        <ul className="menu__dropdown-list">
          <li className="menu__dropdown-list-item">
            <NavLink className="link menu__dropdown-link" to="/handbook">
              Справочник
            </NavLink>
          </li>
          <li className="menu__dropdown-list-item">
            <NavLink className="link menu__dropdown-link" to="/video">
              Видео
            </NavLink>
          </li>
          <li className="menu__dropdown-list-item">
            <NavLink className="link menu__dropdown-link" to="/articles">
              Статьи
            </NavLink>
          </li>
          <li className="menu__dropdown-list-item">
            <NavLink className="link menu__dropdown-link" to="/movies">
              Фильмы
            </NavLink>
          </li>
          <li className="menu__dropdown-list-item">
            <NavLink className="link menu__dropdown-link" to="/books">
              Книги
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="menu__list-item">
        <NavLink className="menu__link" to="/rights">
          Права детей
        </NavLink>
      </li>
      <li className="menu__list-item">
        <NavLink className="menu__link" to="/stories">
          Истории
        </NavLink>
      </li>
    </ul>
  );
}

export default HeaderRegularLinks;
