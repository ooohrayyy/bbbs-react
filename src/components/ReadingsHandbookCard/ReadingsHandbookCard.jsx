import React from 'react';
import { Link } from 'react-router-dom';

import devImage from '../../assets/dev-data/ReadingsData/ReadingsHandbookData/CardImages/catalog-hulk-boys.jpg';

function ReadingsHandbookCard({
  cardTitle,
  // cardImage,
  cardAlt,
  cardLink,
  cardStyle,
}) {
  let cardModificator;

  switch (cardStyle) {
    case 'square':
      cardModificator = 'card_form_square';
      break;
    case 'circle':
      cardModificator = 'card_form_circle';
      break;
    case 'arc':
      cardModificator = 'card_form_arc';
      break;
    default:
      cardModificator = '';
  }

  return (
    <article className="preview__card catalog-card">
      <div className={`card ${cardModificator} rights__card`}>
        <Link className="rights__link" to={cardLink}>
          <img
            // src={cardImage}
            src={devImage}
            alt={cardAlt || cardTitle}
            className="catalog-card__image"
          />
        </Link>
      </div>
      <h2 className="section-title catalog-card__title">{cardTitle}</h2>
    </article>
  );
}

export default ReadingsHandbookCard;
