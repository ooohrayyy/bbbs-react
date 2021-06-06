import React from 'react';

function HeaderAuthorize({ isAuthorized, onSignInClick }) {
  const buttonStyle = isAuthorized
    ? 'menu__button menu__button_type_active-user'
    : 'menu__button menu__button_type_user';

  return (
    <>
      <button
        className={buttonStyle}
        type="button"
        onClick={onSignInClick}
        aria-label="Личный кабинет"
        title="Личный кабинет"
      />
    </>
  );
}

export default HeaderAuthorize;
