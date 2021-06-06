import React from 'react';

function HeaderSocialLinks({ menuListSocialClass, setBurgerMenuIsOpen }) {
  function handleLinkClick() {
    setBurgerMenuIsOpen(false);
  }

  return (
    <ul className={menuListSocialClass}>
      <li className="menu__list-item">
        <a
          className="menu__link"
          href="https://facebook.com/BigBrothers.BigSisters.Russia"
          target="_blank"
          rel="noreferrer"
          onClick={handleLinkClick}
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
          onClick={handleLinkClick}
        >
          vkontakte
        </a>
      </li>
      <li className="menu__list-item">
        <a
          className="menu__link"
          href="https://instagram.com/nastavniki_org"
          target="_blank"
          rel="noreferrer"
          onClick={handleLinkClick}
        >
          instagram
        </a>
      </li>
      <li className="menu__list-item">
        <a
          className="menu__link"
          href="https://youtube.com/user/Nastavniki"
          target="_blank"
          rel="noreferrer"
          onClick={handleLinkClick}
        >
          youtube
        </a>
      </li>
    </ul>
  );
}

export default HeaderSocialLinks;
