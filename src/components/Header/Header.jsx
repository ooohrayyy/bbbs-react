import React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderLinks from '../HeaderLinks/HeaderLinks';

import recentResults from '../../assets/dev-data/search-results'; // Временный массив с готовыми результатами поиска

function Header() {
  const [burgerMenuisOpen, setBurgerMenuIsOpen] = React.useState(false);

  function toggleBurgerMenu() {
    if (burgerMenuisOpen) {
      setBurgerMenuIsOpen(false);
    } else {
      setBurgerMenuIsOpen(true);
    }
  }

  const headerClass = burgerMenuisOpen
    ? 'header header_displayed page__section'
    : 'header page__section';
  const burgerMenuClass = burgerMenuisOpen
    ? 'menu__burger menu__burger_active'
    : 'menu__burger';
  const menuListsWrapClass = burgerMenuisOpen
    ? 'menu__lists-wrap'
    : 'menu__lists-wrap menu__lists-wrap_hidden';
  const menuListSocialClass = burgerMenuisOpen
    ? 'menu__list menu__list_type_social'
    : 'menu__list menu__list_type_social menu__list_hidden';

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
    <header className={headerClass}>
      <nav className={menuClass}>
        <NavLink className="menu__logo" to="/">
          наставники.про
        </NavLink>
        <HeaderLinks
          menuListsWrapClass={menuListsWrapClass}
          menuListSocialClass={menuListSocialClass}
        />
        <button
          className={burgerMenuClass}
          type="button"
          onClick={toggleBurgerMenu}
        >
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
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
