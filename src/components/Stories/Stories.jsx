import React from 'react';
import storImg from '../../images/stories/DG7B0561(1).jpg';

function Stories() {
  return (
    <article className="card card_content_media">
      <img
        src={storImg}
        alt="История Марины и Алины"
        className="card__media-img"
      ></img>
      <a href="./stories.html" className="card__media-link section-title">
        История Марины и Алины
      </a>
    </article>
  );
}

export default Stories;
