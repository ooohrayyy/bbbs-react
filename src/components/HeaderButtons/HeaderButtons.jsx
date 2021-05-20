import React from 'react';

import HeaderSearch from '../HeaderSearch/HeaderSearch';

function HeaderButtons({ toggleSearchMenu, searchOptionsClass }) {
  return (
    <ul className="menu__button-list">
      <li className="menu__button-item">
        <HeaderSearch
          toggleSearchMenu={toggleSearchMenu}
          searchOptionsClass={searchOptionsClass}
        />
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
  );
}

export default HeaderButtons;
