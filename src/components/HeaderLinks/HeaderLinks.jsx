import React from 'react';
import { NavLink } from 'react-router-dom';

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
      <ul className={menuListSocialClass}>
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
  );
}

export default HeaderLinks;
