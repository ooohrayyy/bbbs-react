import React from 'react';
import { Link } from 'react-router-dom';

function ReadingsArticleCard({
  cardTitle,
  cardCaption,
  cardText,
  cardLink,
  cardColor,
}) {
  let cardModificator;

  switch (cardColor) {
    case 'green':
      cardModificator = 'card_color_green';
      break;
    case 'yellow':
      cardModificator = 'card_color_yellow';
      break;
    case 'pink':
      cardModificator = 'card_color_pink';
      break;
    default:
      cardModificator = '';
  }

  return (
    <article className="preview__card card-container card-container_type_article">
      <div className={`card ${cardModificator}`}>
        <div className="card__title-wrap">
          <h2 className="section-title">{cardTitle}</h2>
          <p className="caption card__title-caption">{cardCaption}</p>
        </div>
        <Link className="link card__link" to={cardLink}>
          Читать на сайте
        </Link>
      </div>
      <div className="card card_content_annotation">
        <div className="card__content">
          <div className="card__annotation">
            <p className="paragraph card__paragraph">{cardText}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ReadingsArticleCard;
