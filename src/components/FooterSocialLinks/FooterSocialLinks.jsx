import React from 'react';

function FooterSocialLinks() {
  return (
    <nav className="footer__column footer__column_content_social">
      <ul className="footer__column-list">
        <li className="footer__column-links">
          <a
            className="footer__column-link"
            href="https://facebook.com/BigBrothers.BigSisters.Russia"
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
        </li>
        <li className="footer__column-links">
          <a
            className="footer__column-link"
            href="https://vk.com/big.brothers.big.sisters"
            target="_blank"
            rel="noreferrer"
          >
            Vkontakte
          </a>
        </li>
        <li className="footer__column-links">
          <a
            className="footer__column-link"
            href="https://instagram.com/nastavniki_org"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
        <li className="footer__column-links">
          <a
            className="footer__column-link"
            href="https://youtube.com/user/Nastavniki"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterSocialLinks;
