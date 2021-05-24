import React from 'react';

function ReadingsHandbook() {
  return (
    <>
      <section className="preview page__section">
        <div className="preview__title-wrap">
          <a href="./catalog.html" className="link">
            <h3 className="chapter-title chapter-title_clickable">
              Справочник
            </h3>
          </a>
          <div className="preview__buttons">
            <button
              className="preview__button preview__button_left"
              type="button"
              label="left"
            />
            <button
              className="preview__button preview__button_right"
              type="button"
              label="right"
            />
          </div>
        </div>
        <div className="preview__row">
          <article className="preview__card catalog-card">
            <div className="card card_form_square rights__card">
              <a href="./article.html" className="rights__link">
                <img
                  src="./images/catalog/catalog-hulk-boys.jpg"
                  alt="Психологические особенности детей-сирот"
                  className="catalog-card__image"
                />
              </a>
            </div>
            <h2 className="section-title catalog-card__title">
              Психологические особенности детей-сирот
            </h2>
          </article>

          <article className="preview__card catalog-card">
            <div className="card card_color_green card_form_circle rights__card">
              <a href="./article.html" className="rights__link">
                <img
                  src="./images/catalog/catalog-coffee.jpg"
                  alt="Привязанность"
                  className="catalog-card__image"
                />
              </a>
            </div>
            <h2 className="section-title catalog-card__title">Привязанность</h2>
          </article>

          <article className="preview__card catalog-card">
            <div className="card card_color_yellow card_form_arch rights__card">
              <a href="./article.html" className="rights__link">
                <img
                  src="./images/catalog/catalog-beach.jpg"
                  alt="Особенности социально дезадаптивных детей"
                  className="catalog-card__image"
                />
              </a>
            </div>
            <h2 className="section-title catalog-card__title">
              Особенности социально дезадаптивных детей
            </h2>
          </article>

          <article className="preview__card catalog-card">
            <div className="card card_color_pink card_form_circle rights__card">
              <a href="./article.html" className="rights__link">
                <img
                  src="./images/catalog/catalog-coffee.jpg"
                  alt="Социальная адаптация"
                  className="catalog-card__image"
                />
              </a>
            </div>
            <h2 className="section-title catalog-card__title">
              Социальная адаптация
            </h2>
          </article>

          <article className="preview__card catalog-card">
            <div className="card card_color_blue card_form_arch rights__card">
              <a href="./article.html" className="rights__link">
                <img
                  src="./images/catalog/catalog-blue-hand.jpg"
                  alt="Социально дезадаптивные дети"
                  className="catalog-card__image"
                />
              </a>
            </div>
            <h2 className="section-title catalog-card__title">
              Социально дезадаптивные дети
            </h2>
          </article>

          <article className="preview__card catalog-card">
            <div className="card card_color_pink card_form_square rights__card">
              <a href="./article.html" className="rights__link">
                <img
                  src="./images/catalog/catalog-spear.jpg"
                  alt="Проявление агрессии у детей-сирот"
                  className="catalog-card__image"
                />
              </a>
            </div>
            <h2 className="section-title catalog-card__title">
              Проявление агрессии у детей-сирот
            </h2>
          </article>
        </div>
      </section>
    </>
  );
}

export default ReadingsHandbook;
