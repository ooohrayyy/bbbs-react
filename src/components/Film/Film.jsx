import React from 'react';

import filmImg from '../../images/video/video-prev.png';

function Film() {
  return (
    <article className="card card_content_video card-pagination_page_main">
      <div className="video">
        <a href="./films.html" className="card__link-wrap">
          <img src={filmImg} alt="Превью видео" className="video__img"></img>
          <ul className="video__rubric-list">
            <li>
              <p className="rubric video__rubric">рубрика</p>
            </li>
            <li>
              <p className="rubric video__rubric">рубрика</p>
            </li>
          </ul>
        </a>
      </div>
      <div className="card__video-info">
        <div className="card__title-wrap">
          <h2 className="section-title card__title">Волчок</h2>
          <p className="caption card__title-caption">
            Василий Сигарев, Россия, 2009 год
          </p>
        </div>
        <a
          href="./films.html"
          className="link card__link link_action_open-video"
        >
          смотреть трейлер
        </a>
      </div>
    </article>
  );
}

export default Film;
