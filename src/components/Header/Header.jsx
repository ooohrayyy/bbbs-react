import React from 'react';

function Header() {
  return (
    <header className="header page__section">
      <nav className="menu">
        <a className="menu__logo" href="./index.html" target="_self">
          наставники.про
        </a>
        <div className="menu__lists-wrap menu__lists-wrap_hidden">
          <ul className="menu__list">
            <li className="menu__list-item">
              <a className="menu__link" href="./calendar.html">
                Календарь
              </a>
            </li>
            <li className="menu__list-item">
              <a className="menu__link" href="./place.html">
                Куда пойти
              </a>
            </li>
            <li className="menu__list-item">
              <a className="menu__link" href="./questions.html">
                Вопросы
              </a>
            </li>
            <li className="menu__list-item menu__dropdown-item">
              <a className="menu__link" href="./read-watch-main.html">
                Читать и смотреть
              </a>
              <ul className="menu__dropdown-list">
                <li className="menu__dropdown-list-item">
                  <a className="link menu__dropdown-link" href="./catalog.html">
                    Справочник
                  </a>
                </li>
                <li className="menu__dropdown-list-item">
                  <a className="link menu__dropdown-link" href="./video.html">
                    Видео
                  </a>
                </li>
                <li className="menu__dropdown-list-item">
                  <a
                    className="link menu__dropdown-link"
                    href="./articles.html"
                  >
                    Статьи
                  </a>
                </li>
                <li className="menu__dropdown-list-item">
                  <a className="link menu__dropdown-link" href="./films.html">
                    Фильмы
                  </a>
                </li>
                <li className="menu__dropdown-list-item">
                  <a className="link menu__dropdown-link" href="./books.html">
                    Книги
                  </a>
                </li>
              </ul>
            </li>
            <li className="menu__list-item">
              <a className="menu__link" href="./rights.html">
                Права детей
              </a>
            </li>
            <li className="menu__list-item">
              <a className="menu__link" href="./stories.html">
                Истории
              </a>
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
                type="submit"
                aria-label="Поиск"
                title="Поиск"
              />
              <div className="search__options menu__search-options">
                <input
                  className="search__input paragraph"
                  type="text"
                  name="search"
                  placeholder="Поиск"
                />
                <ul className="search__option-list">
                  <li className="search__option-item">
                    <a
                      className="search__title-link section-title section-title_clickable"
                      href="./article.html"
                    >
                      Причины подростковой агрессии
                    </a>
                    <a className="link search__link" href="./article.html">
                      статьи
                    </a>
                  </li>
                  <li className="search__option-item">
                    <a
                      className="search__title-link section-title section-title_clickable"
                      href="./video.html"
                    >
                      Агрессивное поведение детей-сирот
                    </a>
                    <a className="link search__link" href="./video.html">
                      видео
                    </a>
                  </li>
                  <li className="search__option-item">
                    <a
                      className="search__title-link section-title section-title_clickable"
                      href="./questions.html"
                    >
                      Что делать если ваш младший агрессивно себя ведет, решил
                      закрыть пару?
                    </a>
                    <a className="link search__link" href="./questions.html">
                      вопросы
                    </a>
                  </li>
                  <li className="search__option-item">
                    <a
                      className="search__title-link section-title section-title_clickable"
                      href="./books.html"
                    >
                      Как реагировать на агрессивное поведения ребенка
                    </a>
                    <a className="link search__link" href="./books.html">
                      книги
                    </a>
                  </li>
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
