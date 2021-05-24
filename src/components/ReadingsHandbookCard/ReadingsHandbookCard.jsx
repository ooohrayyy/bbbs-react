import React from 'react';

function ReadingsHandbookCard({
  cardTitle,
  cardImage,
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
        <a href={cardLink} className="rights__link">
          <img
            src={cardImage}
            alt={cardAlt || cardTitle}
            className="catalog-card__image"
          />
        </a>
      </div>
      <h2 className="section-title catalog-card__title">{cardTitle}</h2>
    </article>
  );
}

export default ReadingsHandbookCard;
