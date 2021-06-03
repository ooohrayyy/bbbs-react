import React from 'react';
import { Link } from 'react-router-dom';

import recentResults from '../../../assets/dev-data/recentSearchData'; // Временный массив с готовыми результатами поиска

function HeaderSearch({ toggleSearchMenu, searchOptionsClass }) {
  return (
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
              <Link
                className="search__title-link section-title section-title_clickable"
                to={result.link}
              >
                {result.title}
              </Link>
              <Link className="link search__link" to="/">
                {result.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default HeaderSearch;
