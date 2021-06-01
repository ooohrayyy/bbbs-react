import React from 'react';

function ReadingsVideoCard({
  cardTitle,
  cardCaption,
  cardPreview,
  cardDuration,
}) {
  return (
    <article className="preview__card card card_content_video">
      <div className="video">
        <img className="video__img" src={cardPreview} alt="Превью видео" />
        <p className="video__duration paragraph">{cardDuration}</p>
      </div>
      <div className="card__video-info">
        <div className="card__title-wrap">
          <h2 className="section-title card__title">{cardTitle}</h2>
          <p className="caption card__title-caption">{cardCaption}</p>
        </div>
        <a className="link card__link link_action_open-video" href="#">
          Смотреть видео
        </a>
      </div>
    </article>
  );
}

export default ReadingsVideoCard;
