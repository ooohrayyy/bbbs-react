import React from 'react';

import RightsCard from './RightsCard/RightsCard';
import rightsCardsData from '../../assets/dev-data/rightsCardsData';

import arrow from '../../images/svg/arrow-right-grey.svg';

function Rights() {
  return (
    <>
      <section className="lead page__section">
        <h1 className="main-title">Права детей</h1>
        <div className="tags">
          <ul className="tags__list">
            <li className="tags__list-item">
              <button
                className="button tags__button tags__button_active"
                type="button"
              >
                Все
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Жильё
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Образование
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Транспорт
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Трудоустройство
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Пенсии
              </button>
            </li>
            <li className="tags__list-item">
              <button className="button tags__button" type="button">
                Медицина
              </button>
            </li>
          </ul>
        </div>
      </section>

      <section className="rights page__section">
        <div className="rights__line rights__line_stage_first" />
        <div className="rights__line rights__line_stage_second" />
        <div className="rights__line rights__line_stage_third" />

        {rightsCardsData.map((item, index) => (
          <RightsCard
            cardTitle={item.cardTitle}
            cardLink={item.cardLink}
            cardForm={item.cardForm}
            cardColor={item.cardColor}
            key={index}
          />
        ))}
      </section>

      <section className="pagination page__section">
        <nav className="pagination__nav" aria-label="Навигация по страницам">
          <ul className="pagination__list">
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link pagination__link_active">
                1
              </a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">
                2
              </a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">
                3
              </a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">
                4
              </a>
            </li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">
                5
              </a>
            </li>
            <li className="pagination__list-item section-title">...</li>
            <li className="pagination__list-item section-title">
              <a href="#" className="pagination__link">
                18
              </a>
            </li>
          </ul>
          <img src={arrow} alt="стрелка вправо" className="pagination__arrow" />
        </nav>
      </section>
    </>
  );
}

export default Rights;
