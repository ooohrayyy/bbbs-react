import { NavLink } from 'react-router-dom';
import logo from '../images/svg/footer-logo.svg';

export default function Footer() {
  return (
  <footer className="footer">
    <a href="./index.html" className="footer__logo" target="_self">
      <img className="footer__logo-image" src={logo} alt="Логотип Старшие Братья Старшие Сестры России"/>
    </a>
    <button className="button footer__button" type="button">Помочь деньгами</button>
    <div className="footer__column footer__column_content_concept">
      <p className="footer__brand">&copy; Старшие Братья Старшие Сестры</p>
      <div className="footer__copyright">
        <p className="footer__authors">Разработка – студенты
          <a href="https://praktikum.yandex.ru/" className="footer__production" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
        </p>
        <p className="footer__design">Концепция и дизайн –
          <a href="https://krkr.design/" className="footer__production" target="_blank" rel="noreferrer">krkr.design</a>
        </p>
      </div>
    </div>
    <nav className="footer__column footer__column_content_info">
      <ul className="footer__column-list">
        <li className="footer__column-links"><NavLink to="#" className="footer__column-link" target="_self">о проекте</NavLink></li>
        <li className="footer__column-links"><NavLink to="#" className="footer__column-link" target="_self">календарь</NavLink></li>
        <li className="footer__column-links"><NavLink to="#" className="footer__column-link" target="_self">куда пойти</NavLink></li>
        <li className="footer__column-links"><NavLink to="#" className="footer__column-link" target="_self">вопросы</NavLink></li>
        <li className="footer__column-links"><NavLink to="#" className="footer__column-link" target="_self">читать и смотреть</NavLink></li>
        <li className="footer__column-links"><NavLink to="#" className="footer__column-link" target="_self">права детей</NavLink></li>
        <li className="footer__column-links"><NavLink to="#" className="footer__column-link" target="_self">истории</NavLink></li>
      </ul>
    </nav>
    <nav className="footer__column footer__column_content_social">
      <ul className="footer__column-list">
        <li className="footer__column-links"><a href="https://www.facebook.com/BigBrothers.BigSisters.Russia/" className="footer__column-link" target="_blank" rel="noreferrer">facebook</a></li>
        <li className="footer__column-links"><a href="https://vk.com/big.brothers.big.sisters" className="footer__column-link" target="_blank" rel="noreferrer">vkontakte</a></li>
        <li className="footer__column-links"><a href="https://www.instagram.com/nastavniki_org/" className="footer__column-link" target="_blank" rel="noreferrer">instagram</a></li>
        <li className="footer__column-links"><a href="https://www.youtube.com/user/Nastavniki/" className="footer__column-link" target="_blank" rel="noreferrer">youtube</a></li>
      </ul>
    </nav>
  </footer>
  );
}
