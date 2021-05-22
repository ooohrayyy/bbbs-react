import React from 'react';

import HeaderSearch from '../HeaderSearch/HeaderSearch';
import Signin from '../Popups/Signin/Signin';

function HeaderButtons({ toggleSearchMenu, searchOptionsClass }) {
  const [signInModalIsOpen, setSignInModalIsOpen] = React.useState(false);

  function handleSignInModal() {
    if (signInModalIsOpen) {
      setSignInModalIsOpen(false);
    } else {
      setSignInModalIsOpen(true);
    }
  }

  function handleSignIn() {
    console.log('Попытка входа!');
  }

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
          <button
            className="menu__button menu__button_type_user"
            type="button"
            onClick={handleSignInModal}
            aria-label="Личный кабинет"
            title="Личный кабинет"
          />
        </li>
      </ul>
      <Signin isOpen={signInModalIsOpen} handleSignin={handleSignIn} />
    </>
  );
}

export default HeaderButtons;
