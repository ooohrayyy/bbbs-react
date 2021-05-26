import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AboutCard({ title, text, path, link, color }) {
  return (
    <article className="card-container about__card-container">
      <div className={`card card_color_${color} about__card`}>
        <h2 className="section-title">{title}</h2>
      </div>
      <div className="card card_content_annotation">
        <div className="card__content about__card-content">
          <div className="card__annotation">
            <p className="paragraph card__paragraph">{text}</p>
          </div>
        </div>
        <Link to={path} className="link card__link about__card-link">
          {link}
        </Link>
      </div>
    </article>
  );
}

AboutCard.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
  link: PropTypes.string,
};

export default AboutCard;
