import React from 'react';

import HeaderSearch from '../../HeaderSearch/HeaderSearch';
import HeaderAuthorize from '../HeaderAuthorize/HeaderAuthorize';

function HeaderButtons({
  isAuthorized,
  toggleSearchMenu,
  searchOptionsClass,
  onSignInClick,
}) {
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
          <HeaderAuthorize
            isAuthorized={isAuthorized}
            onSignInClick={onSignInClick}
          />
        </li>
      </ul>
    </>
  );
}

export default HeaderButtons;
