import React from 'react';

function HeaderBurgerMenu({ burgerMenuClass, toggleBurgerMenu }) {
  return (
    <button
      className={burgerMenuClass}
      type="button"
      onClick={toggleBurgerMenu}
    >
      <span className="menu__burger-line" />
      <span className="menu__burger-line" />
      <span className="menu__burger-line" />
    </button>
  );
}

export default HeaderBurgerMenu;
