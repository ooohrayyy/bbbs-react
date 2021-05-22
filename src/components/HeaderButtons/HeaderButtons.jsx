import React from 'react';

import HeaderSearch from '../HeaderSearch/HeaderSearch';
import HeaderSignIn from '../HeaderSignIn/HeaderSignIn';

function HeaderButtons({ toggleSearchMenu, searchOptionsClass }) {
  return (
    <>
      <ul className="menu__button-list">
        <li className="menu__button-item">
          <HeaderSearch
            toggleSearchMenu={toggleSearchMenu}
            searchOptionsClass={searchOptionsClass}
          />
        </li>
        <li className="menu__button-item">
          <HeaderSignIn />
        </li>
      </ul>
    </>
  );
}

export default HeaderButtons;
