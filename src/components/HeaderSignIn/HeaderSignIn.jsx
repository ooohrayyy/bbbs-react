import React from 'react';

import Signin from '../Popups/Signin/Signin';

function HeaderSignIn() {
  const [signInModalIsOpen, setSignInModalIsOpen] = React.useState(false);

  function handleSignInModal() {
    console.log('Открытие окна авторизации');

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
      <button
        className="menu__button menu__button_type_user"
        type="button"
        onClick={handleSignInModal}
        aria-label="Личный кабинет"
        title="Личный кабинет"
      />
      <Signin isOpen={signInModalIsOpen} handleSignin={handleSignIn} />
    </>
  );
}

export default HeaderSignIn;
