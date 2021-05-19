import React from 'react';

function Stories({ history }) {
  console.log(history);
  return (
    <article className="card card_content_media">
      <img
        src={history.imageUrl}
        alt={history.title}
        className="card__media-img"
      />
      <a href="./stories.html" className="card__media-link section-title">
        {history.title}
      </a>
    </article>
  );
}

export default Stories;
