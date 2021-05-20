import React from 'react';
import { NavLink } from 'react-router-dom';

import recentResults from '../../assets/dev-data/search-results'; // Временный массив с готовыми результатами поиска

function Header() {
  const [searchMenuIsOpen, setSearchMenuIsOpen] = React.useState(false);

  function toggleSearchMenu() {
    if (searchMenuIsOpen) {
      setSearchMenuIsOpen(false);
    } else {
      setSearchMenuIsOpen(true);
    }
  }

  const menuClass = searchMenuIsOpen ? 'menu menu_state_search' : 'menu';
  const searchOptionsClass = searchMenuIsOpen
    ? 'search__options search__options_visible menu__search-options'
    : 'search__options menu__search-options';

  return (
    <header className="header page__section">
      <nav className={menuClass}>
        <NavLink className="menu__logo" to="/">
          наставники.про
        </NavLink>
        <div className="menu__lists-wrap menu__lists-wrap_hidden">
          <ul className="menu__list">
            <li className="menu__list-item">
              <NavLink className="menu__link" to="/">
                Календарь
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink className="menu__link" to="/">
                Куда пойти
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink className="menu__link" to="/">
                Вопросы
              </NavLink>
            </li>
            <li className="menu__list-item menu__dropdown-item">
              <NavLink className="menu__link" to="/">
                Читать и смотреть
              </NavLink>
              <ul className="menu__dropdown-list">
                <li className="menu__dropdown-list-item">
                  <NavLink className="link menu__dropdown-link" to="/">
                    Справочник
                  </NavLink>
                </li>
                <li className="menu__dropdown-list-item">
                  <NavLink className="link menu__dropdown-link" to="/">
                    Видео
                  </NavLink>
                </li>
                <li className="menu__dropdown-list-item">
                  <NavLink className="link menu__dropdown-link" to="/">
                    Статьи
                  </NavLink>
                </li>
                <li className="menu__dropdown-list-item">
                  <NavLink className="link menu__dropdown-link" to="/">
                    Фильмы
                  </NavLink>
                </li>
                <li className="menu__dropdown-list-item">
                  <NavLink className="link menu__dropdown-link" to="/">
                    Книги
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="menu__list-item">
              <NavLink className="menu__link" to="/">
                Права детей
              </NavLink>
            </li>
            <li className="menu__list-item">
              <NavLink className="menu__link" to="/">
                Истории
              </NavLink>
            </li>
          </ul>
          <ul className="menu__list menu__list_type_social menu__list_hidden">
            <li className="menu__list-item">
              <a
                className="menu__link"
                href="https://www.facebook.com/BigBrothers.BigSisters.Russia/"
                target="_blank"
                rel="noreferrer"
              >
                facebook
              </a>
            </li>
            <li className="menu__list-item">
              <a
                className="menu__link"
                href="https://vk.com/big.brothers.big.sisters"
                target="_blank"
                rel="noreferrer"
              >
                vkontakte
              </a>
            </li>
            <li className="menu__list-item">
              <a
                className="menu__link"
                href="https://www.instagram.com/nastavniki_org/"
                target="_blank"
                rel="noreferrer"
              >
                instagram
              </a>
            </li>
            <li className="menu__list-item">
              <a
                className="menu__link"
                href="https://www.youtube.com/user/Nastavniki/"
                target="_blank"
                rel="noreferrer"
              >
                youtube
              </a>
            </li>
          </ul>
        </div>
        <button className="menu__burger" type="button">
          <span className="menu__burger-line" />
          <span className="menu__burger-line" />
          <span className="menu__burger-line" />
        </button>
        <ul className="menu__button-list">
          <li className="menu__button-item">
            <form className="search" name="search-form">
              <button
                className="menu__button menu__button_type_search search__button"
                type="button"
                aria-label="Поиск"
                title="Поиск"
                onClick={toggleSearchMenu}
              />
              <div className={searchOptionsClass}>
                <input
                  className="search__input paragraph"
                  type="text"
                  name="search"
                  placeholder="Поиск"
                />
                <ul className="search__option-list">
                  {recentResults.map((result, index) => (
                    <li className="search__option-item" key={index}>
                      <NavLink
                        className="search__title-link section-title section-title_clickable"
                        to={result.link}
                      >
                        {result.title}
                      </NavLink>
                      <NavLink className="link search__link" to="/">
                        {result.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </form>
          </li>
          <li className="menu__button-item">
            <button
              className="menu__button menu__button_type_user"
              type="button"
              aria-label="Личный кабинет"
              title="Личный кабинет"
              onClick="document.location='./index_active.html'"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
