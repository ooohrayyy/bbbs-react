import React from 'react';

function HeaderSocialLinks({ menuListSocialClass }) {
  return (
    <ul className={menuListSocialClass}>
      <li className="menu__list-item">
        <a
          className="menu__link"
          href="https://facebook.com/BigBrothers.BigSisters.Russia"
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
          href="https://instagram.com/nastavniki_org"
          target="_blank"
          rel="noreferrer"
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
        >
          youtube
        </a>
      </li>
    </ul>
  );
}

export default HeaderSocialLinks;
