import React from 'react';
import { Link } from 'react-router-dom';

function Stories({ history }) {
  return (
    <article className="card card_content_media">
      <img
        src={history.imageUrl}
        alt={history.title}
        className="card__media-img"
      />
      <Link to="./stories" className="card__media-link section-title">
        {history.title}
      </Link>
    </article>
  );
}

export default Stories;
