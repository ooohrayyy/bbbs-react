import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RightsCard({ cardTitle, cardLink, cardForm, cardColor, onCardClick }) {
  let form;
  let color;

  switch (cardForm) {
    case 'square':
      form = 'card_form_square';
      break;
    case 'circle':
      form = 'card_form_circle';
      break;
    case 'arc':
      form = 'card_form_arc';
      break;
    default:
      form = '';
  }

  switch (cardColor) {
    case 'green':
      color = 'card_color_green';
      break;
    case 'yellow':
      color = 'card_color_yellow';
      break;
    case 'blue':
      color = 'card_color_blue';
      break;
    case 'pink':
      color = 'card_color_pink';
      break;
    default:
      color = '';
  }

  const handleCardClick = (e) => onCardClick(e.target.textContent);

  return (
    <div className="catalog-card card-pagination card-pagination_type_shapes">
      <div className={`card ${color} ${form} rights__card`}>
        <div className="rights__link">
          <Link
            onClick={handleCardClick}
            to={cardLink}
            style={{ textDecoration: 'none' }}
          >
            <h2 className="section-title">{cardTitle}</h2>
          </Link>
          <p className="rubric rights__rubric">рубрика</p>
        </div>
      </div>
    </div>
  );
}

RightsCard.propTypes = {
  cardTitle: PropTypes.string,
  cardLink: PropTypes.string,
  cardForm: PropTypes.string,
  cardColor: PropTypes.string,
  onCardClick: PropTypes.instanceOf(Function),
};

export default RightsCard;
