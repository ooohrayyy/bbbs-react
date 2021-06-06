import React from 'react';
import { NavLink } from 'react-router-dom';

function HeaderRegularLinks({
  isAuthorized,
  onCalendarLinkClick,
  setBurgerMenuIsOpen,
}) {
  function handleLinkClick() {
    setBurgerMenuIsOpen(false);
  }

  function handleCalendarLinkClick(e) {
    setBurgerMenuIsOpen(false);

    if (!isAuthorized) {
      e.preventDefault();
      onCalendarLinkClick(e.target.href);
    }
  }

  return (
    <ul className="menu__list">
      <li className="menu__list-item">
        <NavLink
          className="menu__link"
          to="/calendar"
          onClick={handleCalendarLinkClick}
        >
          Календарь
        </NavLink>
      </li>
      <li className="menu__list-item">
        <NavLink className="menu__link" to="/to-go" onClick={handleLinkClick}>
          Куда пойти
        </NavLink>
      </li>
      <li className="menu__list-item">
        <NavLink
          className="menu__link"
          to="/questions"
          onClick={handleLinkClick}
        >
          Вопросы
        </NavLink>
      </li>
      <li className="menu__list-item menu__dropdown-item">
        <NavLink
          className="menu__link"
          to="/readings"
          onClick={handleLinkClick}
        >
          Читать и смотреть
        </NavLink>
        <ul className="menu__dropdown-list">
          <li className="menu__dropdown-list-item">
            <NavLink
              className="link menu__dropdown-link"
              to="/handbook"
              onClick={handleLinkClick}
            >
              Справочник
            </NavLink>
          </li>
          <li className="menu__dropdown-list-item">
            <NavLink
              className="link menu__dropdown-link"
              to="/video"
              onClick={handleLinkClick}
            >
              Видео
            </NavLink>
          </li>
          <li className="menu__dropdown-list-item">
            <NavLink
              className="link menu__dropdown-link"
              to="/articles"
              onClick={handleLinkClick}
            >
              Статьи
            </NavLink>
          </li>
          <li className="menu__dropdown-list-item">
            <NavLink
              className="link menu__dropdown-link"
              to="/movies"
              onClick={handleLinkClick}
            >
              Фильмы
            </NavLink>
          </li>
          <li className="menu__dropdown-list-item">
            <NavLink
              className="link menu__dropdown-link"
              to="/books"
              onClick={handleLinkClick}
            >
              Книги
            </NavLink>
          </li>
        </ul>
      </li>
      <li className="menu__list-item">
        <NavLink className="menu__link" to="/rights" onClick={handleLinkClick}>
          Права детей
        </NavLink>
      </li>
      <li className="menu__list-item">
        <NavLink className="menu__link" to="/stories" onClick={handleLinkClick}>
          Истории
        </NavLink>
      </li>
    </ul>
  );
}

export default HeaderRegularLinks;
