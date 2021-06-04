import React from 'react';
import { Link } from 'react-router-dom';

function Rubric({ place }) {
  return (
    <article className="card-container card-container_type_main-article">
      <div className="card card_type_main card_color_yellow">
        {place.chosen && (
          <p className="rubric card__rubric">Выбор наставника</p>
        )}

        <div className="card__title-wrap">
          <Link to="/to-go" className="card__link-wrap">
            <h2 className="section-title card__title">{place.title}</h2>
          </Link>
          <p className="caption card__title-caption">{place.name}</p>
        </div>
        <Link
          to="/to-go"
          className="card__link-wrap card__link-wrap_content_article-img"
        >
          <img src={place.imageUrl} alt={place.name} className="card__img" />
        </Link>
        {place.link && (
          <a
            href={place.link}
            rel="noreferrer"
            target="_blank"
            className="link card__link"
          >
            перейти на сайт
          </a>
        )}
      </div>
      <div className="card card_content_annotation card_type_main">
        <div className="card__content">
          {place.info && (
            <p className="caption card__annotation-caption">{place.info}</p>
          )}
          <div className="card__annotation card__annotation_position_main-card">
            <p className="paragraph card__paragraph">{place.description}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Rubric;
