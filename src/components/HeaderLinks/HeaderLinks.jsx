import React from 'react';
import { NavLink } from 'react-router-dom';

import HeaderSocialLinks from '../HeaderSocialLinks/HeaderSocialLinks';

function HeaderLinks({ menuListsWrapClass, menuListSocialClass }) {
  return (
    <div className={menuListsWrapClass}>
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
      <HeaderSocialLinks menuListSocialClass={menuListSocialClass} />
    </div>
  );
}

export default HeaderLinks;
